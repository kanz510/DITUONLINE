# Nhật ký bàn giao AI — ĐI TÙ ONLINE

## Quy trình
- Đọc file này và `AGENTS.md` trước khi sửa.
- Mỗi đợt sửa thêm một mục mới lên đầu phần **Lịch sử thay đổi**, giữ nguyên các mục cũ.
- Ghi rõ các file sửa, hành vi trước/sau, test thực sự chạy, lỗi chưa xử lý, commit liên quan và chỉ dẫn cho lượt tiếp theo.
- Trước khi push, so sánh với `origin/main` mới nhất; tuyệt đối không ghi đè code mới bằng bản cũ.

## Lịch sử thay đổi

### 2026-11-03 — ChatGPT — Cụm nút góc phải / tên khu trên minimap / nút Tương tác gọn
- Người dùng gửi ảnh iPhone landscape: cụm nút góc phải trên và chỉ số rời rạc; minimap không có tên khu; nút Chạy và Tương tác quá lớn, che game.
- `src/ui/manager.ts`: vẫn giữ Án / Fullscreen / Túi đồ / Menu, chuyển minimap thành nút mở bảng Bản đồ chi tiết. Thêm label `#minimap-area` lấy `zoneName(player.x, player.z)` cập nhật mỗi tick; tên viết tắt trực tiếp trên từng tòa nhà (`Giam, Ăn, Xưởng, QL, YT, Học, Thăm, KL`) và sáng viền nơi đang đứng, không đổi hình học/cửa/route. Bỏ HTML nút Chạy, bỏ property btnSprint. Thay nút Tương tác bằng biểu tượng SVG + nhãn ngắn chỉ khi có prompt; label và title đầy đủ cho accessibility, vẫn gọi event click cũ.
- `src/main.ts`: bỏ các touch/mouse listeners của btnSprint. Cơ chế tự chạy khi đẩy joystick quá 0.92 hoặc Shift trên desktop trong `InputController.moveVector()` vẫn nguyên; không sửa kinh tế/gameplay/save.
- `src/ui/styles.css`: cụm nút top-right bo kính gom nhóm, Án và ba icon chạm 44px, chỉ số dưới gọn hơn; minimap có tên vùng ở dải dưới (status khóa phía trên), viền focus để bấm; nút tương tác khi không có prompt dạng icon 50×50 trong mờ, khi có prompt thành pill nhỏ tối đa 158px với chữ rút gọn.
- `tests/e2e/hotfix.spec.ts`: test nút Chạy không tồn tại, ba nút toolbar còn nguyên, không tràn/đè nhau, mini-map đổi zone khi teleport và mở bảng bản đồ, nút tương tác hoạt động tại giường.
- Commit mã: `cb2ac50fc0ba8053adb998ffc71aea0c4e522290`, `170df6e7b6824c49d8c2869287426d80a720a74e`, `94fbf7fc97eeeb38f3c8909258c3fb453cc67507`, test `bc1e38d344711641e7742f83689ab93aaefb2c29`.
- Kiểm thử: GitHub Actions unit test và Vite build trên commit sau sửa CSS đã qua bước build; một số workflow trung gian lỗi ở bước sync `dist/` vì commit mới liên tiếp làm non-fast-forward. E2E Safari chưa chạy trong phiên này; cần xác minh workflow bản cuối hoàn thành và bản Pages đã cập nhật.
- Antigravity: không khôi phục `btn-sprint` hoặc `btnSprint`. Sprint tự động theo joystick vẫn giữ; map có nhãn và click dẫn đến `showMap()`. Đọc diff trước khi sửa các file này.

### 2026-11-03 — ChatGPT — HUD Ngày/giờ + Mục tiêu kiểu kính mờ, giảm che màn hình iPhone
- Lý do: người dùng gửi ảnh iPhone landscape; ô Ngày 1 và Mục tiêu bên trái quá đặc, rộng, xếp chồng làm che cảnh 3D; toast cảnh báo cũng chiếm khoảng lớn.
- `src/ui/styles.css`: riêng `#hud-clock` và `.hud-quest-bar` dùng nền rgba(10,19,37,0.54), blur 15px và shadow nhẹ để nhìn xuyên qua nhưng còn rõ chữ; hover mission không tăng quá tối. `.hud-left` căn cố định chiều rộng hợp lý, `.hud-quest-bar` dùng 100% chiều rộng cột; xử lý min-width cho header để không tràn.
- Responsive `@media (orientation:landscape) and (max-height:500px)`: cột trái tối đa 294px/41vw, padding, font/line-height thu gọn; mô tả quest giới hạn 2 dòng chỉ trong HUD mini (bấm bảng nhiệm vụ vẫn xem nội dung đầy đủ); footer giữ nút tự đi và nút thu gọn với diện tích chạm; toast giới hạn max-height 72px và tối đa 2 dòng mỗi toast.
- Không thay gameplay, dữ liệu lưu, cơ chế hoàn thành nhiệm vụ hay chức năng tự đi. Không ẩn mục tiêu đang hoạt động, vẫn mở chi tiết bằng bấm vào bảng.
- `tests/e2e/hotfix.spec.ts`: thêm case đo computed background alpha, chiều rộng HUD trên 956×440 và 844×390, kiểm tra toggle thu gọn. E2E mới chỉ được thêm vào mã nguồn; CI mặc định chạy unit + build, chưa chạy Playwright/Safari thật trong phiên này.
- Commit: `891e1a0e08972aae05c884faffedc8c7e7fce9ad` (CSS), `0729c365908673a0e74bf7dd8a4e6e4c640db82f` (E2E), `c9e92e0ce5e6cb7a5309f7ed1517589513243234` (E2E ổn định).
- Antigravity / agent kế tiếp: giữ cơ chế glass + layout compact. Đọc diff `src/ui/styles.css` trước khi can thiệp để không khôi phục opacity 0.94. Kiểm tra GitHub Pages thực sự đang phục vụ build mới; kiểm thử trực tiếp iPhone khi có thể.

### 2026-11-03 — ChatGPT — Bỏ nút Đóng trùng và cân lại giao diện modal
- Người dùng xác nhận X đã hiện trên iPhone, yêu cầu xóa nút "Đóng" dư phía dưới trên mọi bảng, chỉnh nội dung trải đều và không lệch.
- `src/ui/manager.ts`: xử lý tập trung tại `showModal()`. Chỉ với modal đã có `button[data-close]` thì thêm X, đặt class `has-top-close`, xóa các nút có chữ chính xác "Đóng" hoặc "Đóng Menu" và wrapper footer rỗng. Giữ các nút hành động có nghĩa riêng: "Hủy", "Thoát", "Đã hiểu", "Tiếp tục chơi", "Bắt đầu lượt chơi mới" và những nút xác nhận. Đăng ký listener đóng cho các `data-close` còn lại. Không mở thêm cách thoát modal bắt buộc vốn không có `data-close`.
- `src/ui/styles.css`: bỏ hẳn CSS cũ `padding-right:54px` áp lên toàn modal (gây lệch). Modal dùng padding trái/phải cân, chỉ tiêu đề đầu dành chỗ cho X, rộng tối đa 720px (riêng tạo nhân vật giữ 680px), nút X 44×44px ở ngoài vùng cuộn, responsive chiều ngang iPhone.
- `tests/e2e/hotfix.spec.ts`: thêm test mobile landscape kiểm tra modal Nhiệm vụ / Nhân vật không còn nút Đóng trùng, nội dung thẻ có margin trái/phải cân nhau, X đóng được; menu vẫn hiện build tag; popup Cài đặt giữ "Tiếp tục chơi" và nút reset.
- Commit: `249b341663273f2c23a48df64eb11b28a72023f5`, `23d74aca4d8a2a3cafafe722efa94033d9696985`, `feaeb7038ed904e138a17e2be4426fca7e8a8b94`, `529678966a56c58f3470fe2b4559f8bf2ffeac68`.
- Kiểm thử: có test E2E mới trong repo nhưng chưa thực thi Playwright trên Safari; workflow GitHub Actions chạy unit tests và build Vite trên các commit, chờ xác nhận bản deploy cuối. Các lần chạy CI giữa đợt sửa bị Git push generated dist từ checkout cũ từ chối (non-fast-forward) khi còn commit mới được đẩy liên tục, không được force push.
- Antigravity: chỉ xoá nhãn Đóng / Đóng Menu dư, KHÔNG bỏ Hủy hoặc các lựa chọn gameplay. Không khôi phục `padding-right:54px`; giữ đồng bộ `dist/` từ workflow mới.

### 2026-11-03 — ChatGPT — Sửa Pages phát hành bản dist cũ (nguyên nhân không thấy nút X)
- Triệu chứng: trên iPhone, bảng Nhân vật & Kỹ năng không hiện X dù src đã có.
- Chẩn đoán qua Actions: repository đồng thời có workflow "pages build and deployment" (Jekyll từ nhánh main) và "Deploy to GitHub Pages" (Vite build); bản dist/ được commit trước đó vẫn chứa JS/CSS cũ nên lần Pages build từ nhánh có thể ghi đè bản mới.
- Thay đổi `.github/workflows/deploy.yml`: cấp quyền contents:write; sau unit test và Vite build, commit và push `dist/`, `sw.js`, `release.json` bằng github-actions[bot] nếu nội dung đổi; guard `[generated-pages]` tránh workflow tự lặp. Không force push, không ghi đè commit mới nếu có xung đột.
- Commit workflow: `53db26de83f8f933f4e8f755773faa3b0b166e20` (YAML lỗi dấu hai chấm trong biểu thức, CI không chạy); commit sửa YAML: `2e005b7f6e9d3206865746d9f61f9bc4e3d8e9b9`.
- Workflow đã tạo commit tự động `125b60bc4f48d84ab31826d5fa2dbc8d3a2f100a`, cập nhật `dist/assets/index-CHf_XcMm.js`, `dist/assets/index-BMylmsZC.css`, `dist/index.html`, `dist/release.json` v.v.
- Xác nhận bằng đọc file trên GitHub: bundle JS mới có `modal-close-top`, `modal-shell` và `Đóng bảng`; CSS cũng có `modal-close-top`; release hash mới `60f365e559f5`, thay `f02df49cc594`.
- Kiểm thử: CI chạy unit test và build thành công đến bước sync; chưa xác nhận trực tiếp trên Safari trong phiên này. Cần kiểm tra Pages đã hoàn tất và nút X khi mở các bảng.
- Antigravity: KHÔNG xóa bước sync `dist/` nếu Pages còn deploy Jekyll từ nhánh. Nếu chuyển Pages Source sang GitHub Actions duy nhất, có thể bỏ bước sync sau khi xác thực trang đang chạy bản build mới.

### 2026-11-02 — ChatGPT — Sửa nút X không hiển thị trên iPhone
- Người dùng gửi ảnh bảng Nhân vật & Kỹ năng không có nút X sau bản sửa trước.
- `src/ui/manager.ts`: bọc modal trong `.modal-shell`, gắn nút X làm phần tử cùng cấp với modal, thay vì nằm trong vùng cuộn.
- `src/ui/styles.css`: `.modal-shell` làm mốc định vị; nút X `position:absolute` ở góc trên phải và z-index cao, nội dung bảng chừa khoảng bên phải.
- Commit: `9b27c0c9656b48d6afa34eb97cb75ee8d0a13391`, `a8006599e59a8e136ac18e1983fbbf6991210f5b`.
- Chưa kiểm thử Safari thực tế; cần kiểm tra trên iPhone và xác nhận bản Pages mới được deploy.
- Antigravity: giữ `.modal-shell` và nút X bên ngoài `.modal`; không hoàn tác thành `m.prepend(closeTop)`.

### 2026-11-02 — ChatGPT — Nút X đóng bảng ở góc trên
- Yêu cầu: đóng nhanh các bảng dài như Nhiệm vụ/Nội quy trên iPhone mà không cần cuộn xuống cuối.
- `src/ui/manager.ts`: trong `showModal`, thêm nút × ở đầu những modal đã có `[data-close]`; sử dụng `closeModal()` sẵn có. Modal bắt buộc không có nút đóng được giữ nguyên.
- `src/ui/styles.css`: nút 40×40, `position: sticky; top: 0`, nổi trên nội dung khi cuộn, có nhãn accessibility và focus style.
- Commit code: `85b80d26590c16245db4fd11b980f5fe3f70f650`; CSS: `96c94360a6e977a59db3d657577260a7307456cf`.
- Kiểm thử: chưa chạy build, unit hay Safari runtime trong môi trường hiện tại. Cần xác nhận trực tiếp trên iPhone, đặc biệt các bảng dài và modal tạo nhân vật.
- Antigravity: giữ phần `modal-close-top` và logic thêm nút trong `showModal`; không thay `manager.ts`/`styles.css` bằng bản cũ.

### 2026-11-02 — ChatGPT — Thiết lập phối hợp AI
- Mục tiêu: tạo quy tắc và nhật ký bàn giao để ChatGPT và Antigravity không vô tình ghi đè thay đổi của nhau.
- File thêm: `AGENTS.md`, `docs/AI_HANDOFF.md`.
- Gameplay/code runtime: không thay đổi.
- Kiểm thử: không chạy build hoặc test; đây chỉ là tài liệu.
- Lưu ý cho Antigravity: đọc hai file này, kiểm tra commit mới nhất và diff trước khi sửa. Bổ sung mục bàn giao sau mỗi lần làm việc.
- Commit: xem lịch sử Git cho commit tạo tài liệu này.

## Việc tiếp theo
- Kiểm tra mã nguồn hiện tại, tái hiện lỗi cụ thể, sửa từng nhóm lỗi và ghi nhật ký tại đây.
