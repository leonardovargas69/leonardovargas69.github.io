//apuntes de color, por defecto funciona con rgb y 8 bits. valores de color entre 0 y 255
// 2-> grayscale + alpha , donde 0 es transparencia
// 3-> rgb, donde r es red , g es green, b es blue,
// 4-> rgb + alpha
  
function setup() {
  createCanvas(windowWidth, windowHeight);//tamaño ventana
  //background(random(255),random(255),random(255));//pintar el fondo verde
  

}

function draw() {
  //aqui dibujamos una elipse
  //posy, posx, width, height
  //definir ancho en pixel en bordes,strokeWeight
  //definir color del borde,stroke
  //definir color del relleno, fill
  //iteracion
  //for(inicio;condicion;refresco)

  
  background(random(255),random(255),random(255))
  strokeWeight(5);
  stroke(200,0,0);
  fill(random(255),random(255),random(255))
  ellipse(400,300,500);
  
  strokeWeight(9);
  stroke(0,0,255)
  fill(random(255),random(255),random(255))
  ellipse(400,300,250);
  
  strokeWeight(3)
  fill(random(255),random(255),random(255))
  rect(150,150,200,200);
  fill(random(255),random(255),random(255))
  rect(160,160,180,180);
  //console.log(X), imprime en la consola el valor x
  
  strokeWeight(3)
  fill(0,0,0)
 textSize(32);
text("favor no mirar mas de 30 segundos puede provocar, una epilepsia no deseada", 120,30);
  
}

