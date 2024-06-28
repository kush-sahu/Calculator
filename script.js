let currentDisplay='';
document.querySelector("#one").onclick=function(){
    currentDisplay=currentDisplay + '1';
    document.querySelector(".output").value=currentDisplay;
    
}

document.querySelector("#two").onclick=function(){
    currentDisplay=currentDisplay + '2';
    document.querySelector(".output").value=currentDisplay;
}

document.querySelector("#three").onclick=function(){
    currentDisplay=currentDisplay + '3';
    document.querySelector(".output").value=currentDisplay;
}

document.querySelector("#four").onclick=function(){
    currentDisplay=currentDisplay + '4';
    document.querySelector(".output").value=currentDisplay;
}

document.querySelector("#five").onclick=function(){
    currentDisplay=currentDisplay + '5';
    document.querySelector(".output").value=currentDisplay;
}

document.querySelector("#six").onclick=function(){
    currentDisplay=currentDisplay + '6';
    document.querySelector(".output").value=currentDisplay;
}

document.querySelector("#seven").onclick=function(){
    currentDisplay=currentDisplay + '7';
    document.querySelector(".output").value=currentDisplay;
}

document.querySelector("#eight").onclick=function(){
    currentDisplay=currentDisplay + '8';
    document.querySelector(".output").value=currentDisplay;
}

document.querySelector("#nine").onclick=function(){
    currentDisplay=currentDisplay + '9';
    document.querySelector(".output").value=currentDisplay;
}

document.querySelector("#zero").onclick=function(){
    currentDisplay=currentDisplay + '0';
    document.querySelector(".output").value=currentDisplay;
}

document.querySelector("#cancle").onclick=function(){
    currentDisplay='';
    document.querySelector(".output").value=currentDisplay;
}

document.querySelector("#dot").onclick=function(){
    currentDisplay=currentDisplay + '_';
    document.querySelector(".output").value=currentDisplay;
}

document.querySelector("#pm").onclick=function(){
    currentDisplay=currentDisplay + '(';
    document.querySelector(".output").value=currentDisplay;
}
document.querySelector("#add").onclick=function(){
    currentDisplay=currentDisplay + '+';
    document.querySelector(".output").value=currentDisplay;
}
document.querySelector("#minus").onclick=function(){
    currentDisplay=currentDisplay + '-';
    document.querySelector(".output").value=currentDisplay;
}
document.querySelector("#x").onclick=function(){
    currentDisplay=currentDisplay + '*';
    document.querySelector(".output").value=currentDisplay;
}
document.querySelector("#dash").onclick=function(){
    currentDisplay=currentDisplay + ')';
    document.querySelector(".output").value=currentDisplay;
}
document.querySelector("#slesh").onclick=function(){
    currentDisplay=currentDisplay + '/';
    document.querySelector(".output").value=currentDisplay;
}
document.querySelector("#equal").onclick=function(){
   
    currentDisplay=eval(currentDisplay);
    document.querySelector(".output").value=currentDisplay;
}
