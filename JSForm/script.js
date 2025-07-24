document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("dropForm");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const subjectSelect = document.getElementById("subject");
  const confirmCheck = document.getElementById("confirm");
  const errParagraph = document.getElementById("error");

     form.addEventListener("submit", (event) => {
        event.preventDefault();

        let errMessages = [];
        const username =usernameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const subject = subjectSelect.value;
        const confirm = confirmCheck.checked

        if (username.trim() === "") {
            errMessages.push("กรุณากรอกชื่อ");
            usernameInput.classList.add("is-invalid");
        }

        if (email.trim() === "") {
            errMessages.push("กรุณาอีเมล");
            emailInput.classList.add("is-invalid");
        }

        if (password.trim() === "") {
            errMessages.push("กรุณารหัสผ่าน");
            passwordInput.classList.add("is-invalid");
        }

        if (subject.trim() === "") {
            errMessages.push("กรุณาเลือกหัวข้อ")
            subjectSelect.classList.add("is-invalid")
        }

        if (!confirm) {
            errMessages.push("กรุณาติ๊กถูก");
            confirmCheck.classList.add("is-invalid");
}

        if (errMessages.length > 0) {
            errParagraph.innerHTML = errMessages.join("<br>");
        }

    
      });
     });