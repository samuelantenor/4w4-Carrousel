(function(){
  console.log('Début du carrousel')
  let bouton = document.querySelector(".carrousel__ouvrir")

   /* -------------------------------------------------------- Variable du carrousel */
   let carrousel  = document.querySelector(".carrousel")
    let carrousel__x = document.querySelector(".carrousel__x")
    let carrousel__figure = document.querySelector(".carrousel__figure")
    let carrousel__form = document.querySelector(".carrousel__form")
    let carrousel__prev = document.querySelector(".carrousel__prev");
    let carrousel__next = document.querySelector(".carrousel__next");
   /* -------------------------------------------------------- Variable de la galerie */
   let galerie = document.querySelector(".galerie")
    let galerie__img = galerie.querySelectorAll("img")
   // console.log("galerie__img: " + galerie__img.length)
   // console.log(carrousel.tagName)
   /* ------------------------------------------ positionnement de l'image active du carrousel */
   let index = 0
   let ancien_index = -1
   let position = 0 // permet d'indexer les image de la galerie et 
   let total_images = galerie__img.length;
   /* ----------------------------------------------------  ouvrir boîte modale */
   bouton.addEventListener('mousedown', function(){
    carrousel.classList.add('carrousel--activer')
    ajouter_img_dans_carrousel()
})

   /* ----------------------------------------------------  fermer boîte modale */
   carrousel__x.addEventListener('mousedown', function(){
    carrousel.classList.remove('carrousel--activer')
})
carrousel__prev.addEventListener('click', function(){
  index = (index - 1 + total_images) % total_images;
  afficher_image(index);
});
carrousel__next.addEventListener('click', function(){
  index = (index + 1) % total_images;
  afficher_image(index);
});
   
   
   
   /** 
    * ajouter_img_dans_carrousel
    * Ajouter l'ensemble des images de la galerie dans la boîte modale carrousel
    */
   function ajouter_img_dans_carrousel()
   {
    for (const elm of galerie__img) {
      elm.dataset.index = position
      elm.addEventListener('mousedown',function(){
          index = this.dataset.index
          afficher_image(index)
      })

      creation_img_carrousel(elm)
      creation_radio_carrousel()
  }
}

function creation_img_carrousel(elm){
  let img = document.createElement('img')
  img.src = elm.src
  img.classList.add('carrousel__img')
  carrousel__figure.appendChild(img)
   }
   /**
    * Création d'un radio-bouton
    */
   
   
   function  creation_radio_carrousel(){
    let rad = document.createElement('input')
    rad.setAttribute('type','radio')
    rad.setAttribute('name', 'carrousel__rad')
    rad.classList.add('carrousel__rad')
    rad.dataset.index = position
    position = position + 1
    carrousel__form.appendChild(rad)
    rad.addEventListener('mousedown', function(){
        index = this.dataset.index
        afficher_image(index)
    })
   }
   
   function afficher_image(index){
   
     if (ancien_index != -1){
      // carrousel__figure.children[ancien_index].style.opacity = 0  
      carrousel__figure.children[ancien_index].classList.remove('carrousel__img--activer')
      //carrousel__form.children[ancien_index].checked 
     }
     // carrousel__figure.children[index].style.opacity = 1
     carrousel__figure.children[index].classList.add('carrousel__img--activer')
     ancien_index = index
   }
   
   /*
   permet de vérifier si la classe « carrousel--activer » 
   se trouve dans la liste des classe carrousel
     carrousel.classList.contain('carrousel--activer')
   
     mdn classList.contain()
   
   */
   
   
   })()