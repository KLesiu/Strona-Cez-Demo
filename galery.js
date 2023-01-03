  var i = 0; //start 
  var images = [];
  var time = 1000;

  //images list
  images[0] = 'brama.jpg';
  images[1] = 'cku.jpg';
  images[2] = 'budynek.jpg';

  //change images
  function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){
        i++;       
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
  }
  window.onload = changeImg;

