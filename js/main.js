i = 0 ;
     imax = document.images.length - 1 ;
     setTimeout(next, 2000) ;

     function next()
     {
     document.images[i].style.display = "none" ;
     if ( i < imax )
          i++;
     else
          i=0;
     document.images[i].style.display = "block";
     setTimeout(next, 2000) ;
     }
