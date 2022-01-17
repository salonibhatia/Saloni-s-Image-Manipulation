let myImage;
let originalImage;

function preload() {
  originalImage = loadImage('GA.PNG');
  myImage = loadImage('GA.PNG');
}

function setup() {
  createCanvas(windowWidth-20,windowHeight-20);
  // scales the image down for speed. Adjust at your own risk.   
  if(myImage.width>myImage.height) {
    originalImage.resize(width*0.5,0); 
    myImage.resize(width*0.5,0); 
  } else {
    originalImage.resize(0,height*0.5);
    myImage.resize(0,height*0.5);
  }
  
}

function draw() {
  image(myImage,width/2-myImage.width/2, height/2-myImage.height/2);
  noLoop();
}

const manipulationDispatch = {
  "i": invertColors,
  "d": desaturate,
  "r": resetImage,
  "h": flipImageH,
  "p": purple,
  "s":sepia
}

function keyPressed() {
  if( key in manipulationDispatch ) {
    myImage.loadPixels();
    manipulationDispatch[key]();
    myImage.updatePixels();
    redraw();
  }
}

 
function resetImage() {
  for( let x = 0; x < myImage.width; x++ ) {
    for( let y = 0; y < myImage.height; y++ ) {
      myImage.set(x,y,originalImage.get(x,y));
    }
  }
}

function flipImageH() {
  for( let x = 0; x < myImage.width; x++ ) {
    for( let y = 0; y < myImage.height; y++ ) {
      myImage.set(x,y,originalImage.get(myImage.width-x,y));
    }
  }
}
/*
function purple(){
       image(myImage, 0, 0, myImage.width, myImage.height);
        loadPixels();
        for (let y = 0; y <myImage.height; y++) {
            for (let x = 0; x <myImage.width; x++) {
              var index = (x + y * width)*18  
              let r = pixels[index+0];
              let g = pixels[index+1];
              let b = pixels[index+2];
    
              var tr = r *.393 + g *.769 + b *.189;
              var tg = r *.349 + g *.686 + b *.168;
              var tb = r *.272 + g *.534 + b *.131;
              
              pixels[index+0] = tr;
              pixels[index+1] = tg;
              pixels[index+2] = tb;
        }
      }
      updatePixels();
    }
    */
function desaturate() {
  const desaturateAmount = 0.8;
  for( let x = 0; x < myImage.width; x++ ) {
    for( let y = 0; y < myImage.height; y++ ) {   
      let originalPixel = myImage.get(x,y);
      const r = red(originalPixel);
      const g = green(originalPixel);
      const b = blue(originalPixel);
      const LUMA = (Math.min(r,g,b) + Math.max(r,g,b))/2
      myImage.set(x,y, color(
        r + desaturateAmount * (LUMA-r),
        g + desaturateAmount * (LUMA-g),
        b + desaturateAmount * (LUMA-b)
      ));
    }
  }
}

function invertColors() {
  for( let x = 0; x < myImage.width; x++ ) {
    for( let y = 0; y < myImage.height; y++ ) { 
      let originalPixel = myImage.get(x,y);
      myImage.set( x, y, color(
        255-red(originalPixel),
        255-green(originalPixel),
        255-blue(originalPixel)
      ));
    }
  }
}


function sepia(){
    for( let x = 0; x < myImage.width; x++ ) {
    for( let y = 0; y < myImage.height; y++ ) {   
      let originalPixel = myImage.get(x,y);
      let r = red(originalPixel) 
      let g = green(originalPixel)
      let b = blue(originalPixel)
      let sepiar = red *.393 + green *.769 + blue *.189;
      let sepiag = red *.349 + green *.686 + blue *.168;
     let sepiab= red *.349 + green *.686 + blue *.168;
     myImage.set(x,y, color(
       sepiar,
       sepiab,
       sepiag
     )
     )
              
    }
    }
}