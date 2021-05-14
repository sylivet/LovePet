var shoppingcart=document.getElementById("i_shoppingCart");
shoppingcart.addEventListener("click",function(){
var shoppingcartbk=document.getElementById("i_shoppingCart_bk");
if(shoppingcartbk.style.display === "none"){
    shoppingcartbk.style.display = "block";
}
var close=document.getElementsByClassName("i_closeButton")[0];
close.addEventListener("click",function(){
    if(shoppingcartbk.style.display === "block"){
        shoppingcartbk.style.display = "none";
    }
});
});