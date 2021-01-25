var mama,mamaImage;
var mami,mamiImage;
var MamaMamiImage,MamaMami;
var mamamamiImage,mamamami;
var bgImage;
var heart,heartImage;
var happyAnne,happyAnneImage;
var heart2,heart2Image;
var heart3,heart3Image;
var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,u,v,w,x,y,z;
var aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm,nn,oo,pp,qq,rr,ss,tt,uu,vv,ww,xx,yy,zz;
var PLAY = 1;
var END = 0;
var gameState = 1;
var blockGroup;

function preload(){
  heartImage = loadImage("heart.png");
  mamaImage = loadImage("Mama.png");
  mamiImage = loadImage("Mamiji.png");
  bgImage = loadImage("bg.jpg");
  MamaMamiImage = loadImage("Mama&Mami.jpg");
  mamamamiImage = loadImage("mamamami.jpg");
  happyAnneImage = loadImage("HappyAnne.png");
  heart2Image = loadImage("heart2.png");
  heart3Image = loadImage("heart3.png");
}

function setup() {
  createCanvas(600, 600);
  
  // fill("brown");
  a = createSprite(310,75,390,10);
  //a.addImage(brickImage);
  b = createSprite(120,333,10,450);
  //b.addImage(brickImage);
  c = createSprite(160,100,10,40);
  //c.addImage(brickImage);
  d = createSprite(500,300,10,450);
  //d.addImage(brickImage);
  e = createSprite(140,160,40,10);
  //e.addImage(brickImage);
  f = createSprite(200,120,10,90);
  //f.addImage(brickImage);
  g = createSprite(160,200,90,10);
  //g.addImage(brickImage);
  h = createSprite(310,553,390,10);
  //h.addImage(brickImage);
  i = createSprite(165,230,10,60);
  //i.addImage(brickImage);
  j = createSprite(255,120,40,10);
  //j.addImage(brickImage);
  k = createSprite(240,165,10,80);
  //k.addImage(brickImage);
  l = createSprite(270,165,10,80);
  //l.addImage(brickImage);
  m = createSprite(147,290,45,10);
  //m.addImage(brickImage);
  n = createSprite(350,165,70,10);
  //n.addImage(brickImage);
  o = createSprite(350,140,10,60);
  //o.addImage(brickImage);
  p = createSprite(350,200,100,10);
  //p.addImage(brickImage);
  q = createSprite(450,110,10,80);
  //q.addImage(brickImage);
  r = createSprite(420,115,50,10);
  //r.addImage(brickImage);
  s = createSprite(400,220,10,50);
  //s.addImage(brickImage);
  t = createSprite(380,240,50,10);
  //t.addImage(brickImage);
  u = createSprite(260,240,110,10);
  //u.addImage(brickImage);
  v = createSprite(210,310,10,80);
  //v.addImage(brickImage);
  w = createSprite(450,215,10,80);
  //w.addImage(brickImage);
  x = createSprite(145,510,40,10);
  //x.addImage(brickImage);
  y = createSprite(180,320,50,10);
  //y.addImage(brickImage);
  z = createSprite(150,350,10,70);
  //z.addImage(brickImage);
  aa = createSprite(190,380,80,10);
  bb = createSprite(160,460,10,95);
  cc = createSprite(200,465,10,105);
  dd = createSprite(245,465,80,10);
  ee = createSprite(280,275,80,10);
  ff = createSprite(245,310,10,80);
  gg = createSprite(295,300,50,10);
  hh = createSprite(270,322.5,10,55);
  ii = createSprite(250,417.5,90,10);
  jj = createSprite(340,465,10,100);
  kk = createSprite(300,512.5,90,10);
  ll = createSprite(350,310,10,80);
  mm = createSprite(350,345,100,10);
  nn = createSprite(440,282.5,110,10);
  oo = createSprite(385,295,10,35);
  pp = createSprite(350,380,110,10);
  qq = createSprite(450,325,10,80);
  rr = createSprite(420,420,70,10);
  ss = createSprite(385,465,10,100);
  tt = createSprite(450,465,10,100);
  uu = createSprite(399,510,35,10);
  vv = createSprite(430,460,35,10);
  
  mama = createSprite(35,60);
  mama.addImage(mamaImage);
  mama.scale = 0.6;

  mami = createSprite(550,490);
  mami.addImage(mamiImage);
  mami.scale = 0.3;
  mami.setCollider("rectangle",50,50)
  
  heart = createSprite(106,93,20,20);
  heart.addImage(heartImage);
  heart.scale = 0.09;
  
  MamaMami = createSprite(175,125);
  MamaMami.addImage(MamaMamiImage);
  MamaMami.scale = 0.4;
  
  happyAnne = createSprite(300,300);
  happyAnne.addImage(happyAnneImage);
  happyAnne.scale = 0.5;
  
  mamamami = createSprite(415,470);
  mamamami.addImage(mamamamiImage);
  mamamami.scale = 0.3;
  
  heart2 = createSprite(125,450);
  heart2.addImage(heart2Image);
  heart2.scale = 0.4;
  
  heart3 = createSprite(450,120);
  heart3.addImage(heart3Image);
  heart3.scale = 0.4;
  
  // blockGroup = new Group (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm,nn,oo,pp,qq,rr,ss,tt,uu,vv);

}

function draw(){
  background(bgImage);
  
  if(gameState === 1){
    heart2.visible = false;
    heart3.visible = false;
    mamamami.visible = false;
    MamaMami.visible = false;
    happyAnne.visible = false;
    
    if(keyDown("up")){
  console.log(heart.position.y);
  heart.position.y -=3;
}

if(keyDown("down")){
  console.log(heart.position.y);
  heart.position.y +=3;
}

if(keyDown("right")){
  console.log(heart.position.x);
  heart.position.x +=3;
}

if(keyDown("left")){
  console.log(heart.position.x);
  heart.position.x -=3;
}
  
  heart.collide(a);
  heart.collide(b);
  heart.collide(c);
  heart.collide(d);
  heart.collide(e);
  heart.collide(f);
  heart.collide(g);
  heart.collide(h);
  heart.collide(i);
  heart.collide(j);
  heart.collide(k);
  heart.collide(l);
  heart.collide(m);
  heart.collide(n);
  heart.collide(o);
  heart.collide(p);
  heart.collide(q);
  heart.collide(r);
  heart.collide(s);
  heart.collide(t);
  heart.collide(u);
  heart.collide(v)
  heart.collide(w);
  heart.collide(x);
  heart.collide(y);
  heart.collide(z);
  heart.collide(aa);
  heart.collide(bb);
  heart.collide(cc);
  heart.collide(dd);
  heart.collide(ee);
  heart.collide(ff);
  heart.collide(gg);
  heart.collide(hh);
  heart.collide(ii);
  heart.collide(jj);
  heart.collide(kk);
  heart.collide(ll);
  heart.collide(mm);
  heart.collide(nn);
  heart.collide(oo);
  heart.collide(pp);
  heart.collide(qq);
  heart.collide(rr);
  heart.collide(ss);
  heart.collide(tt);
  heart.collide(uu);
  heart.collide(vv);
    
  textSize(40);
  noFill();
  stroke("red");
  strokeWeight(1);
  text("THE EASIEST GAME",110,50);

  textSize(20);
  fill("red");
  noStroke();
  strokeWeight(3);
  text("Complete the game to see the next surprise!!!",50,590);

  fill("magenta");
  stroke("darkmagenta");
  strokeWeight(1.5);
  textSize(20);
  text("PRESS:",25,300);

  fill("darkmagenta");
  textSize(10);
  noStroke();
  text("UP_arrow to move",10,320);
  text("UP",50,340);
  text("DOWN_arrow to move",5,360);
  text("DOWN",50,380)
  text("RIGHT_arrow to move",5,400);
  text("RIGHT",50,420);
  text("LEFT_arrow to move",5,440);
  text("LEFT",50,460);
    
    if(heart.isTouching(mami)){
      gameState = 0;
    }
  }
  
  else if(gameState === 0){
    heart2.visible = true;
    heart3.visible = true;
    mamamami.visible = true;
    MamaMami.visible = true;
    happyAnne.visible = true;
    mami.visible = false;
    mama.visible = false;
    heart.visible = false;
    a.visible = false;
    b.visible = false;
    c.visible = false;
    d.visible = false;
    e.visible = false;
    f.visible = false;
    g.visible = false;
    h.visible = false;
    i.visible = false;
    j.visible = false;
    k.visible = false;
    l.visible = false;
    m.visible = false;
    n.visible = false;
    o.visible = false;
    p.visible = false;
    q.visible = false;
    r.visible = false;
    s.visible = false;
    t.visible = false;
    u.visible = false;
    v.visible = false;
    w.visible = false;
    x.visible = false;
    y.visible = false;
    z.visible = false;
    aa.visible = false;
    bb.visible = false;
    cc.visible = false;
    dd.visible = false;
    ee.visible = false;
    ff.visible = false;
    gg.visible = false;
    hh.visible = false;
    ii.visible = false;
    jj.visible = false;
    kk.visible = false;
    ll.visible = false;
    mm.visible = false;
    nn.visible = false;
    oo.visible = false;
    pp.visible = false;
    qq.visible = false;
    rr.visible = false;
    ss.visible = false;
    tt.visible = false;
    uu.visible = false;
    vv.visible = false;
  }
  
  
  drawSprites();
  
  
}