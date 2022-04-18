function checkInput() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name.trim() == "" || subject.trim() == "" || phone.trim() == "" || email.trim() == "" || message.trim() == "") {
        alert("Var god och skriv in alla uppgifter !");
    }
    else {
        alert("Ditt meddelande var skickat till " + email);
    }
}

// function readMore() {
//     const readMoreBtn = document.querySelector(".read-more-btn");
//     const text = document.querySelector(".text");
//     text.classList.toggle("show-more");
//     if (readMoreBtn.innerText === "Läs Mer") {
//         readMoreBtn.innerText = "Läs Mindre";
//     } else {
//         readMoreBtn.innerText = "Läs Mer";
//     }
// }
