
let navWrapper = document.getElementById('nav');

window.addEventListener('scroll', function(){

if(window.pageYOffset > 50)
{



navWrapper.classList.add('scroll');

}else{

navWrapper.classList.remove('scroll');
   }
})
// change plan price
var monthlyBtn = document.getElementById("monthly");
var yearlyBtn = document.getElementById("yearly");

var titunium = document.getElementById("titunium");
var plutinium = document.getElementById("plutinium");
var dimond = document.getElementById("dimond");

var tituniumCurrency = document.getElementById("tituniumCurrency");
var plutiniumCurrency = document.getElementById("plutiniumCurrency");
var dimondCurrency = document.getElementById("dimondCurrency");

var discountBadge = document.querySelectorAll(".discountBadge");

function changePriceYearly() {
  yearlyBtn.addEventListener("click", function () {
    titunium.innerText = "2";
    tituniumCurrency.innerText = "میلیون ";

    plutinium.innerText = "5";
    plutiniumCurrency.innerText = "میلیون ";

    dimond.innerText = "7";
    dimondCurrency.innerText = "میلیون ";

   

     for (let i = 0; i <discountBadge.length ; i++) {   
       discountBadge[i].classList.remove("hidden");    discountBadge[i].classList.add("flex")};      yearlyBtn.classList.add("bg-red-500", "text-white");
       monthlyBtn.classList.remove("bg-red-500", "text-white"); 
    
  });
}

changePriceYearly();
function changePriceMonthly() {
  monthlyBtn.addEventListener("click", function () {
 
      titunium.innerText = "300";
      tituniumCurrency.innerText = "هزار ";

      plutinium.innerText = "600";
      plutiniumCurrency.innerText = "هزار ";

      dimond.innerText = "900";
      dimondCurrency.innerText = "هزار ";

      for (let i = 0; i < discountBadge.length; i++) {
        discountBadge[i].classList.remove("flex");
        discountBadge[i].classList.add("hidden");
      }
 monthlyBtn.classList.add("bg-red-500", "text-white");
yearlyBtn.classList.remove("bg-red-500", "text-white");

});

  
}
