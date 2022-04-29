document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
       //alert('No F-12');
        return false;
    }
}
document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        //alert('No F-keys');
        return false;
    }else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
    return false;
    }
}
document.onkeydown = function (event) {
   event = (event || window.event);
  
   if (event.keyCode == 123) {
        return false;
   } 
  
   if(event.ctrlKey && event.shiftKey && event.keyCode == 'I'.charCodeAt(0)) {
          return false;
   }
  
   if(event.ctrlKey && event.shiftKey && event.keyCode == 'C'.charCodeAt(0)) {
          return false;
   }
  
   if(event.ctrlKey && event.shiftKey && event.keyCode == 'J'.charCodeAt(0)) {
         return false;
   }
  
   if(event.ctrlKey && event.keyCode == 'U'.charCodeAt(0)) {
        return false;
   }
}

