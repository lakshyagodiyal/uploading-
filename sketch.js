var c1= createSprite(200,300,20,20);
c1.shapeColor="darkgray";

var c2= createSprite(180,320,20,20);
c2.shapeColor="darkgray";

var c3= createSprite(220,320,20,20);
c3.shapeColor="darkgray";

var c4= createSprite(160,340,20,20);
c4.shapeColor="darkgray";

var c5= createSprite(200,340,20,20);
c5.shapeColor="darkgray";

var c6= createSprite(240,340,20,20);
c6.shapeColor="darkgray";

var squariad = createSprite(196, 48,20,20);
squariad.shapeColor="white";


squariad.velocityX=4;
squariad.velocityY=9;

function draw() {
background("blue");
createEdgeSprites();
c1.bounceOff(edges);
c2.bounceOff(edges);
c3.bounceOff(edges);
c4.bounceOff(edges);
c5.bounceOff(edges);
c6.bounceOff(edges);
squariad.bounceOff(edges);

c1.bounce(squariad);
c1.bounce(c2);
c1.bounce(c3);
c1.bounce(c4);
c1.bounce(c5);
c1.bounce(c6);

c2.bounce(squariad);
c2.bounce(c1);
c2.bounce(c3);
c2.bounce(c4);
c2.bounce(c5);
c2.bounce(c6);


c3.bounce(squariad);
c3.bounce(c1);
c3.bounce(c2);
c3.bounce(c3);
c3.bounce(c3);
c3.bounce(c4);

c4.bounce(squariad);
c4.bounce(c1);
c4.bounce(c2);
c4.bounce(c3);
c4.bounce(c5);
c4.bounce(c6);

c5.bounce(squariad);
c5.bounce(c1);
c5.bounce(c2);
c5.bounce(c3);
c5.bounce(c4);
c5.bounce(c6);

c6.bounce(squariad);
c6.bounce(c1);
c6.bounce(c2);
c6.bounce(c3);
c6.bounce(c4);
c6.bounce(c5);


drawSprites();
  
}
