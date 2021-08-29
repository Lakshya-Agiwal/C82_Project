var canvas =document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
color="red";
r=20;
w=5;
var mouse_event = "";
var last_position_x = 0;
var last_position_y = 0;

canvas.addEventListener("mousedown",mymousedown);
 function mymousedown(e)
{
   mouse_event="mousedown";
    color=document.getElementById("c_input").value;
    r=document.getElementById("r_input").value;
    w=document.getElementById("w_input").value;
   
}
canvas.addEventListener("mouseup",mymouseup);
 function mymouseup(e)
{
   mouse_event="mouseup";
   
   
}
canvas.addEventListener("mouseleave",mymouseleave);
 function mymouseleave(e)
{
   mouse_event="mouseleave";
   
   
}
canvas.addEventListener("mousemove",mymousemove);
 function mymousemove(e)
{
   current_Position_Of_X=e.clientX-canvas.offsetLeft;
   current_Position_Of_Y=e.clientY-canvas.offsetTop;
   if (mouse_event=="mousedown" )
   {
       ctx.beginPath();
       ctx.strokeStyle= color;
       ctx.lineWidth=w;
       ctx.arc(current_Position_Of_X,current_Position_Of_Y,r,0,360);
      
       ctx.stroke();
       
   }
   
   
}
function clear_area()
   {
     ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
   }

