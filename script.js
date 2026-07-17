function encrypt(){

let text=document.getElementById("text").value;

let password=document.getElementById("password").value;

if(text==""||password==""){

alert("املأ جميع الحقول");

return;

}

let encrypted=CryptoJS.AES.encrypt(text,password).toString();

document.getElementById("result").value=encrypted;

}

function decrypt(){

let cipher=document.getElementById("text").value;

let password=document.getElementById("password").value;

if(cipher==""||password==""){

alert("املأ جميع الحقول");

return;

}

try{

let bytes=CryptoJS.AES.decrypt(cipher,password);

let original=bytes.toString(CryptoJS.enc.Utf8);

if(original==""){

alert("كلمة المرور غير صحيحة");

return;

}

document.getElementById("result").value=original;

}

catch{

alert("خطأ");

}

}

function copyText(){

let text=document.getElementById("result");

text.select();

document.execCommand("copy");

alert("تم النسخ");

}
