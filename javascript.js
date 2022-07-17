function checkInput() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
        alert("Var god och fill i namn, email, och meddelande !");
    }
}

function copyDiscord() {
    navigator.clipboard.writeText("Nael4Slayer#5863");
    alert('Discord username was copied to the clipboard');
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
