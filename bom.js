window.alert("Welcome to the Feedback Form");

function showLocationInfo() {
    console.log("Current URL: " + window.location.href);
    console.log("Protocol: " + window.location.protocol);
    console.log("Host: " + window.location.host);
}

function showBrowserInfo() {
    console.log("Browser Name: " + navigator.appName);
    console.log("Browser Version: " + navigator.appVersion);
    console.log("User Agent: " + navigator.userAgent);
}

function showScreenInfo() {
    console.log("Screen Width: " + screen.width);
    console.log("Screen Height: " + screen.height);
}

function goBackPage() {
    window.history.back();
}

showLocationInfo();
showBrowserInfo();
showScreenInfo();
console.log("BOM file connected successfully");

function togglePassword() {
    let passwordField = document.getElementById("password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function validateForm() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("feedback").value;
    let terms = document.getElementById("terms").checked;


    let genderSelected = false;
    let genders = document.getElementsByName("Gender");

    for (let i =0; i< genders.length; i++) {
        if (genders[i].checked) {
            genderSelected = true;
            break;
        }
    }

    if (name === "" ) {
        window.alert("Name is required");
        return false;
    }

    if (password === "") {
    window.alert("Password is required");
    return false;
    }

    if (password.length < 6) {
        window.alert("Password must be at least 6 characters long");
        return false;
    }

    if (email === "" ) {
        window.alert("Email is required");
        return false;
    }

    if (!genderSelected) {
        window.alert("Please select your gender");
        return false;
    }   

    if (feedback === "" ) {
        window.alert("Please provide your feedback");
        return false;
    }   

    if (!terms) {
        window.alert("Please agree to the terms and conditions");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}   
