var products=document.querySelectorAll(".allproducts li")
var button=document.querySelector(".showprice")
var div=document.querySelector(".purchses")
var input=document.querySelector(".card")
var btt=document.querySelector(".btn")
var pay=document.querySelector(".money")
var total=0
products.forEach(function(item){
    item.onclick=function(){
        total+=+(item.getAttribute("price"))
       var name = item.querySelector(".content p").textContent
        div.innerHTML += "🤎" + name+"  "
        if(div.innerHTML!=""){
             button.style.display="block"
              btt.style.display="block"
             input.style.display="block"
        }
    }
})
button.onclick=function(){
    pay.innerHTML=" Total Price : " + total+"$" 
}