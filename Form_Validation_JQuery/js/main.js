function validateForm() {
    let fname = $('#firstName').val();
    if (fname == "" || fname == undefined || fname == null) {
        alert("Enter your First Name");
        return false;
    }
    let lname = $("#lastName").val();
    if (lname == "" || lname == undefined || lname == null) {
        alert("Enter your Last Name");
        return false;
    }

    let gndr = $("#gender").val();
    if (gndr == "male" || gndr == "female") {
        return true;
    }
    
    if ($('input[type=checkbox]:checked').length == 0) {
        alert("please select hobbies");
        return false;
    }
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = $("#email").val();
    if (email == undefined || email == null || email == "") {
        alert("please provide Email ID");
        return false;
    }
    if (!email.match(mailformat)) {
        alert("please provide  valid Email ID");
        return false;
    }

    let phnno = $("#phnno").val();
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



