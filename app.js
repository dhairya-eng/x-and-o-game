

document.addEventListener("keypress",function(event){
makechange(event.key); 
});

function makechange(key){
switch(key){
  case "1":
    var num= Math.floor(Math.random()*2)+1;
if(num===1){
 document.getElementById("box1").innerHTML="X";
}else if(num===2){
 document.getElementById("box1").innerHTML="O";
}else{
    return 0;
}
break;
case "2":
  var num= Math.floor(Math.random()*2)+1;
  if(num===1){
   document.getElementById("box2").innerHTML="X";
  }else if(num===2){
   document.getElementById("box2").innerHTML="O";
  }else{
      return 0;
  } 
  break;
  case "3":
    var num= Math.floor(Math.random()*2)+1;
    if(num===1){
     document.getElementById("box3").innerHTML="X";
    }else if(num===2){
     document.getElementById("box3").innerHTML="O";
    }else{
        return 0;
    } 
    break;
  case "4":
  var num= Math.floor(Math.random()*2)+1;
  if(num===1){
   document.getElementById("box4").innerHTML="X";
  }else if(num===2){
   document.getElementById("box4").innerHTML="O";
  }else{
      return 0;
  } 
  break;
  case "5":
  var num= Math.floor(Math.random()*2)+1;
  if(num===1){
   document.getElementById("box5").innerHTML="X";
  }else if(num===2){
   document.getElementById("box5").innerHTML="O";
  }else{
      return 0;
  } 
  break;
  case "6":
  var num= Math.floor(Math.random()*2)+1;
  if(num===1){
   document.getElementById("box6").innerHTML="X";
  }else if(num===2){
   document.getElementById("box6").innerHTML="O";
  }else{
      return 0;
  } 
  break;
  case "7":
  var num= Math.floor(Math.random()*2)+1;
  if(num===1){
   document.getElementById("box7").innerHTML="X";
  }else if(num===2){
   document.getElementById("box7").innerHTML="O";
  }else{
      return 0;
  } 
  break;
  case "8":
  var num= Math.floor(Math.random()*2)+1;
  if(num===1){
   document.getElementById("box8").innerHTML="X";
  }else if(num===2){
   document.getElementById("box8").innerHTML="O";
  }else{
      return 0;
  } 
  break;
  case "9":
  var num= Math.floor(Math.random()*2)+1;
  if(num===1){
   document.getElementById("box9").innerHTML="X";
  }else if(num===2){
   document.getElementById("box9").innerHTML="O";
  }else{
      return 0;
  } 
  break;
}
}