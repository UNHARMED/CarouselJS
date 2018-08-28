i = 0 ;
imax = document.images.length - 1 ;
var time = setInterval(next, 3000);


     function next()
     {
     document.images[i].style.display = "none" ;
     if ( i < imax ) {
          i++;
     }else {
          i=0;
          }
     document.images[i].style.display = "block";

     }

      function clickNext()
      {
        document.images[i].style.display = "none" ;
        if ( i < imax ){
             i++;
        }else {
             i=0;
          }
        document.images[i].style.display = "block";
        clearInterval(time);
        time = setInterval(next, 3000);
      }

      function clickLast()
      {
        document.images[i].style.display = "none" ;
        if ( i > 0 ){
             i--;
        }else {
             i=imax;
           }
        document.images[i].style.display = "block";
        clearInterval(time);
        time = setInterval(next, 3000);
      }
