# DITUONLINE

Web game nhập vai 3D tiếng Việt **“ĐI TÙ ONLINE”** (Phiên bản đầu: Mốc 1 - Singleplayer với NPC máy điều khiển).

## 1. Giới thiệu
Người chơi là Minh (24 tuổi), bắt đầu bản án trong nhà tù hư cấu An Phú. Mục tiêu là thích nghi, hoàn thành nghĩa vụ, xây dựng quan hệ và tích lũy điều kiện để được xét giảm án và ra tù sớm.

## 2. Công nghệ
- **TypeScript + Three.js + Vite**
- Hệ thống FSM, lịch trình NPC & cây hội thoại phân nhánh
- Lưu trữ tiến trình bằng `localStorage` (có migration & version)
- Điều khiển:
  - Máy tính: WASD di chuyển, kéo chuột xoay camera, Shift chạy nhanh, E tương tác, J/P/R/B/M mở bảng giao diện
  - Thiết bị di động: Joystick cảm ứng ảo, vuốt xoay camera, nút tương tác ngữ cảnh

## 3. Cài đặt & Chạy
```bash
npm install
npm run dev # Chạy máy chủ phát triển
npm run build # Đóng gói phân phối
npm test # Chạy kiểm thử tự động (Unit + E2E)
```

## 4. Giấy phép & Tác giả
Chi tiết xem tại [CREDITS.md](CREDITS.md).
