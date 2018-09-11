window.onload=function () {
    let aside=document.querySelector("aside");

    let gotop=document.querySelector(".gotop");
    gotop.onclick=function () {
        animate(document.body,{scrollTop: 0});
        animate(document.documentElement,{scrollTop: 0})
    };

    window.onscroll=function () {
        let gh=document.scrollTop||document.documentElement.scrollTop;
        if (gh>=600){
            aside.style.display="block";
        } else {
            aside.style.display="none";
        }

    };

    //轮播图
    let banner=document.querySelectorAll(".bg");
    setInterval(Banner,3000);
    let num=0;
    function Banner() {
        num++;
        if (num==banner.length){
            num=0;
        }
        for (let i=0;i<banner.length;i++){
            banner[i].style.zIndex="-999";
        }
        banner[num].style.zIndex="-998";
    }
};