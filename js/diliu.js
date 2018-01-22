/**
 * Created by lenovo on 2018/1/9.
 */
{
    let banners=document.querySelectorAll(".banner ul li")
    let br=document.querySelector(".banner");
    let n=0;
    function fn() {
        n++;
        if(n===banners.length){
            n=0;
        }
        for(let i=0;i<banners.length;i++){
            banners[i].classList.remove("active")
        }
        banners[n].classList.add("active")
    }
    let acd=setInterval(fn,2000);
    br.onmouseover=function () {
        clearInterval(acd);
    };
    br.onmouseout=function () {
        acd=setInterval(fn,2000);
    };
}

{
    let toq = document.querySelector(".biao");
    let toa=document.querySelector(".biao1")
    //  let left=document.querySelector(".asd");
    window.onscroll = function () {
        let st = document.documentElement.scrollTop;
        if (st > 100) {
            //toq.style.display="block";
            toa.style.top = "0";
        } else {
            toa.style.display="block";
            // toq.style.display="none";
            toq.style.top = "-100px"
        }
    }
}