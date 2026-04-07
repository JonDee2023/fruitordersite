document.getElementById("signupform1a").addEventListener("submit", function(e){
    e.preventDefault(); //Prevent empty form submission

    let storedUsers = JSON.parse(localStorage.getItem("users")) || []; 

    let auserFN = document.getElementById("ufna").value
    let auserLN = document.getElementById("ulna").value
    let auserEMAIL = document.getElementById("uemaila").value
    let auserPHONE =  document.getElementById("phonea").value
    let auserDOB =  document.getElementById("doba").value
    let auserPWORD = document.getElementById("pworda").value

    if (!auserFN || !auserLN || !auserEMAIL || !auserPHONE || !auserDOB || !auserPWORD){
        alert("Complete all the required fields")
    }

    else{
        alert("user data sucessfully entered")
    }

    let emailExists=storedUsers.some(user => user.email===auserEMAIL);

    if (emailExists){
        alert("an caaount with this email already exist");
        return;
    }
    
    function  hashPassword(auserPWORD){
        return btoa(auserPWORD);
    }
    
    let newUser ={
        firstname: auserFN,
        lastname : auserLN,
        email : auserEMAIL,
        phone : auserPHONE, 
        dob :  auserDOB, 
        pword : hashPassword(auserPWORD)
    };

    storedUsers.push(newUser);

    localStorage.setItem("users", JSON.stringify(storedUsers));

    alert("New user  "+newUser.firstname+" successfully added.");

    document.getElementById("signupform1a").reset();

});
