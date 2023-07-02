// "use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

// Меню бургер

const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
    const menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", function(a) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}


// Скрыть/показать блок в курсах
// ОЧЕНЬ МНОГО БУКВ (143 строки)

var c1s1 = document.getElementById("sidebutton1");
var c1s1 = document.getElementById("sidebutton2");
var c1s1 = document.getElementById("sidebutton3");
var c1s1 = document.getElementById("sidebutton4");
var c1s1 = document.getElementById("sidebutton5");

var c1s1 = document.getElementById("c1s1");
var c1s2 = document.getElementById("c1s2");
var c1s3 = document.getElementById("c1s3");
var c1s4 = document.getElementById("c1s4");
var c1s5 = document.getElementById("c1s5");
function viewSection1() {
    c1s1.style.display = "block";
    sidebutton1.style.color = "#0d6efd";
    sidebutton1.style.borderLeft = "3px solid #0d6efd";
    sidebutton1.style.paddingLeft = "10px";

    c1s2.style.display="none";
    sidebutton2.style.color = "#000";
    sidebutton2.style.borderLeft = "none";
    sidebutton2.style.paddingLeft = "0";

    c1s3.style.display="none";
    sidebutton3.style.color = "#000";
    sidebutton3.style.borderLeft = "none";
    sidebutton3.style.paddingLeft = "0";

    c1s4.style.display="none";
    sidebutton4.style.color = "#000";
    sidebutton4.style.borderLeft = "none";
    sidebutton4.style.paddingLeft = "0";

    c1s5.style.display="none";
    sidebutton5.style.color = "#000";
    sidebutton5.style.borderLeft = "none";
    sidebutton5.style.paddingLeft = "0";
}

function viewSection2() {
    c1s1.style.display = "none";
    sidebutton1.style.color = "#000";
    sidebutton1.style.borderLeft = "none";
    sidebutton1.style.paddingLeft = "0";

    c1s2.style.display="block";
    sidebutton2.style.color = "#0d6efd";
    sidebutton2.style.borderLeft = "3px solid #0d6efd";
    sidebutton2.style.paddingLeft = "10px";

    c1s3.style.display="none";
    sidebutton3.style.color = "#000";
    sidebutton3.style.borderLeft = "none";
    sidebutton3.style.paddingLeft = "0";
    
    c1s4.style.display="none";
    sidebutton4.style.color = "#000";
    sidebutton4.style.borderLeft = "none";
    sidebutton4.style.paddingLeft = "0";

    c1s5.style.display="none";
    sidebutton5.style.color = "#000";
    sidebutton5.style.borderLeft = "none";
    sidebutton5.style.paddingLeft = "0";
}

function viewSection3() {
    c1s1.style.display = "none";
    sidebutton1.style.color = "#000";
    sidebutton1.style.borderLeft = "none";
    sidebutton1.style.paddingLeft = "0";

    c1s2.style.display="none";
    sidebutton2.style.color = "#000";
    sidebutton2.style.borderLeft = "none";
    sidebutton2.style.paddingLeft = "0";

    c1s3.style.display="block";
    sidebutton3.style.color = "#0d6efd";
    sidebutton3.style.borderLeft = "3px solid #0d6efd";
    sidebutton3.style.paddingLeft = "10px";
    c1s4.style.display="none";
    sidebutton4.style.color = "#000";
    sidebutton4.style.borderLeft = "none";
    sidebutton4.style.paddingLeft = "0";

    c1s5.style.display="none";
    sidebutton5.style.color = "#000";
    sidebutton5.style.borderLeft = "none";
    sidebutton5.style.paddingLeft = "0";
}

function viewSection4() {
    c1s1.style.display = "none";
    sidebutton1.style.color = "#000";
    sidebutton1.style.borderLeft = "none";
    sidebutton1.style.paddingLeft = "0";

    c1s2.style.display="none";
    sidebutton2.style.color = "#000";
    sidebutton2.style.borderLeft = "none";
    sidebutton2.style.paddingLeft = "0";

    c1s3.style.display="none";
    sidebutton3.style.color = "#000";
    sidebutton3.style.borderLeft = "none";
    sidebutton3.style.paddingLeft = "0";

    c1s4.style.display="block";
    sidebutton4.style.color = "#0d6efd";
    sidebutton4.style.borderLeft = "3px solid #0d6efd";
    sidebutton4.style.paddingLeft = "10px";

    c1s5.style.display="none";
    sidebutton5.style.color = "#000";
    sidebutton5.style.borderLeft = "none";
    sidebutton5.style.paddingLeft = "0";
}

function viewSection5() {
    c1s1.style.display = "none";
    sidebutton1.style.color = "#000";
    sidebutton1.style.borderLeft = "none";
    sidebutton1.style.paddingLeft = "0";

    c1s2.style.display="none";
    sidebutton2.style.color = "#000";
    sidebutton2.style.borderLeft = "none";
    sidebutton2.style.paddingLeft = "0";

    c1s3.style.display="none";
    sidebutton3.style.color = "#000";
    sidebutton3.style.borderLeft = "none";
    sidebutton3.style.paddingLeft = "0";

    c1s4.style.display="none";
    sidebutton4.style.color = "#000";
    sidebutton4.style.borderLeft = "none";
    sidebutton4.style.paddingLeft = "0";

    c1s5.style.display="block";
    sidebutton5.style.color = "#0d6efd";
    sidebutton5.style.borderLeft = "3px solid #0d6efd";
    sidebutton5.style.paddingLeft = "10px";
}


// Случайная страница

var urls = [
    "../articles/article1.html",
    "../articles/article2.html",
    "../articles/article3.html",
    "../articles/article4.html",
    "../articles/article5.html",
    "../articles/article6.html",
    "../courses/course1.html",
    "../courses/course3.html",
    "../courses/course4.html",
    "../Tests/test1.html",
    "../Tests/test2.html",
    "../Tests/test3.html",
];
document.getElementById("random-link").addEventListener("click", function(){
    var url = urls[Math.floor(Math.random()*urls.length)]
  this.href = url;
});