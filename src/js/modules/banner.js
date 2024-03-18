export const banner = () => {

  try {
    const moduleBanner = document.getElementById('banner'); 
    //console.log(moduleBanner);
    if (moduleBanner !== null) {
  
/////////////////////////////////////

      document.addEventListener("DOMContentLoaded", function () { 
        const ctrlElem = document.getElementsByClassName('top__banner-base')[0];
        console.log(ctrlElem);
           
        let timer;
        //console.log(animSec);    
        timer = window.setInterval( function() {
            ctrlElem.classList.toggle('ctrlBanner');
        }, 200); 
        // сброс таймера:             
        window.setTimeout( function() {                   
          clearInterval(timer);
          ctrlElem.classList.remove('ctrlBanner');
        }, 2200);               
      }); 

    } // if (moduleBanner !== null)

  } // try

  catch(err) {
  //console.log(err.name, err.message);
  }

} // export
