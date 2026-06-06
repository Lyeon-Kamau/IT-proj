document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    message.innerHTML = "";
    message.className = "";

    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if(email === "" || password === ""){
        message.textContent = "Please fill in all fields.";
        message.className = "error";
        return;
    }

    // if(!emailPattern.test(email)){
    //     message.textContent = "Please enter a valid email address.";
    //     message.className = "error";
    //     return;
    // }

    if(password.length < 6){
        message.textContent = "Password must be at least 6 characters long.";
        message.className = "error";
        return;
    }

    message.textContent = "Validation successful. Ready to submit!";
    message.className = "success";
});
