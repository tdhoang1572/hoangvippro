const listItem = document.querySelector(".instagram-list");
let pressed = false;
let startX = 0;

listItem.addEventListener("mousedown", function (e) {
  pressed = true;
  startX = e.clientX;
  this.style.cursor = "grabbing";
});


window.addEventListener("mouseup", function (e) {
  pressed = false;
});

listItem.addEventListener("mousemove", function (e) {
  if (!pressed) return;
  this.scrollLeft += startX - e.clientX;
  console.log(listItem.scrollLeft)
  console.log(startX - e.clientX)

});

var meoes = document.querySelector('.meoes')
var instagram = document.querySelector('.instagram')
var container = document.querySelector('.container')
var wrapper = document.querySelector('.wrapper')
var footer = document.querySelector('.footer')

setTimeout(function(){
meoes.style.display = 'none'
instagram.style.display = 'block'
container.style.display = 'block'
wrapper.style.display = 'block'
footer.style.display = 'block'
},8000)


// var prev = document.querySelector('.prev')

// var currenIndex = 0;
// prev.addEventListener('click', function(e){
//  var bannerList = document.querySelectorAll('.banner-list')
//  bannerList.forEach(function(item, index){
//   currenIndex = index
//   currenIndex++
//   console.log(currenIndex)

//  })
// })
let count = 4;
const navList = document.querySelectorAll(".banner-navigation__input");
navList.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    count = index + 1;
  });
});
document.getElementById("radio1").checked = true;
setInterval(function () {
  document.getElementById("radio" + count).checked = true;
  count++;
    if (count > 5) count = 1;
}, 4000);