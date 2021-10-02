
function Submit() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    if (firstName == "") {
        alert("please enter your first name");
        return false;
    }
    if (lastName == "") {
        alert("Please enter your last name");
        return false;
    }

}
