document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    let userFirstName = document.getElementById("userfn").value.trim();
    let userLastName = document.getElementById("userln").value.trim();
    let userPhoneNumber = document.getElementById("userphone").value.trim();
    let userEmail = document.getElementById("useremail").value.trim().toLowerCase();
    let userDoB = document.getElementById("userdob").value;
    let userPassword = document.getElementById("password").value;

    
    // 🔹 Basic validation
    if (!userFirstName || !userLastName || !userEmail || !userPhoneNumber || !userDoB || !userPassword) {
        alert("Please fill in all required fields.");
        return; // stop execution
    } else {
        alert("Input data taken");
      
    }

    // 🔹 Check if email already exists
    let emailExists = storedUsers.some(user => user.email === userEmail);
    if (emailExists) {
        alert("An account with this email already exists.");
        return;
    }

    // 🔹 Simple hash function (for learning only)
    function simpleHash(password) {
        return btoa(password); // encode to base64 (NOT secure, just demo)
    }

    let newUser = {
        firstname: userFirstName,
        lastname: userLastName,
        phonenum: userPhoneNumber,
        dob: userDoB,
        email: userEmail,
        password: simpleHash(userPassword)
    };

    storedUsers.push(newUser);

    localStorage.setItem("users", JSON.stringify(storedUsers));

    alert("User " + newUser.firstname + " created successfully!");

    
    // Optional: reset form
    document.getElementById("signup-form").reset();
});
