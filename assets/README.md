# Asset staging cho ĐI TÙ ONLINE (DITUONLINE)

Thư mục này chứa asset đồ họa **chưa nối vào game** — chỉ để dành cho bước
gắn asset sau này (ví dụ: dặn AI khác "lấy asset trong thư mục `assets/`").
Game hiện tại vẫn chạy hoàn toàn bằng geometry và canvas texture procedural
trong `src/`; thêm thư mục này vào repo **không làm game thay đổi gì**
(Vite chỉ bundle `src/` + `public/`, CI build/test không đụng tới đây).

Tổng cộng: 78 file model (3,50 MB) + 16 texture (0,55 MB) + file này = 4,05 MB.

Quy ước kỹ thuật (bắt buộc khi gắn asset):
- Engine: Three.js 0.170 + Vite + TypeScript. Load GLB bằng `GLTFLoader`
  từ `three/addons`.
- Chỉ nhận GLB 2.0 trơn + texture PNG/JPG đi kèm. KHÔNG dùng Draco,
  KHÔNG dùng KTX2/Basis (repo chưa có file decoder). Toàn bộ GLB dưới
  đây đã kiểm tra: không có extension Draco/KTX2/Basis.
- Tỉ lệ: 1 đơn vị = 1 mét. Nhân vật ~1,7 m, tường 3,6 m, tường rào 6 m.
  (Model Kenney có tỉ lệ riêng — khi gắn phải kiểm tra chiều cao thực
  tế trong scene và scale lại về đúng tỉ lệ game.)
- **Giữ nguyên đường dẫn tương đối giữa GLB và texture của nó.**
  Nhân vật cần `characters/Textures/texture-X.png` nằm cạnh file GLB
  theo đúng cấu trúc này; xe và đồ đường cần `Textures/colormap-*.png`
  tương ứng. Đổi tên file texture mà không sửa URI trong GLB sẽ làm
  model mất texture.
- Đồ mới phải đăng ký va chạm trong `src/world/layout.ts` (PROPS) và đồ
  thị đường đi NPC, nếu không người chơi sẽ đi xuyên qua. Đồ cao gần
  đường camera nên thêm vào `cameraObstacles` như tường đang làm.
- Khi gắn vào game: copy file cần dùng sang `public/` (giữ nguyên cấu
  trúc thư mục con + texture đi kèm) hoặc import sao cho Vite bundle
  được; đừng để game load trực tiếp từ `assets/` vì Vite không bundle
  thư mục này.
- Giấy phép: toàn bộ asset ngoài dưới đây là CC0 (public domain, Kenney
  và Poly Haven), dùng tự do không cần ghi nguồn. Asset tự tạo ghi rõ
  "tự tạo".

## Nhân vật (`models/characters/`) — Kenney Blocky Characters 2.0, CC0

18 nhân vật `character-a.glb` … `character-r.glb` (mỗi file ~111 KB),
mỗi file đi kèm đúng 1 texture `Textures/texture-a.png` …
`Textures/texture-r.png` (13–22 KB). 18 skin khác nhau về màu áo/quần/
tóc — đủ cho 11 NPC + người chơi + NPC mới sau này.

Điểm quan trọng đã kiểm tra trong file:
- Mỗi GLB có sẵn **27 clip animation**, chơi trực tiếp bằng
  `AnimationMixer`, **không cần skeleton retarget** (animation dạng
  node, không có skinned mesh): `idle`, `walk`, `sprint`, `sit`,
  `drive`, `die`, `pick-up`, `emote-yes`, `emote-no`,
  `holding-right`, `holding-left`, `holding-both`,
  `holding-right-shoot`, `holding-left-shoot`, `holding-both-shoot`,
  `attack-melee-right`, `attack-melee-left`, `attack-kick-right`,
  `attack-kick-left`, `interact-right`, `interact-left`,
  `wheelchair-sit`, `wheelchair-move-forward/back/left/right`.
  Các clip này phủ được hành vi game đang code bằng tay: đi, ngồi,
  làm việc (dùng clip `holding-*` / `interact-*`), nói chuyện
  (`emote-yes` / `emote-no`).
- Material dạng unlit (`KHR_materials_unlit`): nhân vật không nhận
  sáng/tối của scene, nhìn phẳng kiểu low-poly — hợp với phong cách
  hiện tại, nhưng lưu ý khi đặt cạnh đồ vật có shading.
- Gợi ý chọn skin (nhìn từ texture, nên xem thử trong scene trước
  khi chốt): `character-g` áo xám có sọc (gần với đồng phục sọc của
  phạm nhân), `character-j` tông xanh đậm (kiểu quản giáo/cán bộ),
  `character-i` / `character-n` tông sáng/trắng (kiểu y sĩ),
  `character-q` tông tối kiểu vest (khách thăm / cán bộ cấp cao).

## Cây cối, sân vườn (`models/nature/`) — Kenney Nature Kit, CC0

Toàn bộ tự chứa (unlit, không cần texture ngoài).

| File | Kích thước | Gợi ý dùng trong game |
|---|---|---|
| `tree_detailed.glb` | 31 KB | Cây lớn sân sinh hoạt |
| `tree_oak.glb` | 15 KB | Cây sân, đổi kiểu cho đỡ trùng |
| `tree_pineTallA.glb` | 7 KB | Cây cao góc sân |
| `plant_bushDetailed.glb` | 10 KB | Bụi rậm, hàng rào cây |
| `plant_bush.glb` | 4 KB | Bụi nhỏ quanh sân |
| `flower_redA.glb`, `flower_yellowA.glb`, `flower_purpleA.glb` | 7 KB mỗi file | Bồn hoa sân sinh hoạt |
| `rock_largeA.glb` | 7 KB | Đá trang trí góc sân |
| `rock_smallA.glb` | 3 KB | Đá nhỏ rải sân |
| `fence_simple.glb` | 6 KB | Hàng rào nội bộ sân (từng đoạn) |
| `fence_gate.glb` | 27 KB | Cổng phụ kiểu sân vườn — KHÔNG phải cổng trại giam, chỉ dùng tạm |
| `grass_large.glb` | 18 KB | Bụi cỏ cao |
| `ground_pathStraight.glb` | 5 KB | Lối đi lát trong sân |

## Đồ nội thất (`models/furniture/`) — Kenney Furniture Kit, CC0

Toàn bộ tự chứa (unlit, không cần texture ngoài).

| File | Kích thước | Gợi ý dùng trong game |
|---|---|---|
| `bedBunk.glb` | 40 KB | Giường tầng buồng giam (thay khối box hiện tại) |
| `bedSingle.glb` | 18 KB | Giường đơn phòng kỷ luật / y tế |
| `desk.glb` | 15 KB | Bàn lớp học, bàn phòng quản giáo |
| `chair.glb` | 11 KB | Ghế lớp học, ghế phòng làm việc |
| `bookcaseOpen.glb` | 18 KB | Kệ sách thư viện |
| `books.glb` | 7 KB | Sách đặt lên kệ (hiện kệ thư viện chưa có sách) |
| `cabinetBed.glb` | 7 KB | Tủ đầu giường buồng giam |
| `table.glb` | 8 KB | Bàn nhà ăn |
| `kitchenStoveElectric.glb` | 18 KB | Bếp nhà ăn |
| `kitchenSink.glb` | 23 KB | Chậu rửa khu bếp |
| `kitchenFridge.glb` | 20 KB | Tủ lạnh kho / nhà ăn |
| `lampRoundFloor.glb` | 6 KB | Đèn cây trong phòng |
| `lampSquareFloor.glb` | 5 KB | Đèn cây trong phòng (kiểu vuông) |
| `loungeSofa.glb` | 9 KB | Ghế sofa phòng thăm gặp |
| `sideTable.glb` | 9 KB | Bàn nhỏ phòng thăm gặp |
| `pottedPlant.glb` | 7 KB | Chậu cây phòng quản giáo / thăm gặp |

## Đồ đường, sân (`models/roads/`) — Kenney City Kit Roads, CC0

Các GLB dùng chung texture `Textures/colormap-roads.png` (11 KB,
đã đổi tên từ `colormap.png` gốc của pack để khỏi trùng với pack xe).

| File | Kích thước | Gợi ý dùng trong game |
|---|---|---|
| `light-square.glb` | 7 KB | Cột đèn sân (hiện sân chưa có đèn) |
| `light-curved.glb` | 9 KB | Cột đèn cong, đường trước cổng |
| `road-straight.glb` | 5 KB | Đoạn đường trước cổng trại |
| `construction-fence.glb` | 15 KB | Hàng rào tạm khu vực thi công / kỷ luật |
| `construction-barrier.glb` | 7 KB | Barie tạm |
| `dumpster.glb` | 24 KB | Thùng rác lớn sân sau |

## Xe (`models/vehicles/`) — Kenney Car Kit, CC0

Các GLB dùng chung texture `Textures/colormap-vehicles.png` (12 KB,
đã đổi tên từ `colormap.png` gốc của pack để khỏi trùng với pack đường;
URI trong GLB đã sửa theo tên mới và kiểm tra lại).

| File | Kích thước | Gợi ý dùng trong game |
|---|---|---|
| `van.glb` | 172 KB | Xe chở phạm — tạm thay xe buýt (chưa có model bus) |
| `police.glb` | 191 KB | Xe tuần tra |
| `ambulance.glb` | 228 KB | Xe y tế trước phòng y tế |
| `delivery.glb` | 235 KB | Xe chở hàng tiếp tế qua cổng |

## Textures (`textures/`)

| File | Kích thước | Nguồn / Giấy phép | Gợi ý dùng trong game |
|---|---|---|---|
| `grass_leafy_1k.jpg` | 389 KB, 1024×1024 | Poly Haven (CC0), texture "Leafy Grass", bản 2k gốc nén xuống 1k | Cỏ sân sinh hoạt, bồn cỏ, mảng xanh quanh trại |
| `concrete.jpg` | 22 KB, 512×512, tileable | Tự tạo (procedural) | Sàn xưởng, sàn khu kỷ luật, nền bê tông |
| `asphalt.jpg` | 14 KB, 512×512, tileable | Tự tạo (procedural) | Sân, đường nội bộ, lối đi |
| `plaster_beige.jpg` | 7 KB, 512×512, tileable | Tự tạo (procedural) | Tường trên (phần vàng kem) các tòa nhà |
| `plaster_moss.jpg` | 8 KB, 512×512, tileable | Tự tạo (procedural) | Chân tường xanh rêu các tòa nhà |
| `floor_tiles.jpg` | 13 KB, 512×512, tileable | Tự tạo (procedural) | Sàn khu buồng giam, nhà ăn, phòng y tế |
| `wood_planks.jpg` | 22 KB, 512×512, tileable | Tự tạo (procedural) | Sàn phòng quản giáo, lớp học, cửa gỗ |
| `brick.jpg` | 32 KB, 512×512, tileable | Tự tạo (procedural) | Tường rào, tường khu kỷ luật, chi tiết gạch |
| `dirt_ground.jpg` | 14 KB, 512×512, tileable | Tự tạo (procedural) | Đất trống, góc khuất sau xưởng |
| `metal_dark.jpg` | 29 KB, 512×512, tileable | Tự tạo (procedural) | Cửa sắt, tủ thép, kệ kho |
| `sky_day.png` | 2 KB, 512×512 | Tự tạo (gradient) | Bầu trời ban ngày (map lên sky dome, mặt BackSide) |
| `sky_sunset.png` | 2 KB, 512×512 | Tự tạo (gradient) | Bầu trời hoàng hôn |
| `sky_night.png` | 6 KB, 512×512 | Tự tạo (gradient + sao) | Bầu trời đêm |
| `moon.png` | 2 KB, 256×256, nền trong suốt | Tự tạo | Mặt trăng (sprite/plane ban đêm) |
| `glow.png` | 12 KB, 256×256, nền trong suốt | Tự tạo (radial gradient) | Halo đèn đường, đèn sân, đèn pha, spotlight |
| `chainlink.png` | 3 KB, 256×256, nền trong suốt, tileable | Tự tạo (lưới mắt cáo) | Lưới kẽm gai / hàng rào mắt cáo (map lên plane trong suốt) |

Ghi chú: API Poly Haven (api.polyhaven.org) bị lỗi 522 phía máy chủ trong
lúc thu thập, nên các texture scan thật khác (sàn bê tông Poly Haven,
nhựa đường, tường) chưa lấy được — phần texture tự tạo ở trên đã phủ
kín các nhu cầu đó. Khi Poly Haven hồi phục có thể bổ sung thêm từ
`polyhaven.com` (CC0) nếu muốn.

## Còn thiếu (chưa tìm được asset phù hợp, cần xử lý riêng)

- Xe buýt chở phạm: chưa có trong các pack CC0 đã kiểm tra — hiện
  chỉ có `van.glb` làm tạm. Cần tự làm bằng Blender hoặc tìm thêm.
- Tháp canh chi tiết + cổng trại giam đúng kiểu: chưa có model sẵn
  (`fence_gate.glb` chỉ là cổng vườn, `construction-fence.glb` là
  rào công trường). Cần tự làm bằng Blender.
- Hàng rào kẽm gai dạng 3D (cuộn dây thép gai): chưa có model sẵn;
  tạm dùng `chainlink.png` làm lưới mắt cáo.
- Sky dome mesh, mặt trời/mặt trăng 3D, mây: chưa có model — hiện
  chỉ có texture gradient bầu trời + mặt trăng 2D để map lên dome
  tự tạo.
- Đồ y tế chi tiết (máy móc, chai thuốc, giường bệnh chuyên dụng),
  dụng cụ xưởng chi tiết, vách kính phòng thăm gặp: chưa có trong
  các pack này — có thể ghép từ đồ nội thất + box procedural, hoặc
  làm riêng bằng Blender.
