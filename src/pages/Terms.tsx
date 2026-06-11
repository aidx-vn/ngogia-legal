export default function Terms({ lang }: { lang: 'vi' | 'en' }) {
  if (lang === 'en') return <TermsEn />
  return <TermsVi />
}

function TermsVi() {
  return (
    <article className="prose max-w-none">
      <h1>Điều khoản Dịch vụ</h1>
      <p className="text-sm text-gray-500">Ngày hiệu lực: 11/06/2026 · Áp dụng cho: Hệ thống Khảo sát Shelter &amp; Seed</p>

      <p>
        Bằng cách truy cập và sử dụng Hệ thống Khảo sát của Shelter &amp; Seed Initiative ("dịch vụ"), bạn đồng ý bị
        ràng buộc bởi các Điều khoản Dịch vụ này. Nếu không đồng ý, vui lòng không sử dụng dịch vụ.
      </p>

      <h2>1. Mô tả Dịch vụ</h2>
      <p>
        Dịch vụ cho phép người dùng đăng nhập bằng tài khoản Google hoặc Facebook, tham gia các khảo sát do
        Shelter &amp; Seed Initiative phát hành nhằm thu thập dữ liệu phục vụ các chương trình hỗ trợ nhà ở,
        sinh kế và phúc lợi xã hội.
      </p>

      <h2>2. Điều kiện sử dụng</h2>
      <ul>
        <li>Bạn phải từ <strong>13 tuổi trở lên</strong>.</li>
        <li>Bạn phải có tài khoản Google hoặc Facebook hợp lệ.</li>
        <li>Bạn chịu trách nhiệm đảm bảo thiết bị và tài khoản đăng nhập an toàn.</li>
        <li>Một người dùng chỉ được tham gia mỗi khảo sát một lần.</li>
      </ul>

      <h2>3. Sử dụng được chấp nhận</h2>
      <p>Bạn đồng ý:</p>
      <ul>
        <li>Cung cấp thông tin trung thực và chính xác trong các khảo sát.</li>
        <li>Sử dụng dịch vụ cho mục đích cá nhân, hợp pháp.</li>
        <li>Không cố gắng truy cập dữ liệu của người dùng khác.</li>
      </ul>

      <h2>4. Hành vi bị cấm</h2>
      <p>Nghiêm cấm:</p>
      <ul>
        <li>Cố tình cung cấp thông tin sai lệch, gây nhiễu dữ liệu nghiên cứu.</li>
        <li>Tạo nhiều tài khoản để trả lời nhiều lần một khảo sát.</li>
        <li>Tấn công, quét lỗ hổng, khai thác hoặc gây gián đoạn dịch vụ dưới mọi hình thức.</li>
        <li>Sử dụng dịch vụ cho mục đích thương mại hoặc phi pháp.</li>
        <li>Chia sẻ hoặc đăng tải nội dung vi phạm pháp luật, kỳ thị, hoặc xâm phạm quyền của người khác.</li>
      </ul>

      <h2>5. Sở hữu trí tuệ</h2>
      <p>
        Toàn bộ nội dung, giao diện và mã nguồn của dịch vụ thuộc quyền sở hữu của Shelter &amp; Seed Initiative hoặc
        các đối tác cấp phép. Bạn không được sao chép, phân phối hoặc tạo tác phẩm phái sinh khi chưa có sự đồng ý
        bằng văn bản.
      </p>
      <p>
        Dữ liệu khảo sát bạn cung cấp được cấp phép cho tổ chức sử dụng nhằm thực hiện các mục tiêu phi lợi nhuận
        nêu tại mục 1.
      </p>

      <h2>6. Giới hạn trách nhiệm</h2>
      <p>
        Dịch vụ được cung cấp "<em>nguyên trạng</em>" (<em>as-is</em>). Shelter &amp; Seed Initiative không chịu
        trách nhiệm về thiệt hại gián tiếp, ngẫu nhiên hoặc hậu quả phát sinh từ việc sử dụng hoặc không thể sử
        dụng dịch vụ, trong phạm vi pháp luật Việt Nam cho phép.
      </p>

      <h2>7. Chấm dứt</h2>
      <p>
        Chúng tôi có quyền đình chỉ hoặc chấm dứt quyền truy cập của bạn nếu vi phạm các điều khoản này.
        Bạn có thể chấm dứt bất kỳ lúc nào bằng cách xóa tài khoản.
      </p>

      <h2>8. Thay đổi điều khoản</h2>
      <p>
        Chúng tôi có thể cập nhật Điều khoản này. Thay đổi quan trọng sẽ được thông báo trước ít nhất 15 ngày.
        Tiếp tục sử dụng dịch vụ sau ngày hiệu lực đồng nghĩa với việc bạn chấp nhận điều khoản mới.
      </p>

      <h2>9. Luật áp dụng và giải quyết tranh chấp</h2>
      <p>
        Điều khoản này được điều chỉnh bởi <strong>pháp luật nước Cộng hòa xã hội chủ nghĩa Việt Nam</strong>.
        Mọi tranh chấp phát sinh sẽ được giải quyết trước tiên bằng thương lượng thiện chí;
        nếu không thành, sẽ được đưa ra Tòa án nhân dân có thẩm quyền tại Việt Nam.
      </p>

      <h2>10. Liên hệ</h2>
      <p>
        <strong>Shelter &amp; Seed Initiative</strong><br />
        Email: <a href="mailto:privacy@shelterseed.org">privacy@shelterseed.org</a>
      </p>
    </article>
  )
}

function TermsEn() {
  return (
    <article className="prose max-w-none">
      <h1>Terms of Service</h1>
      <p className="text-sm text-gray-500">Effective date: 11 June 2026 · Applies to: Shelter &amp; Seed Survey System</p>

      <p>
        By accessing and using the Survey System provided by Shelter &amp; Seed Initiative ("service"), you agree to be
        bound by these Terms of Service. If you do not agree, please do not use the service.
      </p>

      <h2>1. Service Description</h2>
      <p>
        The service allows users to sign in with Google or Facebook accounts and participate in surveys published
        by Shelter &amp; Seed Initiative to collect data for housing, livelihood, and social welfare support programs.
      </p>

      <h2>2. Eligibility</h2>
      <ul>
        <li>You must be at least <strong>13 years of age</strong>.</li>
        <li>You must have a valid Google or Facebook account.</li>
        <li>You are responsible for keeping your device and login account secure.</li>
        <li>Each user may participate in each survey only once.</li>
      </ul>

      <h2>3. Acceptable Use</h2>
      <p>You agree to:</p>
      <ul>
        <li>Provide truthful and accurate information in surveys.</li>
        <li>Use the service for personal, lawful purposes only.</li>
        <li>Not attempt to access other users' data.</li>
      </ul>

      <h2>4. Prohibited Conduct</h2>
      <p>The following are strictly prohibited:</p>
      <ul>
        <li>Intentionally providing false information to corrupt research data.</li>
        <li>Creating multiple accounts to submit multiple responses to the same survey.</li>
        <li>Attacking, scanning, exploiting, or disrupting the service in any way.</li>
        <li>Using the service for commercial or unlawful purposes.</li>
        <li>Posting content that is illegal, discriminatory, or violates others' rights.</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        All content, interfaces, and source code of the service are owned by Shelter &amp; Seed Initiative or its
        licensors. You may not copy, distribute, or create derivative works without prior written consent.
      </p>
      <p>
        Survey data you provide is licensed to the organization for use in pursuit of the non-profit goals described in section 1.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        The service is provided "<em>as-is</em>." Shelter &amp; Seed Initiative shall not be liable for indirect,
        incidental, or consequential damages arising from use or inability to use the service, to the extent permitted
        by Vietnamese law.
      </p>

      <h2>7. Termination</h2>
      <p>
        We reserve the right to suspend or terminate your access for violations of these terms.
        You may terminate at any time by deleting your account.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        We may update these Terms. Material changes will be notified at least 15 days in advance.
        Continued use after the effective date constitutes acceptance of the updated terms.
      </p>

      <h2>9. Governing Law and Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of the <strong>Socialist Republic of Vietnam</strong>.
        Disputes will be resolved first through good-faith negotiation; if unsuccessful, by the competent
        People's Court in Vietnam.
      </p>

      <h2>10. Contact</h2>
      <p>
        <strong>Shelter &amp; Seed Initiative</strong><br />
        Email: <a href="mailto:privacy@shelterseed.org">privacy@shelterseed.org</a>
      </p>
    </article>
  )
}
