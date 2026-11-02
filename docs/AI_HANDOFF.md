# Nhật ký bàn giao AI — ĐI TÙ ONLINE

## Quy trình
- Đọc file này và `AGENTS.md` trước khi sửa.
- Mỗi đợt sửa thêm một mục mới lên đầu phần **Lịch sử thay đổi**, giữ nguyên các mục cũ.
- Ghi rõ các file sửa, hành vi trước/sau, test thực sự chạy, lỗi chưa xử lý, commit liên quan và chỉ dẫn cho lượt tiếp theo.
- Trước khi push, so sánh với `origin/main` mới nhất; tuyệt đối không ghi đè code mới bằng bản cũ.

## Lịch sử thay đổi

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
