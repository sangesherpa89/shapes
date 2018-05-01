function setup() {
  createCanvas(1100, 400, WEBGL);
  
}

function draw() {
  background(255,204, 0);
  
  // Shape
  translate(-240, -100, 0); // Specifies an amount to displace objects within the display window. (left/right translation, up/down translation, forward/backward translation)
  normalMaterial(); //geometry shaped
  push(); //saves the current drawing style setting and transformation
  rotateZ(frameCount * 0.05); //Rotates around Z axis only in WEbgl mode
  rotateX(frameCount * 0.05); //Rotates around X axis only in WEbgl mode
  rotateY(frameCount * 0.05); //Rotates around Y axis only in WEbgl mode
  plane(70); //Draw a plane with a width
  pop(); //restore drawing style setting and transformation
  
  translate(240, 0, 0); // Specifies an amount to displace objects within the display window. (left/right translation, up/down translation, forward/backward translation)
  push(); //saves the current drawing style setting and transformation
  rotateZ(frameCount * 0.03); //Rotates around Z axis only in WEbgl mode
  rotateX(frameCount * 0.03); //Rotates around X axis only in WEbgl mode
  rotateY(frameCount * 0.03); //Rotates around Y axis only in WEbgl mode
  box( 100, 100, 100); //Draw a box with width, height abd depth
  pop(10); //restore drawing style setting and transformation

  translate(240, 0, 0); // Specifies an amount to displace objects within the display window. (left/right translation, up/down translation, forward/backward translation)
  push(); //saves the current drawing style setting and transformation
  rotateZ(frameCount * 0.04); //Rotates around Z axis only in WEbgl mode
  rotateX(frameCount * 0.04); //Rotates around X axis only in WEbgl mode
  rotateY(frameCount * 0.04); //Rotates around Y axis only in WEbgl mode
  torus(70, 20); // Draw a torus with a radius and tube radius
  pop(); //restore drawing style setting and transformation
  
  //follow the mouse

  ellipse(mouseX+50,mouseY+50,10,10); // follows the mouse, 10px dia
}
