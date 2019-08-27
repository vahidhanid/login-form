function myfunction(form) {
    if (form.uname.value == "amin" && form.psw.value == "123") {
        alert("Wellcome ")

    } else if (form.uname.value == "" && form.psw.value == "") {
        alert("Please Enter Your Username and Password")
    } else if (form.uname.value == "amin" && form.psw.value == "") {
        alert("Please Enter Your Password")
    } else if (form.uname.value == "" && form.psw.value == "123") {
        alert("Please Enter Your Username")
    } else {
        alert("Please Enter Your Correct Username or Password")
    }
}
