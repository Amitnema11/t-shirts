var vw =document.querySelector(".view")

var flag =0


vw.addEventListener("click",function(){
    if (flag==0){
    vw.innerHTML= "VIEW LESS"
    vw.style.backgroundColor="green"
    flag =1
}
else{
    vw.innerHTML= "VIEW MORE"
    vw.style.backgroundColor="black"
    flag =0
}

})

