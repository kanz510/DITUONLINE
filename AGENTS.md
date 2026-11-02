# Quy tắc phối hợp AI — DITUONLINE

Áp dụng cho ChatGPT, Antigravity và mọi coding agent làm việc trên repository.

1. Trước mỗi lần sửa, đọc `README.md`, `AGENTS.md`, `docs/AI_HANDOFF.md` và kiểm tra `git status`, `git log -5 --oneline`.
2. Đồng bộ `main` mới nhất trước khi sửa. Nếu có thay đổi chưa commit, không reset hay ghi đè; kiểm tra và xử lý xung đột trước.
3. Đọc diff của các commit mới và đối chiếu các file dự định sửa. Không thay cả file bằng phiên bản cũ hoặc code tự sinh nếu làm mất thay đổi của agent khác.
4. Giữ nguyên gameplay, dữ liệu lưu và tính năng ổn định trừ khi nhiệm vụ yêu cầu thay đổi. Không force-push.
5. Mỗi nhóm sửa phải có commit riêng, nêu rõ mục đích và file ảnh hưởng. Chạy test/build khi môi trường cho phép; không nhận đã test nếu chưa chạy.
6. Trong cùng đợt sửa, cập nhật `docs/AI_HANDOFF.md`: ngày, tác nhân, mục tiêu, file sửa, kết quả, test đã chạy, lỗi còn lại, commit SHA nếu biết, lưu ý cho agent kế tiếp.
7. Nếu tài liệu bàn giao mâu thuẫn với mã nguồn thực tế, kiểm tra Git diff và hỏi trước khi ghi đè. Khi chưa chắc chắn, dừng sửa thay vì xóa công sức trước.

Lưu ý: tài liệu này hướng dẫn agent, không tự động ngăn mọi thao tác ghi đè. Git history và review diff vẫn là hàng rào cuối cùng.
