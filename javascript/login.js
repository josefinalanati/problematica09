var email = document.getElementById("form-email")
var password = document.getElementById("form-password")
var form = document.getElementsByClassName("form")
var label = document.getElementsByClassName("form-label")
var button = document.getElementsByTagName("button")
var error = document.getElementById("error")


function emailValidation () {
    if (email) {
        return true;
    }
    else {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Non existen email"));
        
    }
}

function passwordValidation() {
    if (password) {
        return true;
    }   
    else {
        var li = document.createElement("li")
        li.appendChild(document.createTextNode("Non existen password"));
    }
}
