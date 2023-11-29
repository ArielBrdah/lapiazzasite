/*** LOADER WEBPAGE ANIMATION */

document.addEventListener("DOMContentLoaded", function(event) { 
  
  
  
  document.querySelector(".loader").style.display = "none"
  document.querySelector(".website-wrapper").style.display = "block"
  
  

 /**  CHARGEMENT DES IMAGES POUR LA GALLERIE EN BAS **/
   
  var img = document.querySelectorAll('.card-container img')
  img.forEach( item => imgs.push(item.src.split('/').pop().split('.')[0]) ) 
  
  // CHARGEMENT DU TEXTE
  viewTxt.innerHTML = imgs[currentTxt]
  
 /** END CHARGEMENT DES IMAGES POUR LA GALLERIE EN BAS **/
  
  
  
  
  /*** DISPARITION DU TEXTE LORS DU SCROLL **/

var content = document.querySelector('#content')

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

var contentTop = getOffset(content).top

var contentDiviseur = contentTop/100

window.onscroll = function(){
  if(window.scrollY+1 < contentTop){
    document.querySelector('.dicton-italien').style.opacity = Math.abs((((window.scrollY+1)/contentDiviseur)/100)-1 )
  
  }
  if(window.scrollY > contentTop){
    document.querySelector('.dicton-italien').style.opacity = 0
  }
};

/*** FIN DISPARITION DU TEXTE LORS DU SCROLL **/
  
  
});
  
/*** END LOADER WEBPAGE ANIMATION */









/** HAMBURGER ANIMATION ON CLICK */

var hamburger = document.querySelector('.hamburger')
var hamburgerClicked = false
hamburger.addEventListener('click',function(){
  if(!hamburgerClicked){
  var trait = document.querySelectorAll('.trait')
  
  trait[1].setAttribute("width","0")
  trait[0].setAttribute("y","30")
  trait[2].setAttribute("y","30")
  
  trait[0].setAttribute("transform","rotate(45)")
  trait[2].setAttribute("transform","rotate(-45)")
  document.querySelector('#mobilemenu').style.zIndex = "1"
  document.querySelector('#mobilemenu').style.width = "100%"
  document.querySelector('#mobilemenu ul li a').style.width = "100%"
    
  hamburgerClicked  = !hamburgerClicked
  }else{
  var trait = document.querySelectorAll('.trait')
  
  trait[1].setAttribute("width","100")
  trait[0].setAttribute("y","0")
  trait[2].setAttribute("y","60")
  
  trait[0].setAttribute("transform","rotate(0)")
  trait[2].setAttribute("transform","rotate(0)")
      document.querySelector('#mobilemenu').style.width = "0%"
    document.querySelector('#mobilemenu ul li a').style.width = "0%"
  hamburgerClicked  = !hamburgerClicked
  }
  
})

/* END HAMBURGER ANIMATION ON CLICK ***/











/** ON SMARTPHONE: MENU CLIQUER -> SCROLL A LA SECTION + FERME LE MENU */

var clique = document.querySelectorAll('#mobilemenu ul li a')

clique.forEach(item => {
  item.addEventListener('click',function(){
    if(!hamburgerClicked){
  var trait = document.querySelectorAll('.trait')
  
  trait[1].setAttribute("width","0")
  trait[0].setAttribute("y","30")
  trait[2].setAttribute("y","30")
  
  trait[0].setAttribute("transform","rotate(45)")
  trait[2].setAttribute("transform","rotate(-45)")
  document.querySelector('#mobilemenu').style.zIndex = "1"
  document.querySelector('#mobilemenu').style.width = "100%"
  document.querySelector('#mobilemenu ul li a').style.width = "100%"
    
  hamburgerClicked  = !hamburgerClicked
  }else{
  var trait = document.querySelectorAll('.trait')
  
  trait[1].setAttribute("width","100")
  trait[0].setAttribute("y","0")
  trait[2].setAttribute("y","60")
  
  trait[0].setAttribute("transform","rotate(0)")
  trait[2].setAttribute("transform","rotate(0)")
      document.querySelector('#mobilemenu').style.width = "0%"
    document.querySelector('#mobilemenu ul li a').style.width = "0%"
  hamburgerClicked  = !hamburgerClicked
  }
  })
})

/** END ON SMARTPHONE: MENU CLIQUER -> SCROLL A LA SECTION + FERME LE MENU */
















/*** GALLERY ***/

// CONTROLLERS

    // ON TAP, ON CLICK
        
        // EXIT GALLERY
        var cardContainer = document.querySelectorAll(".card-container")
        
        // OPEN GALLERY
        var imgWrapper = document.querySelectorAll(".img-wrapper")
        var imgWrp = document.querySelectorAll(".img-wrapper img")
        var view = document.querySelector(".view")
        
        // EFFECT IMG SCALED WHEN OPEN GALLERY
        var cardImg = document.querySelectorAll(".view img")

    // ARROW
    var galleryNext = document.querySelector('.next')
    var galleryBack = document.querySelector('.previous')

    // CAROUSEL
    var viewContainer = document.querySelector(".view-container")


    // CURRENT TEXT 
    var viewTxt = document.querySelector(".view p")

    
// CURRENT IMAGE
var current = 0

// CURRENT TEXTE POS IN ARRAY
var currentTxt = 0

// ARRAYS OF TEXT FOR EACH IMAGE
var imgs = []


function viewport_convert(px = 0, b = true, vw = 0, vh = 0){
    if(px != 0){
        if(b || vw){
            return (100 * px / window.innerWidth);
        } else {
            return (100 * px / window.innerHeight);
        }
    } else if(vw != 0 && vh != 0){
        var w_h_arr = [];
        w_h_arr["width"] = Math.ceil((window.innerWidth * vw / 100));
        w_h_arr["height"] = Math.ceil((window.innerHeight * vh / 100));
        return w_h_arr;
    } else if(vw != 0){
        return Math.ceil((window.innerWidth * vw / 100));
    } else if(vh != 0){
        return Math.ceil((window.innerHeight * vh / 100));
    }
}








/** EVENT NEXT ***/
galleryNext.addEventListener("click",function(){
 
  // if the window resized, we are each time with relevant value
  
  // WIDTH of the container
  var maxPosItem = viewport_convert(parseInt(getComputedStyle(viewContainer).width))
  
  // ROUND the number to zero - ex: 401 -> 400, 302.125 -> 300
  maxPosItem = (Math.round((maxPosItem/10)) * 10)
  
  if( (-maxPosItem) < current-100 ){
    current -= 100
    currentTxt += 1
    viewContainer.style.left = current+"vw"
    viewTxt.innerHTML = imgs[currentTxt]
  }
  
})
/** END EVENT NEXT ***/




/** EVENT PREVIOUS ***/
galleryBack.addEventListener("click",function(){
 
  var maxPosItem = viewport_convert( parseInt(getComputedStyle(viewContainer).width) )
  maxPosItem = (Math.round((maxPosItem/10)) * 10)
  if( 0 >= current+100 ){
    current += 100
    currentTxt -= 1
    viewContainer.style.left = current+"vw"
    viewTxt.innerHTML = imgs[currentTxt]
  }
  
})

/** END EVENT PREVIOUS ***/






/*** EVENT EXIT GALLERY VIEW **/
cardContainer.forEach(item=>{
  item.addEventListener('click',function(){
    
    document.body.style.overflowY = "auto"
    
    view.style.display = "none"
    
    cardImg.forEach(itm => {
      itm.style.transform = "scale(0)"
    })
    
    
  })
})
/*** END EVENT EXIT GALLERY VIEW **/








var imgWrapperPos = 0






/*** EVENT OPEN GALLERY VIEW **/
imgWrapper.forEach(item =>{

  item.addEventListener('click',function(){
        
    
     document.body.style.overflowY = "hidden"

    
    /** DETECT THE POSITION OF THE ELEMENT IN THE GALLERY AND GO **/
  imgWrapperPos = imgs.indexOf(item.firstChild.nextSibling.src.split('/').pop().split('.')[0])
    
    currentTxt = imgWrapperPos
    
    current = -(imgWrapperPos * 100)
    
    /** END DETECT THE POSITION OF THE ELEMENT IN THE GALLERY AND GO **/
    
    
    /** SHOW THE ELEMENT CLICKED IN THE GALLERY **/
    
    viewContainer.style.left = current+"vw"
    viewTxt.innerHTML = imgs[currentTxt]
    
    /** END SHOW THE ELEMENT CLICKED IN THE GALLERY **/
    
    
    
    view.style.display = "flex"
    
    setTimeout(()=>{
      
        cardImg.forEach(itm => {

          itm.style.transform = "scale(0)"
          itm.style.transform = "scale(1.0)"

        })
    },50)
    
  })
})
/*** END EVENT OPEN GALLERY VIEW **/




/*** END GALLERY ***/










/*** AGRANDIR BAR DE MENU **/
window.addEventListener('scroll',function(){
  var header = document.querySelector('header')
  var homenav = document.querySelector('#homemenunav')
  var svgImg = document.querySelector('#homemenunav svg')
  
  if(window.scrollY > 0)
    {
      header.style.height = "86px"
      homenav.style.height = "86px"
      svgImg.style.height = "86px"
      
    }else{
      header.style.height = "106px"
      homenav.style.height = "106px"
      svgImg.style.height = "106px"
    }
})
/*** END AGRANDIR BAR DE MENU **/











/*** ACCUEIL PARALLAX **/

// controller
var imgAc = document.querySelector('.pic-wrapper')
var dictonAc = document.querySelector('.dicton-italien')



window.addEventListener('scroll',function(event){
  
  
  // hauteur de la photo
  accueilPicHeight = parseInt(getComputedStyle(imgAc).height)
  accueilDictonHeight = parseInt(getComputedStyle(dictonAc).height)

  
  if(window.scrollY < accueilPicHeight && window.scrollY > 0){
  
    imgAc.style.backgroundPosition = "50% -"+window.scrollY/7+"px"
    
  }
  
  if(window.scrollY < accueilPicHeight && window.scrollY > 0){

dictonAc.style.height = "calc(70vh - "+(window.scrollY/20)+"vh)" 
    
  }
  
  
})

/*** END ACCUEIL PARALLAX **/