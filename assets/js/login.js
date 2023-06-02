function login() {
    var login = document.getElementById("model_login")
    login.classList.add("show-model")

    var elementLogin = document.getElementById("auth-form")
    login.addEventListener("click", function (event) {
        var targetElement = event.target;  // Phần tử được bấm

        // Kiểm tra xem phần tử được bấm có nằm trong form hay không
        if (!elementLogin.contains(targetElement)) {
            login.classList.remove("show-model")
        }
    });
}

