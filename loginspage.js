document.getElementById("loginformpg").addEventListener("submit", function(e){
    e.preventDefault(); //stop page reload
    let aloginEMAIL  = document.getElementById("uemailpg").value
    let aloginPWORD= document.getElementById("pwordpg").value
    let aloginmessage=document.getElementById("ipasspg");
    
    if (!aloginEMAIL || !aloginPWORD){
        aloginmessage.textContent="Please complete all fields";
        return;
    }

    let storedUsers=JSON.parse(localStorage.getItem("users")) || [];

    let foundUser=storedUsers.find(user => user.email===aloginEMAIL 
        && user.pword === btoa(aloginPWORD)
    );

    if (foundUser){
        alert("Login successful. Welcome!  "+foundUser.firstname)

        window.open("userhome1.html", "_blank");

       
    } else {
        aloginmessage.textContent = "invalid username or password";
    }

    document.getElementById("loginformpg").reset()
});