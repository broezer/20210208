const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;
let b1, b2, b3;
let l1, l2;

let cols, rows;
let scl = 20;
let w = 1600;
let h = 1600;

let flying = 0;

let terrain = [];



function setup() {
   createCanvas(400, 400, WEBGL);
   
   
   c1 = color(255, 251, 167);
   c2 = color(242, 218, 81);
   c3 = color(255, 18, 216);
   
   b1 = color(25,0, 62);
   b2 = color(52,0, 126);
   b3 = color(255, 28, 43);

   
   l1 = color(255, 39, 5);
   l2 = color(52,0,16);
   
   cols = w / scl;
   rows = h / scl;

   for (let x = 0; x < cols; x++) {
    terrain[x] = [];
    for (let y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
   
}


function draw() {
  
 
  setGradient(-width*0.5, height * -0.5 , width, height * 0.5, b1, b2, c3, Y_AXIS);
  setGradient(-width*0.5,0, width, height*0.8, c3, b2, b1,Y_AXIS);
  
  push();  
  translate(0, height * -0.42, width * 0.01);
  setTriangle( width * -0.2 , 0, width * 0.4, c3, b2, b1);
  pop();
  
  push();
  rotateZ(PI / 2)
  setCircle(width * 0.3, 0, width * 0.7, c2, c3, c3);
  
  push();
  translate(width * 0.5 , height * -0.9 , 1);
  rotateZ(PI /2);
  rotateX(PI / 2);
  noFill();
  
  for (let y = 0; y < rows - 1; y++) {
    for (let x = 0; x < cols; x++) {
      fill(l2);
      stroke(c3);
      rect(x*scl, y*scl, scl, scl);
    }
  }
  
  pop(); 
  
  
  
  
  save("20210208.png");
  noLoop();
  
  
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
      
      
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x,(x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2), x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(i, y, i, y + h);
      if ( i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + h);
      }else{
        stroke(p);
        line(i, y, i, y + h);
      }
      
    }
  }
}
function setCircle(x, y, d, c1, c2, c3) {
 let c = 100;
 //circle(x,y,d);
 
 
 for (let i=0; i<c; i++) {
   let col = lerpColor(c1, c2, (i/c)*2 );
   let col02 = lerpColor(c2, c3, ((i - (c/2))/(c/2)));
   let a = lerp(PI, 0, i/c);
   
   if ( i <= c/2){
      fill(col);
      noStroke();
      arc(x, y, d, d, -a, a, CHORD);
    }else{
      fill(col02);
      noStroke();
      arc(x, y, d, d, -a, a, CHORD);
    }   

 }
}

function setTriangle(x, y, h, c1, c2, c3 ){
  d = h;
  push();
  //translate( d * 0.2, d*0.2);
  for (let i = y; i <= y + d; i++) {
    let inter = map(i, y, (y + d) - (d/2), 0, 1);
    let c = lerpColor(c1, c2, inter);
    
    let inter02 = map(i, (y + d) - (d/2) ,  y + d , 0, 1);
    let p = lerpColor(c2, c3, inter02);
    
    //line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);    
    if ( i <= (y + d) - (d/2)){
      stroke(c);
      
      
      if( i >= ( (y + d) -  (d * 0.6)) && i <= ( (y + d) -  (d * 0.5)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
       
       if( i >= ( (y + d) -  (d * 0.7)) && i <= ( (y + d) -  (d * 0.62)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
       
       if( i >= ( (y + d) -  (d * 0.77)) && i <= ( (y + d) -  (d * 0.72)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
       
       if( i >= ( (y + d) -  (d * 0.82)) && i <= ( (y + d) -  (d * 0.79)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
       
       if( i >= ( (y + d) -  (d * 0.86)) && i <= ( (y + d) -  (d * 0.84)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
       
       if( i >= ( (y + d) -  (d * 0.9)) && i <= ( (y + d) -  (d * 0.88)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
       
       if( i >= ( (y + d) -  (d * 0.92)) && i <= ( (y + d) -  (d * 0.91)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
       
       if( i >= ( (y + d) -  (d * 0.94)) && i <= ( (y + d) -  (d * 0.93)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
       
       if( i >= ( (y + d) -  (d * 0.96)) && i <= ( (y + d) -  (d * 0.95)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
        
       if( i >= ( (y + d) -  (d * 0.98)) && i <= ( (y + d) -  (d * 0.97)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
        
       if( i >= ( (y + d) -  (d * 1)) && i <= ( (y + d) -  (d * 0.99)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
      
    }else{
      stroke(p);
      if(i >= ((y + d) - (d * 0.48)) && i <= ((y + d) - (d * 0.25)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);
      }
      
      if (i >= ((y + d) - (d * 0.25)) && i <= ((y + d) - (d * 0.15))){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);
      }
      
      if (i >= ((y + d) - (d * 0.15)) && i <= (y + d)){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);
      }
    }
  }
}
