i = 0 ;
     imax = document.images.length - 1 ;
     setTimeout(suivante, 2000) ;

     function suivante()
     {
     document.images[i].style.display = "none" ;
     if ( i < imax )
          i++;
     else
          i=0;
     document.images[i].style.display = "block";
     setTimeout(suivante, 2000) ;
     }
