import { describe, expect, it, vi, beforeAll } from 'vitest';
import { UIManager } from '../../src/ui/manager';
import { GameLogic } from '../../src/logic/game';
import { createInitialState } from '../../src/logic/state';
import { START_SENTENCE } from '../../src/logic/constants';

// Minimal DOM mock for Node environment
function createMockElement(tag: string = 'div'): any {
  const listeners: Record<string, Function[]> = {};
  const classes = new Set<string>();
  const children: any[] = [];
  const attributes: Record<string, string> = {};
  let _innerHTML = '';

  const el = {
    tagName: tag.toUpperCase(),
    style: {},
    classList: {
      add: (c: string) => classes.add(c),
      remove: (c: string) => classes.delete(c),
      toggle: (c: string, force?: boolean) => {
        if (force === undefined) {
          if (classes.has(c)) classes.delete(c); else classes.add(c);
        } else if (force) classes.add(c); else classes.delete(c);
      },
      contains: (c: string) => classes.has(c),
    },
    dataset: {} as Record<string, string>,
    value: '',
    textContent: '',
    get innerHTML() {
      return _innerHTML;
    },
    set innerHTML(html: string) {
      _innerHTML = html;
      children.length = 0;
      const parsed = parseHTMLToMock(html);
      children.push(...parsed.children);
    },
    disabled: false,
    children,
    addEventListener: (event: string, fn: Function) => {
      (listeners[event] ??= []).push(fn);
    },
    dispatchEvent: (evt: { type: string }) => {
      listeners[evt.type]?.forEach((fn) => fn(evt));
      return true;
    },
    click: () => {
      listeners['click']?.forEach((fn) => fn({ preventDefault: () => {} }));
    },
    focus: () => {
      listeners['focus']?.forEach((fn) => fn());
    },
    setAttribute: (k: string, v: string) => { attributes[k] = v; },
    getAttribute: (k: string) => attributes[k] || null,
    scrollIntoView: () => {},
    getBoundingClientRect: () => ({ top: 10, bottom: 100, left: 0, right: 100, width: 100, height: 90 }),
    getContext: () => ({
      fillRect: () => {},
      clearRect: () => {},
      beginPath: () => {},
      arc: () => {},
      fill: () => {},
      stroke: () => {},
      closePath: () => {},
      moveTo: () => {},
      lineTo: () => {},
      save: () => {},
      restore: () => {},
      translate: () => {},
      rotate: () => {},
    }),
    querySelector: (sel: string) => el.querySelectorAll(sel)[0] || null,
    querySelectorAll: (sel: string): any[] => {
      const results: any[] = [];
      const search = (node: any) => {
        let match = false;
        if (sel.startsWith('#') && sel.slice(1) === node.id) match = true;
        else if (sel.startsWith('.') && node.classList?.contains(sel.slice(1))) match = true;
        else if (sel.startsWith('[data-')) {
          const m = sel.match(/\[data-([a-zA-Z0-9_-]+)(?:="([^"]+)")?\]/);
          if (m) {
            const key = m[1].replace(/-([a-z])/g, (_, l) => l.toUpperCase());
            if (m[2] !== undefined) match = node.dataset?.[key] === m[2];
            else match = node.dataset?.[key] !== undefined;
          }
        } else if (sel.toLowerCase() === node.tagName?.toLowerCase()) match = true;

        if (match) results.push(node);
        node.children?.forEach(search);
      };
      search(el);
      return results;
    },
  };
  return el;
}

function parseHTMLToMock(html: string): any {
  const root = createMockElement('div');
  (root as any)._innerHTML = html;
  root.textContent = html.replace(/<[^>]+>/g, ' ');

  const tagRegex = /<([a-zA-Z0-9]+)([^>]*)>/g;
  let match;
  while ((match = tagRegex.exec(html)) !== null) {
    const tagName = match[1];
    const attrStr = match[2];
    const child = createMockElement(tagName);

    const idMatch = attrStr.match(/id="([^"]+)"/);
    if (idMatch) (child as any).id = idMatch[1];

    const classMatch = attrStr.match(/class="([^"]+)"/);
    if (classMatch) {
      classMatch[1].split(/\s+/).forEach((c) => child.classList.add(c));
    }

    const dataMatches = attrStr.matchAll(/data-([a-zA-Z0-9_-]+)="([^"]+)"/g);
    for (const dm of dataMatches) {
      const key = dm[1].replace(/-([a-z])/g, (_, l) => l.toUpperCase());
      child.dataset[key] = dm[2];
    }

    const valMatch = attrStr.match(/value="([^"]*)"/);
    if (valMatch) child.value = valMatch[1];

    root.children.push(child);
  }
  return root;
}

beforeAll(() => {
  if (typeof globalThis.ResizeObserver === 'undefined') {
    (globalThis as any).ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  }
  if (typeof globalThis.window === 'undefined') {
    (globalThis as any).window = {
      innerWidth: 956,
      innerHeight: 440,
      devicePixelRatio: 1,
      addEventListener: () => {},
      removeEventListener: () => {},
      matchMedia: () => ({ matches: false }),
    };
  }
  if (typeof globalThis.document === 'undefined') {
    (globalThis as any).document = {
      createElement: (tag: string) => createMockElement(tag),
      getElementById: () => null,
      querySelector: () => null,
      querySelectorAll: () => [],
    };
  }
});

describe('VIỆC 1: Bảng chọn nhân vật mới (Preview 3D trực tiếp & bố cục 2 cột)', () => {
  it('Khởi tạo hiển thị đúng hằng số START_SENTENCE (30 ngày) và không còn chữ kỳ xét giảm án cũ', () => {
    const g = new GameLogic(createInitialState());
    const container = createMockElement('div');
    const sfx = { play: () => {}, good: () => {}, bad: () => {}, click: () => {} } as any;

    const ui = new UIManager(container, g, sfx, {
      npcs: () => ({}),
      playerPos: () => ({ x: 0, z: 0, rot: 0 }),
      onWait: () => {},
      onSleep: () => {},
      onReset: () => {},
      onSettingChange: () => {},
    });

    let renderedHTML = '';
    (ui as any).showModal = (html: string) => {
      renderedHTML = html;
    };

    ui.showCharacterCreation(() => {});

    // Khớp hằng số START_SENTENCE
    expect(renderedHTML).toContain(`Mốc 3 · ${START_SENTENCE} ngày`);
    expect(renderedHTML).toContain(`Bản án: <b>${START_SENTENCE} ngày</b>`);

    // Cơ chế kỳ xét giảm ngày đã xóa, không còn dòng cũ
    expect(renderedHTML).not.toContain('Kỳ xét giảm: 4 ngày/lần (0–2 ngày)');
  });

  it('Có đầy đủ khung preview 3D, thẻ mẫu có ảnh thumbnail và bố cục gọn', () => {
    const g = new GameLogic(createInitialState());
    const container = createMockElement('div');
    const sfx = {} as any;

    const ui = new UIManager(container, g, sfx, {
      npcs: () => ({}),
      playerPos: () => ({ x: 0, z: 0, rot: 0 }),
      onWait: () => {},
      onSleep: () => {},
      onReset: () => {},
      onSettingChange: () => {},
    });

    let renderedHTML = '';
    (ui as any).showModal = (html: string) => {
      renderedHTML = html;
    };

    ui.showCharacterCreation(() => {});

    // Có khung preview canvas
    expect(renderedHTML).toContain('id="cc-preview-canvas"');

    // 3 thẻ mẫu đều có thẻ ảnh thumbnail
    expect(renderedHTML).toContain('id="cc-preset-thumb-0"');
    expect(renderedHTML).toContain('id="cc-preset-thumb-1"');
    expect(renderedHTML).toContain('id="cc-preset-thumb-2"');

    // Bố cục 2 cột xuất thân và biến cố
    expect(renderedHTML).toContain('cc-two-col');
    expect(renderedHTML).toContain('cc-diff-grid');
    expect(renderedHTML).toContain('cc-chips-row');
  });

  it('Đổi mẫu, tông da, kiểu tóc cập nhật hook onUpdateAppearance tức thì', () => {
    const g = new GameLogic(createInitialState());
    const container = createMockElement('div');
    const sfx = {} as any;
    const onUpdateAppearance = vi.fn();

    const ui = new UIManager(container, g, sfx, {
      npcs: () => ({}),
      playerPos: () => ({ x: 0, z: 0, rot: 0 }),
      onWait: () => {},
      onSleep: () => {},
      onReset: () => {},
      onSettingChange: () => {},
      onUpdateAppearance,
    });

    let mountCallback: any = null;
    let renderedHTML = '';
    (ui as any).showModal = (html: string, onMount: any) => {
      renderedHTML = html;
      mountCallback = onMount;
    };

    ui.showCharacterCreation(() => {});
    const mockEl = parseHTMLToMock(renderedHTML);
    mountCallback(mockEl);

    // Click Mẫu 2 (preset 1)
    const preset1 = mockEl.querySelector('[data-preset="1"]');
    preset1?.click();
    expect(onUpdateAppearance).toHaveBeenCalledWith(
      expect.objectContaining({ preset: 1, hairStyle: 'buzz', skin: 0xe2b48d })
    );

    // Click Tóc trọc
    const hairBald = mockEl.querySelector('[data-hair="bald"]');
    hairBald?.click();
    expect(onUpdateAppearance).toHaveBeenCalledWith(
      expect.objectContaining({ hairStyle: 'bald' })
    );

    // Click Da sáng
    const skinLight = mockEl.querySelector('[data-skin="light"]');
    skinLight?.click();
    expect(onUpdateAppearance).toHaveBeenCalledWith(
      expect.objectContaining({ skin: 0xf5d0b0 })
    );
  });

  it('Gửi đúng profile hoàn chỉnh khi nhấn Bắt đầu hành trình', () => {
    const g = new GameLogic(createInitialState());
    const container = createMockElement('div');
    const sfx = {} as any;

    const ui = new UIManager(container, g, sfx, {
      npcs: () => ({}),
      playerPos: () => ({ x: 0, z: 0, rot: 0 }),
      onWait: () => {},
      onSleep: () => {},
      onReset: () => {},
      onSettingChange: () => {},
    });

    let created: any = null;
    let mountCallback: any = null;
    let renderedHTML = '';
    (ui as any).showModal = (html: string, onMount: any) => {
      renderedHTML = html;
      mountCallback = onMount;
    };

    ui.showCharacterCreation((prof) => {
      created = prof;
    });

    const mockEl = parseHTMLToMock(renderedHTML);
    mountCallback(mockEl);

    const inputName = mockEl.querySelector('#cc-input-name');
    inputName.value = 'Văn Nam';

    mockEl.querySelector('[data-preset="2"]')?.click();
    mockEl.querySelector('[data-bg="clerk"]')?.click();
    mockEl.querySelector('[data-fb="chase_contact"]')?.click();
    mockEl.querySelector('[data-diff="hard"]')?.click();

    const btnSubmit = mockEl.querySelector('#btn-cc-submit');
    btnSubmit?.click();

    expect(created).not.toBeNull();
    expect(created.name).toBe('Văn Nam');
    expect(created.preset).toBe(2);
    expect(created.background).toBe('clerk');
    expect(created.flashbackChoice).toBe('chase_contact');
    expect(created.difficulty).toBe('hard');
    expect(created.introSeen).toBe(true);
  });
});
