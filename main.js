setTimeout(function(){
    sitewelcome.classList.remove("active");
},)
let specialTags = document.querySelectorAll("[date-x]");
specialTags[1].classList.add('offset')
window.onscroll = function(){
    if(window.scrollY > 0){
        topnavbar.classList.add("sticky");
    }else{
        topnavbar.classList.remove("sticky");
    }
    let specialTags = document.querySelectorAll("[date-x]");
    let minindex = 0
    for(let i = 1; i < specialTags.length; i++){
        if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minindex].offsetTop - window.scrollY)){
            minindex = i 
        }
    }
    specialTags[minindex].classList.remove('offset')
    let id = specialTags[minindex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    var li = a.parentNode
    let brother = li.parentNode.children
    for(let i = 0; i < brother.length; i++){
        brother[i].classList.remove('highlight')
    }
    li.classList.add("highlight")
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

let currentTop = window.scrollY;
let targetTop = top - 80;
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
let liTagger = document.querySelectorAll("nav.fr > ul > li > a");
for(var i = 0; i < liTagger.length; i++){
    liTagger[i].onclick = function(x){
        x.preventDefault(); 
        let a = x.currentTarget;
        let href = a.getAttribute("href");  //   
        let element = document.querySelector(href);
        let top = element.offsetTop; //获取元素到顶部的高度

        var currentTop = window.scrollY
        var targetTop = top - 80;
        var s = Math.abs(targetTop - currentTop)
        var t = (s/100)*300
        if(t > 500){
            t = 500
        }
        requestAnimationFrame(animate);
        var coords = {y : currentTop };
        var tween = new TWEEN.Tween(coords)
        .to({y: targetTop}, t)
        .easing(TWEEN.Easing.Back.Out)
        .onUpdate(function(){
            window.scrollTo(0,coords.y)
            // console.log(coords.y)
        })
        .start(); 
    }
}