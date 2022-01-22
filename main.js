var mouseevent="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="purple";
width=2;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
width=document.getElementById("width").value;
radius=document.getElementById("radius").value;
mouseevent="mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
 current_position_of_x=e.clientX-canvas.offsetLeft;
 current_position_of_y=e.clientY-canvas.offsetTop;
 if(mouseevent=="mousedown"){
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width;
     ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2*Math.PI);
     ctx.stroke();
 }
}
function clearCanvas(){
   ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}

