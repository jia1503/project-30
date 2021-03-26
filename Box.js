class Box {
  constructor(x, y, width, height) 
  {
   var boxNature = { 
    //'isStatic':false,
    'restitution':0.1,
            'friction':1.0,
            'density':1.5
 }
   this.body = Bodies.rectangle(x, y, width, height, boxNature);
  
   this.width = width;
   this.height = height;
   World.add(world,this.body);
   this.Visiblity = 255;
  
 }
 scores(){
  if(this.Visiblity<0  ){
    score = score+10;
  }

}
 display(){ 
   if(this.body.speed < 3){
           
             var angles = this.body.angle; 
             var pos = this.body.position;
             push();
            
              translate(pos.x,pos.y); 
              rotate(angles);
               rectMode(CENTER);
               rect(0, 0, this.width, this.height);
                pop();
              
            }else{
              World.remove(world,this.body);
              push ();
              this.Visiblity = this.Visiblity - 5;
              pop();
            }
          }
              
}


