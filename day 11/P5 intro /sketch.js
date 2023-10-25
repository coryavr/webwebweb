function setup() {
    createCanvas(innerWidth, innerHeight);
    background(200,500,0);


}
function draw() {

   //background(0, 200, 100);

    let red = map(mouseX,0,width,0, 255)
    fill(red,0,0)
    noFill()
    strokeWeight(1)
    stroke(mouseX,mouseY,255)
   //rect(mouseX, mouseY,random(10,50),random(10,50));

   text("bruh",mouseX, mouseY);

}
function windowResized(){
resizeCanvas(innerWidth, innerHeight);

}

console.log("???")