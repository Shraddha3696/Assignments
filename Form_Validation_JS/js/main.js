function validateForm() {
    let fname = document.getElementById("firstName").value;    
    if (fname == undefined || fname == "" || fname == null ) {
        alert("Please enter your First Name");
        return false;
    }
    let lname = document.getElementById("lastName").value;
    if(lname == undefined || lname == "" || lname == null){
        alert("Please enter your Last Name");
        return false;
    }
    let gndr = document.getElementsByName("gender").value;
    if (gndr == "male" || gndr == "female") {
        return true;
    }
    let markedCheckbox = document.querySelector('input[type="checkbox"]:checked');
    if (markedCheckbox == null) {
        alert("please select hobbies");
        return false;
    }
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById("email").value;
    if (email == undefined || email == null || email == "") {
        alert("please provide Email ID");
        return false;
    } 
     if (!email.match(mailformat)) {
        alert("please provide  valid Email ID");
        return false;
    }
    
    let phnno = document.getElementById("phnno").value;
    if (phnno == null || phnno == "" || phnno == undefined) {
        alert("Enter phone number ");
        return false;
    }
    const phoneno = /^[0-9]{10}$/;
    if (!phnno.match(phoneno)) {
        alert("Please enter valid Phone Number");
        return false
    }

    
}
