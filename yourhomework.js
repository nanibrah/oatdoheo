(async () => {
  // Hàm bỏ tiền tố "A." "B." "C." "D."
  const normalize = (text) => {
    return text.replace(/^[A-D]\.\s*/, "").trim();
  };

  // Lấy tất cả link câu hỏi
  const questionLinks = Array.from(document.querySelectorAll('a[href^="/quiz/question/"]'))
    .map(a => a.href);

  for (let link of questionLinks) {
    try {
      // Fetch trang con
      const res = await fetch(link);
      const html = await res.text();

      // Parse HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // Lấy <b> chứa đáp án
      const ansTag = doc.querySelector(
        ".my-3.p-3.bg-body.shadow-sm.d-r-xemthem.text-center b"
      );
      if (!ansTag) continue;

      const correctAnsRaw = ansTag.textContent.trim();
      const correctAns = normalize(correctAnsRaw); // chỉ còn "c – d – a – b – e"

      // Lấy số câu hỏi từ URL
      const qnumMatch = link.match(/-(\d+)$/);
      const qnum = qnumMatch ? qnumMatch[1] : "?";

      // Tìm khối câu hỏi tương ứng trên trang chính
      const quesDiv = document.querySelector(`#qqans-${qnum}`);
      if (!quesDiv) continue;

      // So khớp với các đáp án
      const options = quesDiv.querySelectorAll(".quiz-ans-item label");
      let found = null;
      options.forEach(label => {
        const optionText = normalize(label.textContent.trim());
        if (optionText === correctAns) {
          found = label;
        }
      });

      console.log(`Câu ${qnum}: Đáp án đúng -> ${correctAns}`);

      if (found) {
        console.log(`Khớp với lựa chọn: ${found.textContent.trim()}`);
        // Highlight trực tiếp trên giao diện
        found.style.color = "green";
        found.style.fontWeight = "bold";
      } else {
        console.log(`❌ Không tìm thấy đáp án trong trang chính`);
      }
    } catch (err) {
      console.error("Lỗi xử lý:", err);
    }
  }
})();
