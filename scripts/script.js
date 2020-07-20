window.onload = function startChange() {

  
  changeDocumentByDay();
  changeParagraphs();
  onEventDblClickImages();
  hoverImagesFlexBoxItem();
}


  function changeDocumentByDay() {

    let date = new Date();
    var flex = document.getElementsByClassName("flex-container");

    if(date.getDay()==0) {
      flex[0].style.backgroundColor = "red"
    } else if (date.getDay()==1) {
      flex[0].style.backgroundColor = "blue"
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

  function changeParagraphs() {

    var para = document.getElementsByTagName("p"); 
    let date = new Date();

    if (date.getDay()==3) {
      for(let i = 0 ; i < para.length ; i++) {  
        para[i].style.fontSize = "large"; 
        para[i].style.color = "green"; 
      }
    }
  }


 

  function doubleClickImages() {
    alert("Don't double click images please!");
  }


  function onEventDblClickImages() {
    var photos = document.getElementsByClassName("grid-item");

    for (var i = 0; i < photos.length; i++) { 
      photos[i].addEventListener('dblclick', doubleClickImages, false);
    }
  }

  function hoverImagesFlexBoxItem() {
    let photoItem = document.getElementById("flexbox-item-2");
    photoItem.addEventListener("mouseover", ImagesFlexBoxChanging,false);
    photoItem.addEventListener("mouseout", ImagesFlexBoxNormal,false);
  }

  function ImagesFlexBoxChanging() {
    let photoItem = document.getElementById("flexbox-item-2");
    photoItem.style.color = "blue";
  }

  function ImagesFlexBoxNormal () {
    let photoItem = document.getElementById("flexbox-item-2");
    photoItem.style.color = "black";
  }


function justALogMessage() {
  console.log("Just a random log message to test this function");
  }
  justALogMessage();    
 


