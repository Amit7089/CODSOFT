const pass = document.querySelector("#password"); // Selector mein "#" add kiya
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const num = " 0123456789 ";
const symbol = " @#$%^&*(){}<>? ";

const allchar = upperCase + lowerCase + num + symbol; 

function creatpass(){
    let password = " ";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length){
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }

    pass.value = password;
}


function copyPassword(){
    pass.select();
    document.execCommand("copy"); // Deprecated hai, avoid karna behtar hoga
    
   
}
const copyBtn = document.querySelector("#icon");
copyBtn.addEventListener("click", () => {
  alert("Copy Your Password!")
});