
let myImage;
let originalImage;

function preload() {
  originalImage = loadImage('GA.PNG');
  myImage = loadImage('GA.PNG');
}
function setup() {
  createCanvas(windowWidth-20,windowHeight-20);
  background("pink")
  // scales the image down for speed. Adjust at your own risk.   
loadPixels();
      for (let y = 0; y < myImage.height; y++) {
        for (let x = 0; x <myImage. width; x++) {
          let pixel = (x + y * width)*4;
          pixels[pixel+0] = x;
          pixels[pixel+1] = random(255);
          pixels[pixel+2] = y;
          pixels[pixel+3] = 255;      
        }
      }
      updatePixels();
    
    
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
  "f": flipImageH,
  "o":oldParis,
  "h":hauntedHouse,
  "n":neonGreen,
  "p":supriseColor,
  "s":stretch,
  "b":darkBlue,
  "q": darkRed,
  "g": grey,
  "b":black,




}

function keyPressed() {
  if(key in manipulationDispatch ) {
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
function stretch() {
  for( let x = 0; x < myImage.width; x++ ) {
    for( let y = 0; y < myImage.height; y++ ) {
      myImage.set(x,y,originalImage.get(myImage.width/x,y));
    }
  }
}

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


function oldParis(){
        for (let y = 0; y < myImage.height; y++) {
            for (let x = 0; x < myImage.width; x++) {
              let originalPixel = myImage.get(x,y);
              
              const r = red(originalPixel);
              const g = green(originalPixel);
              const b = blue(originalPixel);
      
              let red1 = r *.393 + g *.769 + b *.189;
              let green1 = r *.349 + g *.686 + b *.168;
              let blue1 = r *.349 + g *.686 + b *.168;
          
                myImage.set(x,y,color(
        red1,green1,blue1
      )
      )
        }
      }
    
    }
    
    function hauntedHouse(){   
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
           let originalPixel = myImage.get(x,y);
      myImage.set( x, y, color(
        red(originalPixel),
        125-green(originalPixel),
        blue(originalPixel)
      ));
        }
      }
    }

    function  supriseColor(){
    for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
           let originalPixel = myImage.get(x,y);
      myImage.set( x, y, color(
        red(originalPixel),
        45-green(originalPixel),
        blue(originalPixel)
      ));
        }
      }
    }
function neonGreen(){
    for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
           let originalPixel = myImage.get(x,y);
      myImage.set( x, y, color(
        red(originalPixel),
        325-green(originalPixel),
        15-blue(originalPixel)
      ));
        }
      }
    }
    

    function darkBlue(){
    for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
           let originalPixel = myImage.get(x,y);
      myImage.set( x, y, color(
        20-red(originalPixel),
        45-green(originalPixel),
        blue(originalPixel)
      ));
        }
        
      }
    }
      function darkRed(){
    for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
           let originalPixel = myImage.get(x,y);
      myImage.set( x, y, color(
        90-red(originalPixel),
        25-green(originalPixel),
        11-blue(originalPixel)
      ));
        }
        
      }
    }
    function grey(){
    for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
           let originalPixel = myImage.get(x,y);
      myImage.set( x, y, color(
        80-red(originalPixel),
        95-green(originalPixel),
        71-blue(originalPixel)
      ));
        }
        
      }
    }
   
   function black(){
    for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
           let originalPixel = myImage.get(x,y);
      myImage.set( x, y, color(
        10-red(originalPixel),
        25-green(originalPixel),
        31-blue(originalPixel)
      ));
        }
        
      }
    }

    function theOther(){
    for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
           let originalPixel = myImage.get(x,y);
      myImage.set( x, y, color(
        60-red(originalPixel),
        75-green(originalPixel),
        31-blue(originalPixel)
      ));
        }
        
      }
    }
   




    
    