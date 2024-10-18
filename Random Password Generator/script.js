// const passwordbox=document.getElementById("password");
// const length=12;

// const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowercase="abcdefghijklmnopqrstuvwxyz";
// const number="0123456789";
// const symbol="@#$%^&*()_+~|}{[]<>/-=";

// const allchars=uppercase+lowercase+number+symbol;

// function createpassword(){
//     let password="";
//     password+=uppercase[Math.floor(Math.random()*uppercase.length())];
//     password+=lowercase[Math.floor(Math.random()*lowercase.length())];
//     password+=number[Math.floor(Math.random()*number.length())];
//     password+=symbol[Math.floor(Math.random()*symbol.length())];

//     while(length>password.length){
//         password+=allchars[Math.floor(Math.random()*allchars.length())];
//     }

//     passwordbox.value=password;
// }



// function copypassword(){
//     passwordbox.ariaSelected();
//     document.execCommand("copy");
// }


const passwordbox = document.getElementById("password");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]<>/-=";

const allchars = uppercase + lowercase + number + symbol;

function createpassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    passwordbox.value = password;
}

function copypassword() {
    passwordbox.select();
    navigator.clipboard.writeText(passwordbox.value)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch(err => {
            console.error("Could not copy text: ", err);
        });
}
