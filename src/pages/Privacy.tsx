export default function Privacy({ lang }: { lang: 'vi' | 'en' }) {
  if (lang === 'en') return <PrivacyEn />
  return <PrivacyVi />
}

function PrivacyVi() {
  return (
    <article className="prose max-w-none">
      <h1>Chính sách Bảo mật</h1>
      <p className="text-sm text-gray-500">Ngày hiệu lực: 11/06/2026 · Áp dụng cho: Hệ thống Khảo sát Shelter &amp; Seed</p>

      <p>
        Shelter &amp; Seed Initiative ("chúng tôi", "tổ chức") cam kết bảo vệ quyền riêng tư của bạn. Chính sách này
        mô tả cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ dữ liệu cá nhân của bạn khi sử dụng Hệ thống
        Khảo sát, phù hợp với <strong>Nghị định 13/2023/NĐ-CP</strong> về bảo vệ dữ liệu cá nhân và
        các nguyên tắc GDPR áp dụng quốc tế.
      </p>

      <h2>1. Thông tin chúng tôi thu thập</h2>
      <ul>
        <li><strong>Thông tin tài khoản OAuth:</strong> Khi đăng nhập qua Google hoặc Facebook, chúng tôi nhận được tên đầy đủ, địa chỉ email và ảnh đại diện công khai từ nhà cung cấp.</li>
        <li><strong>Phản hồi khảo sát:</strong> Câu trả lời bạn cung cấp khi tham gia khảo sát do tổ chức phát hành.</li>
        <li><strong>Dữ liệu kỹ thuật tối thiểu:</strong> Địa chỉ IP và loại thiết bị chỉ xuất hiện trong nhật ký hệ thống ngắn hạn (tối đa 30 ngày) để đảm bảo an toàn dịch vụ, không được liên kết với hồ sơ người dùng.</li>
      </ul>
      <p>Chúng tôi <strong>không</strong> thu thập số điện thoại, dữ liệu vị trí chính xác, thông tin thanh toán hay dữ liệu sinh trắc học.</p>

      <h2>2. Mục đích xử lý dữ liệu</h2>
      <ul>
        <li>Xác thực danh tính và duy trì phiên đăng nhập an toàn</li>
        <li>Lưu trữ và trả về kết quả khảo sát của bạn</li>
        <li>Phân tích tổng hợp (ẩn danh) để cải thiện chương trình hỗ trợ của tổ chức</li>
        <li>Tuân thủ nghĩa vụ pháp lý theo quy định của pháp luật Việt Nam</li>
      </ul>
      <p>Cơ sở pháp lý: <em>sự đồng ý của bạn</em> (Điều 11, Nghị định 13/2023) khi đăng nhập và tham gia khảo sát.</p>

      <h2>3. Chia sẻ và chuyển giao dữ liệu</h2>
      <p>Chúng tôi <strong>không bán, không cho thuê</strong> dữ liệu cá nhân của bạn. Dữ liệu chỉ được chia sẻ với:</p>
      <ul>
        <li><strong>Google LLC</strong> và <strong>Meta Platforms Inc.</strong>: trong phạm vi xác thực đăng nhập OAuth, theo chính sách bảo mật của từng nhà cung cấp.</li>
        <li><strong>Cơ quan nhà nước có thẩm quyền:</strong> khi có yêu cầu hợp pháp bằng văn bản theo pháp luật Việt Nam.</li>
        <li><strong>Đơn vị vận hành hạ tầng:</strong> nhà cung cấp máy chủ lưu trữ dữ liệu (ký cam kết bảo mật).</li>
      </ul>

      <h2>4. Thời gian lưu trữ</h2>
      <p>Dữ liệu được lưu trữ cho đến khi bạn xóa tài khoản hoặc gửi yêu cầu xóa dữ liệu. Sau khi xóa, dữ liệu sẽ được xóa khỏi hệ thống trong vòng <strong>30 ngày</strong> (bao gồm bản sao lưu).</p>

      <h2>5. Quyền của bạn (theo Điều 9, Nghị định 13/2023/NĐ-CP)</h2>
      <ul>
        <li><strong>Quyền truy cập:</strong> Yêu cầu cung cấp bản sao dữ liệu cá nhân chúng tôi đang lưu trữ về bạn.</li>
        <li><strong>Quyền chỉnh sửa:</strong> Yêu cầu sửa thông tin không chính xác.</li>
        <li><strong>Quyền xóa ("Quyền được quên"):</strong> Xóa toàn bộ tài khoản và dữ liệu liên quan — thực hiện trực tiếp trong ứng dụng (xem Hướng dẫn Xóa Dữ liệu).</li>
        <li><strong>Quyền phản đối:</strong> Phản đối việc xử lý dữ liệu cho mục đích phân tích.</li>
        <li><strong>Quyền rút lại đồng ý:</strong> Rút lại bất kỳ lúc nào bằng cách xóa tài khoản.</li>
        <li><strong>Quyền khiếu nại:</strong> Gửi khiếu nại lên Bộ Công an (Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao).</li>
      </ul>

      <h2>6. Bảo mật thông tin</h2>
      <p>
        Mọi kết nối được mã hóa qua <strong>HTTPS/TLS</strong>. Phiên đăng nhập dùng cookie <code>HttpOnly; SameSite=Lax</code>
        ký bằng JWT, hết hạn sau 7 ngày. Mật khẩu không được lưu trữ (xác thực hoàn toàn qua OAuth).
        Quyền truy cập cơ sở dữ liệu giới hạn theo nguyên tắc đặc quyền tối thiểu.
      </p>

      <h2>7. Trẻ em</h2>
      <p>Dịch vụ không dành cho người dưới 13 tuổi. Nếu phát hiện dữ liệu của trẻ em được thu thập ngoài ý muốn, chúng tôi sẽ xóa ngay lập tức.</p>

      <h2>8. Thay đổi chính sách</h2>
      <p>Khi có thay đổi quan trọng, chúng tôi sẽ thông báo qua email (nếu có) hoặc hiển thị thông báo nổi bật trong ứng dụng trước ít nhất 15 ngày.</p>

      <h2>9. Liên hệ</h2>
      <p>
        <strong>Shelter &amp; Seed Initiative</strong><br />
        Email bảo mật: <a href="mailto:privacy@shelterseed.org">privacy@shelterseed.org</a><br />
        Thời gian phản hồi: tối đa 72 giờ trong ngày làm việc.
      </p>
    </article>
  )
}

function PrivacyEn() {
  return (
    <article className="prose max-w-none">
      <h1>Privacy Policy</h1>
      <p className="text-sm text-gray-500">Effective date: 11 June 2026 · Applies to: Shelter &amp; Seed Survey System</p>

      <p>
        Shelter &amp; Seed Initiative ("we", "us", "organization") is committed to protecting your privacy.
        This policy describes how we collect, use, store, and protect your personal data when you use our
        Survey System, in compliance with <strong>Decree 13/2023/NĐ-CP</strong> on Personal Data Protection
        (Vietnam) and applicable international standards including GDPR principles.
      </p>

      <h2>1. Data We Collect</h2>
      <ul>
        <li><strong>OAuth Account Information:</strong> When you sign in via Google or Facebook, we receive your full name, email address, and public profile picture from the provider.</li>
        <li><strong>Survey Responses:</strong> Answers you provide when participating in surveys published by the organization.</li>
        <li><strong>Minimal Technical Data:</strong> IP address and device type appear only in short-term system logs (max 30 days) for security purposes, not linked to your profile.</li>
      </ul>
      <p>We do <strong>not</strong> collect phone numbers, precise location data, payment information, or biometric data.</p>

      <h2>2. Purposes of Processing</h2>
      <ul>
        <li>Identity authentication and secure session management</li>
        <li>Storing and retrieving your survey responses</li>
        <li>Aggregated (anonymized) analysis to improve the organization's support programs</li>
        <li>Compliance with legal obligations under Vietnamese law</li>
      </ul>
      <p>Legal basis: <em>your consent</em> (Article 11, Decree 13/2023) provided when you log in and participate in surveys.</p>

      <h2>3. Data Sharing and Transfer</h2>
      <p>We <strong>do not sell or rent</strong> your personal data. Data is only shared with:</p>
      <ul>
        <li><strong>Google LLC</strong> and <strong>Meta Platforms Inc.</strong>: limited to OAuth authentication, subject to their respective privacy policies.</li>
        <li><strong>Competent state authorities:</strong> when required by lawful written request under Vietnamese law.</li>
        <li><strong>Infrastructure operators:</strong> hosting providers who have signed data processing agreements.</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>Data is retained until you delete your account or submit a deletion request. After deletion, data will be removed from all systems including backups within <strong>30 days</strong>.</p>

      <h2>5. Your Rights (under Article 9, Decree 13/2023/NĐ-CP)</h2>
      <ul>
        <li><strong>Right to Access:</strong> Request a copy of personal data we hold about you.</li>
        <li><strong>Right to Rectification:</strong> Request correction of inaccurate information.</li>
        <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Delete your entire account and all related data — available directly in the app (see Data Deletion Guide).</li>
        <li><strong>Right to Object:</strong> Object to processing of your data for analytics purposes.</li>
        <li><strong>Right to Withdraw Consent:</strong> Withdraw at any time by deleting your account.</li>
        <li><strong>Right to Lodge a Complaint:</strong> File a complaint with the Ministry of Public Security (Department of Cybersecurity and High-Tech Crime Prevention).</li>
      </ul>

      <h2>6. Security</h2>
      <p>
        All connections are encrypted via <strong>HTTPS/TLS</strong>. Sessions use <code>HttpOnly; SameSite=Lax</code>
        JWT-signed cookies with 7-day expiry. No passwords are stored (authentication is entirely OAuth-based).
        Database access is restricted by the principle of least privilege.
      </p>

      <h2>7. Children</h2>
      <p>The service is not directed to children under 13. If we discover data collected from a child inadvertently, we will delete it immediately.</p>

      <h2>8. Policy Changes</h2>
      <p>For material changes, we will notify users via email (if available) or a prominent in-app banner at least 15 days in advance.</p>

      <h2>9. Contact</h2>
      <p>
        <strong>Shelter &amp; Seed Initiative</strong><br />
        Privacy email: <a href="mailto:privacy@shelterseed.org">privacy@shelterseed.org</a><br />
        Response time: within 72 business hours.
      </p>
    </article>
  )
}
