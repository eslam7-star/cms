const container = document.querySelector(".container"),
        pwShowHide = document.querySelectorAll(".showHidePw"),
        pwFields = document.querySelectorAll(".password"),
        signUp = document.querySelector(".signup-text"),
        login = document.querySelector(".login-link");

        pwShowHide.forEach(eyeIcon =>{
            eyeIcon.addEventListener("click", () =>{
                pwFields.forEach(pwField =>{
                    if(pwField.type === "password"){
                        pwField.type = "text";

                        pwShowHide.forEach(icon =>{
                            icon.classList.replace("uil-eye-slash", "uil-eye");
                        })
                    }else{
                        pwField.type = "password";

                        pwShowHide.forEach(icon =>{
                            icon.classList.replace("uil-eye", "uil-eye-slash");
                        })
                    }
                })
            })
        })     

    
        signUp.addEventListener("click", ( ) =>{
            container.classList.add("active");
        })

        login.addEventListener("click", ( ) =>{
            container.classList.remove("active");
        })

const form = document.querySelector(".login1"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    passField0 = form.querySelector(".password-field0"),
    pass0Input = passField0.querySelector(".pass0");

    function checkEmail(){
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailInput.value.match(pattern)) {
            return emailField.classList.add("invalid");
        }
        emailField.classList.remove("invalid");
    }

    form.addEventListener('click', (e) =>{
        e.preventDefault();
        checkEmail();

        emailInput.addEventListener("keyup", checkEmail);
    });

    



const form1 = document.querySelector(".signup1"),
    nameField = form1.querySelector(".name-field"),
    nameInput = nameField.querySelector(".name"),
    emailField1 = form1.querySelector(".email-field1"),
    emailInput1 = emailField1.querySelector(".email1"),
    passField1 = form1.querySelector(".password-field1"),
    cPassField = form1.querySelector(".c-password-field"),
    pass1Input = passField1.querySelector(".pass1"),
    cPassInput = cPassField.querySelector(".c-pass");


    function checkName(){
        const pattern1 = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
        if (!nameInput.value.match(pattern1)) {
            return nameField.classList.add("invalid");
        }
        nameField.classList.remove("invalid");
    }


    function checkEmail1(){
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailInput1.value.match(pattern)) {
            return emailField1.classList.add("invalid");
        }
        emailField1.classList.remove("invalid");
    }

    function createPass() {
        const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (!pass1Input.value.match(passPattern)) {
            return passField1.classList.add("invalid");
        }
        passField1.classList.remove("invalid");
    }

    function confirmPass() {
        if (pass1Input.value !== cPassInput.value || cPassInput.value === "") {
            return cPassField.classList.add("invalid");
        }
        cPassField.classList.remove("invalid");
    }

    form1.addEventListener('click', (e) =>{
        e.preventDefault();
        checkName();
        checkEmail1();
        createPass();
        confirmPass();

        nameInput.addEventListener("keyup", checkName);
        emailInput1.addEventListener("keyup", checkEmail1);
        pass1Input.addEventListener("keyup", createPass);
        cPassInput.addEventListener("keyup", confirmPass);

        if (!nameField.classList.contains("invalid") 
            && !emailField1.classList.contains("invalid")
            && !passField1.classList.contains("invalid")
            && !cPassField.classList.contains("invalid")) {

            location.href = form1.getAttribute("action")
        }
    });