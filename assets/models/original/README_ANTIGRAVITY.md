# ĐI TÙ ONLINE — Bộ bàn ghế 3D cho Antigravity

**Gói:** `DITUONLINE_Furniture_Pack_v1` · **11 file GLB 2.0** · **Không thay đổi repository**

Bộ asset nguyên bản cho web game **Three.js 0.170 + Vite + TypeScript**, được thiết kế theo tông xanh thép, gỗ sẫm, xanh rêu, bê tông kiểu trại giam. Đây là **model 3D thật, không phải ảnh minh họa**. Asset được tạo bằng script Python `generate_assets.py` (đi kèm); ảnh `PREVIEW.png` và `previews/*.png` được render từ tam giác của chính GLB bằng software renderer, không phải ảnh AI.

## Danh mục

| GLB | Mục đích | Rộng × cao × sâu (m), gần đúng |
|---|---|---|
| `canteen_table.glb` | Bàn dài nhà ăn bằng gỗ và thép | 2.50 × 0.83 × 0.88 |
| `canteen_bench.glb` | Ghế băng dài nhà ăn, mỗi bàn dùng 2 chiếc | 2.20 × 0.51 × 0.37 |
| `guard_office_desk.glb` | Bàn quản giáo có tủ kéo, đèn bàn, ngăn cáp | 1.62 × 1.26 × 0.76 (cao tính cả đèn, mặt bàn 0.76) |
| `guard_office_chair.glb` | Ghế xoay có bánh xe, đệm tựa | 0.64 × 1.22 × 0.70 |
| `classroom_desk.glb` | Bàn học nghề, kệ dưới mặt bàn | 0.81 × 0.80 × 0.57 |
| `classroom_chair.glb` | Ghế gỗ-thép cho lớp học | 0.48 × 0.99 × 0.47 |
| `visitation_table.glb` | Bàn thăm gặp, bề mặt chống xước | 1.56 × 0.83 × 0.69 |
| `visitation_chair.glb` | Ghế cho khách và tù nhân thăm gặp | 0.50 × 0.98 × 0.49 |
| `yard_concrete_table.glb` | Bàn đá sân sinh hoạt, có mặt bàn cờ | 1.32 × 0.81 × 1.32 |
| `yard_concrete_stool.glb` | Đôn bê tông sân trại | 0.48 × 0.47 × 0.48 |
| `workshop_bench.glb` | Bàn xưởng gắn ê-tô, bảng dụng cụ | 1.85 × 1.43 × 0.79 (cao tính cả bảng, mặt bàn 0.88) |

Trong `MANIFEST.json` có kích thước thực đọc từ GLB, SHA256, số tam giác, số mesh và hướng dẫn sử dụng.

## Quy ước bắt buộc

- **Y-up, 1 đơn vị = 1 mét**, vật thể nằm trên mặt đất (min Y gần bằng 0), hướng mặt trước **-Z**.
- **GLB nhúng vật liệu PBR**, không dùng Draco, KTX2, external textures/URI, nên tương thích `GLTFLoader` gốc, không cần decoder.
- Vật thể do bộ này tạo hoàn toàn mới, **không dùng mesh/texture từ pack thương mại**; có thể dùng trong game mà không cần mua license.
- Nhiều model có chân ghế, tay vịn và chi tiết nhỏ, **không dùng mesh tam giác để tính collider**. Dùng collider hình hộp đơn giản theo kích thước footprint.
- **Không gắn mặc định vào main**: để Antigravity kiểm tra `src/world/layout.ts`, `src/world/builder.ts`, `src/world/nav.ts` và định vị thực tế.

## Cách đưa vào dự án

1. Giải nén `models/original/*.glb` vào `public/models/original/` của repo `kanz510/DITUONLINE`.
2. Trong `src/world/builder.ts` dùng loader/caching hiện có, hoặc tham khảo `THREEJS_INTEGRATION_EXAMPLE.ts`. URL cần có `import.meta.env.BASE_URL` vì game chạy ở thư mục `/DITUONLINE/` trên GitHub Pages.
3. **Ưu tiên thay visual hiện hữu** của `PROPS` tương ứng: `table`, `bench`, `desk`, `chair`, `stonetable`, `workbench`. Khi thay, **giữ nguyên `PropDef`, collider, quest hitbox, nhãn, logic và save**. Scale đồng đều và căn đáy Y=0.
4. Ghế đặt thêm **không tự động an toàn về navigation**: nếu chưa có PROPS, bổ sung collider và kiểm tra NPC path trước khi đặt. Với bàn nhà ăn, hai ghế băng nên xếp song song theo chiều dài bàn, tâm lệch nhau khoảng 0.70–0.82 m.
5. Không đặt bàn/ghế lên cửa ra vào, chỗ tương tác nhiệm vụ, lối tuần tra hoặc cản camera.
6. Đừng thay chibi của cán bộ và đừng sửa mini-game nối dây (`COLORS`, `targetSeq=[1,3,2,4]`).
7. Chạy `python validate_assets.py`, `npm test`, `npm run build`; dùng Playwright 956 × 440 để chụp ít nhất 4 góc nhà ăn, lớp học, phòng quản giáo, sân trại. Test load asset và walk path trước khi push.
8. Cập nhật `docs/AI_HANDOFF.md` và commit phần Antigravity đã tích hợp lên `main`, không force-push.

### Ví dụ sử dụng bàn ghế nhà ăn

- `canteen_table.glb`: mặt bàn cao ~0.78 m. Đặt trên footprint `PROPS.kind='table'` tại nhà ăn. Vì bàn cũ có thể rộng hơn, kiểm tra tỉ lệ trước khi scale.
- `canteen_bench.glb`: 2 chiếc mỗi bàn, tâm ±0.73 m theo trục Z **cục bộ của bàn** (sau khi xoay phải đổi vị trí tương ứng). Mặt ghế cao ~0.46 m.
- Bản bàn nhà ăn + 2 ghế băng cũng có một **phiên bản dựng qua plugin Blendstra** để xem và chỉnh sửa riêng; không nằm trong ZIP này. Xem liên kết ở phần cuối.

### Blendstra — bản cao cấp có nguồn Blender

Một model dựng bằng plugin Blendstra với bàn dài nhà ăn + 2 băng ghế, được lưu như dự án riêng để chỉnh sửa:

https://blendstra.com/studio?workspace=wsp_e0383d5c450f913bad17636f934821bc032ab0c1&project=e2f3f4f5-07a9-475d-b695-3952c16d244b&version=version_b79c6dfbe95999ef82a75923f22eb34746730c356bd6c01ab32afbd5f89f4003

**Lưu ý:** chỉ các GLB trong ZIP là file cầm tay tích hợp ngay. Model trên Blendstra phải export GLB riêng khi muốn dùng.

## Bảo đảm phạm vi

ChatGPT **chỉ tạo asset và gói tài liệu**, không sửa `main` và không giả vờ đã chạy game trên Safari/iPhone thật. Antigravity chịu trách nhiệm đưa vào scene, thay collider hợp lệ và kiểm thử runtime.
