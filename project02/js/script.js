function myfunction(form) {
    if (form.uname.value == "amin" && form.psw.value == "123") {
        alert("خوش آمدید")

    } else if (form.uname.value == "" && form.psw.value == "") {
        alert("فیلد های خالی را پر کنید")
    } else if (form.uname.value == "amin" && form.psw.value == "") {
        alert("فیلد خالی را پر کنید")
    } else if (form.uname.value == "" && form.psw.value == "123") {
        alert("فیلد خالی را پر کنید")
    } else {
        alert("فیلد ها را صحیح پر کنید")
    }
}