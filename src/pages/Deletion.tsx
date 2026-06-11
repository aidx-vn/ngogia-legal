export default function Deletion({ lang }: { lang: 'vi' | 'en' }) {
  if (lang === 'en') return <DeletionEn />
  return <DeletionVi />
}

function DeletionVi() {
  return (
    <article className="prose max-w-none">
      <h1>Hướng dẫn Xóa Dữ liệu Cá nhân</h1>
      <p className="text-sm text-gray-500">Cập nhật: 11/06/2026</p>

      <p>
        Bạn có quyền xóa toàn bộ dữ liệu cá nhân khỏi Hệ thống Khảo sát Shelter &amp; Seed bất kỳ lúc nào,
        theo Điều 9 Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân và nguyên tắc "Quyền được quên" của GDPR.
      </p>

      <h2>Dữ liệu sẽ bị xóa</h2>
      <ul>
        <li>Tên, email, ảnh đại diện thu thập từ Google/Facebook</li>
        <li>Toàn bộ câu trả lời của bạn trong tất cả các khảo sát</li>
        <li>Thông tin phiên đăng nhập (cookie sẽ bị thu hồi)</li>
      </ul>
      <p>
        Dữ liệu phân tích tổng hợp đã được ẩn danh hóa (không thể xác định lại danh tính bạn)
        có thể được giữ lại phục vụ mục đích nghiên cứu.
      </p>

      <h2>Cách 1 — Xóa trực tiếp trong ứng dụng (khuyến nghị)</h2>
      <ol>
        <li>Đăng nhập vào <strong>Hệ thống Khảo sát</strong>.</li>
        <li>Nhấn vào <strong>tên hoặc ảnh đại diện</strong> của bạn ở góc trên bên phải.</li>
        <li>Chọn <strong>"Xóa tài khoản"</strong> trong menu thả xuống.</li>
        <li>Đọc xác nhận và nhấn <strong>"Xác nhận xóa"</strong>.</li>
        <li>Tài khoản và toàn bộ dữ liệu sẽ bị xóa <strong>ngay lập tức</strong>. Bạn sẽ được đăng xuất tự động.</li>
      </ol>

      <h2>Cách 2 — Gửi yêu cầu qua email</h2>
      <p>Nếu bạn không thể truy cập ứng dụng:</p>
      <ol>
        <li>Gửi email đến <a href="mailto:privacy@shelterseed.org">privacy@shelterseed.org</a></li>
        <li>Tiêu đề: <code>Yêu cầu xóa dữ liệu cá nhân</code></li>
        <li>Nội dung: địa chỉ email tài khoản và nhà cung cấp đăng nhập (Google hoặc Facebook)</li>
        <li>Chúng tôi sẽ xử lý trong vòng <strong>72 giờ làm việc</strong> và gửi xác nhận.</li>
      </ol>

      <h2>Sau khi xóa</h2>
      <ul>
        <li>Dữ liệu bị xóa ngay khỏi cơ sở dữ liệu chính.</li>
        <li>Bản sao lưu sẽ được xóa trong vòng <strong>30 ngày</strong>.</li>
        <li>Việc xóa là <strong>không thể hoàn tác</strong>. Nếu muốn sử dụng lại dịch vụ, bạn cần đăng nhập và tạo tài khoản mới.</li>
        <li>Dữ liệu của bên thứ ba (Google, Facebook) không thuộc phạm vi xử lý của chúng tôi — vui lòng liên hệ trực tiếp với nhà cung cấp để xóa dữ liệu tại nguồn.</li>
      </ul>

      <h2>Câu hỏi thường gặp</h2>
      <p><strong>Q: Tôi có thể chỉ xóa câu trả lời khảo sát mà giữ tài khoản không?</strong><br />
      Hiện tại dịch vụ hỗ trợ xóa toàn bộ tài khoản. Để xóa riêng một phản hồi, vui lòng liên hệ qua email.</p>

      <p><strong>Q: Xóa tài khoản có đăng xuất khỏi Google/Facebook không?</strong><br />
      Không. Chúng tôi chỉ xóa dữ liệu trong hệ thống của mình. Tài khoản Google/Facebook của bạn không bị ảnh hưởng.</p>

      <p><strong>Q: Tôi có thể khôi phục tài khoản sau khi xóa không?</strong><br />
      Không thể khôi phục. Bạn có thể đăng nhập lại sau này và tài khoản mới sẽ được tạo.</p>
    </article>
  )
}

function DeletionEn() {
  return (
    <article className="prose max-w-none">
      <h1>Personal Data Deletion Guide</h1>
      <p className="text-sm text-gray-500">Updated: 11 June 2026</p>

      <p>
        You have the right to delete all your personal data from the Shelter &amp; Seed Survey System at any time,
        pursuant to Article 9 of Decree 13/2023/NĐ-CP on Personal Data Protection and the GDPR "Right to be Forgotten" principle.
      </p>

      <h2>What Will Be Deleted</h2>
      <ul>
        <li>Name, email, and profile picture collected from Google/Facebook</li>
        <li>All your survey responses across all surveys</li>
        <li>Session information (your cookie will be revoked)</li>
      </ul>
      <p>
        Aggregated, anonymized analytics data (from which your identity cannot be re-identified)
        may be retained for research purposes.
      </p>

      <h2>Method 1 — Delete directly in the app (recommended)</h2>
      <ol>
        <li>Sign in to the <strong>Survey System</strong>.</li>
        <li>Click on your <strong>name or profile picture</strong> in the top-right corner.</li>
        <li>Select <strong>"Delete Account"</strong> from the dropdown menu.</li>
        <li>Read the confirmation and click <strong>"Confirm Deletion"</strong>.</li>
        <li>Your account and all data will be deleted <strong>immediately</strong>. You will be automatically signed out.</li>
      </ol>

      <h2>Method 2 — Submit a request by email</h2>
      <p>If you cannot access the application:</p>
      <ol>
        <li>Send an email to <a href="mailto:privacy@shelterseed.org">privacy@shelterseed.org</a></li>
        <li>Subject: <code>Personal Data Deletion Request</code></li>
        <li>Body: your account email address and login provider (Google or Facebook)</li>
        <li>We will process your request within <strong>72 business hours</strong> and send a confirmation.</li>
      </ol>

      <h2>After Deletion</h2>
      <ul>
        <li>Data is removed immediately from the primary database.</li>
        <li>Backups will be purged within <strong>30 days</strong>.</li>
        <li>Deletion is <strong>irreversible</strong>. If you wish to use the service again, you will need to sign in and create a new account.</li>
        <li>Third-party data (Google, Facebook) is outside our control — please contact those providers directly to remove data at the source.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <p><strong>Q: Can I delete only my survey responses while keeping my account?</strong><br />
      Currently the service supports full account deletion. To delete a specific response, please contact us by email.</p>

      <p><strong>Q: Will deleting my account sign me out of Google/Facebook?</strong><br />
      No. We only delete data in our system. Your Google/Facebook account is not affected.</p>

      <p><strong>Q: Can I recover my account after deletion?</strong><br />
      No. However, you may sign in again later and a new account will be created.</p>
    </article>
  )
}
