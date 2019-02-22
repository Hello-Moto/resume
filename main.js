setTimeout(function(){
    sitewelcome.classList.remove("active");
},)
window.onscroll = function(){
    if(window.scrollY > 0){
        topnavbar.classList.add("sticky");
    }else{
        topnavbar.classList.remove("sticky");
    }
}
let  aTigger = document.querySelectorAll("nav.fr > ul > li");
for(let i = 0; i < aTigger.length; i++){
    aTigger[i].onmouseenter = function(x){
        x.currentTarget.classList.add('active');
    }
    aTigger[i].onmouseleave = function(x){
        x.currentTarget.classList.remove('active');
    }
}

let liTagger = document.querySelectorAll("nav.fr > ul > li > a");
for(var i = 0; i < liTagger.length; i++){
    liTagger[i].onclick = function(x){
        x.preventDefault(); 
        let a = x.currentTarget;
        let href = a.getAttribute("href");  //
        let element = document.querySelector(href);
        let top = element.offsetTop; //获取元素到顶部的高度
        window.scrollTo(0 , top - 80);
    }
}