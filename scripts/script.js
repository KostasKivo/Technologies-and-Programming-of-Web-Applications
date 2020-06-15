window.onload = function startChange() {

  var date = new Date();
  var flex = document.getElementsByClassName("flex-container");

  function changeDocumentByDay() {
    if(date.getDay()==0) {
      flex[0].style.backgroundColor = "red"
    } else if (date.getDay()==1) {
      flex[0].style.backgroundColor = "blue"
      //console.log("Hello world!");  
    } else if (date.getDay()==2) {
      flex[0].style.backgroundColor = "#fefbd8"; 
    } else if (date.getDay()==3) {
      flex[0].style.backgroundColor = "yellow"; 
    } else if (date.getDay()==4) {
      flex[0].style.backgroundColor = "white";  
    } else if (date.getDay()==5) {
      flex[0].style.backgroundColor = "green"; 
    } else if (date.getDay()==6) {
      flex[0].style.backgroundColor = "orange"; 
    }
  }

  changeDocumentByDay();
}

startChange();

function bigImages() {
  console.log("Its happening");
}


//Body doesnt load, srcList is undefined

var images = document.getElementsByTagName('img'); 

var srcList = []; 
for(var i = 0; i < images.length; i++) {
    srcList.push(images[i].src);
}
