document.write("learning the js in very beginning");

function oneFunction(){
    alert("hhhhhhhhhh");
}

function onbeforeload(event){
    var e =event || window.event;
    e.returnValue ="welcome back again!";
}

window.onload = function () {
    alert("欢迎光临萌萌小店！");
}