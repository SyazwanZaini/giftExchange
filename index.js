// document.querySelector("button").addEventListener("click",function(){
//     alert("Tested and Okay");
// });

document.querySelector("button").addEventListener("click", draw);





// function random() {
//   return Math.floor(Math.random() * (names.length));
// }
// var n = random();

// function draw() {
//   for (let i = 0; i < names.length; i++) {
//     var n = Math.floor(Math.random() * (names2.length));
//     document.querySelectorAll("li")[i].innerHTML = names[i] + " ----> " + names2[n];
//     names2 = names2.splice(n,1);

    
//     }
// }

function redraw(){
    var n = Math.floor(Math.random() * (names2.length));
}


var names = ["Syazwan", "Afi", "Amin", "Athirah"];
var names2 = [];

function draw() {
      var n = Math.floor(Math.random() * (names.length));
      document.querySelectorAll("li")[0].innerHTML = names[0] + " ----> " + names[n];
      names2 = names.splice(n,1);

      for (var i=1;i<names.length;i++){
        n = Math.floor(Math.random() * (names2.length));
        document.querySelectorAll("li")[i].innerHTML = names[i] + " ----> " + names2[n];
        names2 = names2.splice(n,1);
        
      }
      
      }
