# CREDITS — ĐI TÙ ONLINE

- **Mã nguồn, thiết kế hệ thống & kịch bản**: Tự xây dựng cho dự án *ĐI TÙ ONLINE*.
- **Thư viện**:
  - [Three.js](https://threejs.org/) (MIT License) — dựng cảnh 3D WebGL.
  - [Vite](https://vitejs.dev/) (MIT License) — công cụ đóng gói.
- **Mô hình 3D, kết cấu & âm thanh**:
  - Nhân vật (`src/actors/humanoid.ts`), kiến trúc và đồ vật nhà tù (`src/world/builder.ts`), biểu tượng giao diện được dựng thủ tục (procedural geometry & canvas texture) trực tiếp bằng mã nguồn — không sử dụng asset bên ngoài.
  - Âm thanh chuông, bước chân, phản hồi tương tác (`src/core/audio.ts`) được tổng hợp thời gian thực bằng Web Audio API.
