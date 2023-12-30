let generateColor=document.getElementById('clickToGenerateColorCode');
let generateCode=document.getElementById('GenerateCode');
generateColor.addEventListener('click' , ()=>{
    let randomNumber=Math.floor(Math.random()*16777215);
    let code="#" + randomNumber.toString(16);
     document.body.style.backgroundColor=code;
    generateCode.innerHTML=code;
    //to copy color
    navigator.clipboard.writeText(code);
})
