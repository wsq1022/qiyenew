/**
 * Created by lenovo on 2018/1/7.
 */
// 无痕轮播
{
    let inenr=document.querySelector(".ltt")
    let item=document.querySelectorAll(".luntu")
    console.log(item)
    let l=document.querySelectorAll(".item").length
    let n=0
    let st=setInterval(function(){
        n++;
        if(n==1){
            inenr.style.transition="all 1s"
        }
        if(n==l){
            n=0
        }
        inenr.style.marginLeft=-n*987+"px"
    },3000)
    inenr.addEventListener("transitionend",function(){
        if(n==3){
            inenr.style.transition="none";
            inenr.style.marginLeft=0;
            n=0
        }
    })
}
// 轮播图{
var banners=document.querySelectorAll(".banner ul li");
var pagers=document.querySelectorAll(".dian div");
var br=document.querySelector(".banner");
var n=0;
function fn() {
    n++;
    if(n==2) {
        n = 0;
    }
    for(let i=0;i<banners.length;i++){
        banners[i].classList.remove("active");
        pagers[i].classList.remove("active")
    }
    banners[n].classList.add("active");
    pagers[n].classList.add("active")
}
let acd=setInterval(fn,3000);
br.onmouseover=function () {
    clearInterval(acd);
};
br.onmouseout=function () {
    acd=setInterval(fn,3000);
}

var flag=true;
//左右点击事件
// banneryou.onclick=function(){
//     if(flag){
//         flag=false;
//         fn();
//     }
// }
// bannerzuo.onclick=function(){
//     if(flag){
//         flag=false;
//         fn("l");
//     }
// };
// banners.forEach(function(ele,index){
//     ele.addEventListener("transitionend",function(){
//         flag=true;
//     })
// })
{
    let toq = document.querySelector(".biao");
    let toa=document.querySelector(".biao1")
    console.log(toq)
    //  let left=document.querySelector(".asd");
    window.onscroll = function () {
        let st = document.documentElement.scrollTop;
        if (st > 100) {
            toq.style.display="none"
            toa.style.display="block"
            //toq.style.display="block";
            toa.style.top = "0";
        } else {
            toa.style.display="none"
            toq.style.display="block"
            // toq.style.display="none";
            toa.style.top = "-100px"
        }
    }
}

{
   let totap=document.querySelector(".bank");
    totap.onclick=function () {
        //document.documentElement.scrollTop=0;
        let sp=document.documentElement.scrollTop;
        let saq=sp*30/300;
        let t=setInterval(function () {
            sp-=saq;
            if(sp<=0){
                sp=0;
                clearInterval(t)
            }
            document.documentElement.scrollTop=sp;

        },20)
    }

}
