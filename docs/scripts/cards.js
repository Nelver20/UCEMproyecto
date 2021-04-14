console.log('cargando tarjetas')
const dataCards = [

    {
        "title": "JSuper Cool",
        "url_image":"https://static.noimg.net/movie/cover/original/bd9a3c190ab533e347369af6aa38ae21.jpg",
        "desc":"Con la esperanza de tener sexo antes de iniciar la universidad, Seth y Evan intentan comprar alcohol para un fiestón.",
        "cta":"Ver Peli",
        "link":"https://pelisplus.me/pelicula/super-cool/"
      },
    

      {
        "title": "Spider-man",
        "url_image":"https://static.noimg.net/movie/cover/original/25f6a58aa0daa484de67f54d1cc281c4.jpg",
        "desc":"Tras la culminación de 22 películas interconectadas, la cuarta entrega de la saga de Vengadores atraerá a las audiencias a presenciar el punto de inflexión de este viaje épico. ",
        "cta":"Ver Peli",
        "link":"https://cuevana3.io/13310/avengers-endgame"
      },


      {
        "title": "Spiderman 2",
        "url_image":"https://image.tmdb.org/t/p/w185_and_h278_bestv2/foJVlqwPUyvFEJTJqaPOnxKdqOj.jpg",
        "desc":"En el instituto con la persona a la que quiere, Gwen. Peter no ve el momento de graduarse.",
        "cta":"Ver Peli",
        "link":"https://cuevana3.io/3730/the-amazing-spider-man-2"
      },


      {
        "title": "Spider-Man: Lejos de Casa",
        "url_image":"https://static.noimg.net/movie/cover/original/af385cf7cfa7ad26d4c00b1afc9fec77.jpg",
        "desc":"No es necesario ser parte de un equipo, aunque no está de más un poco de ayuda.",
        "cta":"Ver Peli",
        "link":"https://pelisplus.me/pelicula/spider-man-lejos-de-casa/p004/"
      },


      {
        "title": "1917",
        "url_image":"https://static.noimg.net/movie/cover/original/ca878eea7d631af8a0208281b4161738.jpg",
        "desc":"En la Primera Guerra Mundial, dos jóvenes soldados británicos, Schofield (George MacKay) y Blake (Dean-Charles Chapman) reciben una misión aparentemente imposible.",
        "cta":"Ver Peli",
        "link":"https://pelisplus.me/pelicula/1917/p010/"
      },


      {
        "title": "Aquaman",
        "url_image":"https://image.tmdb.org/t/p/w185_and_h278_bestv2/czjwK6F3Db4rWyuETdCaZOO8chx.jpg",
        "desc":"Icono durante más de 70 años, Aquaman (Jason Momoa) es el Rey de los Siete Mares. Este reacio gobernante de Atlantis se encuentra atrapado entre los constantes estragos causados al mar. ",
        "cta":"Ver Peli",
        "link":"https://cuevana3.io/8107/aquaman-syi1x"
      },


];


(function () {
    let CARD = {
        init: function () {
        console.log('card module was loaded');
        let _self = this;
        
        // llamanos las funciones
        this.insertData(_self);
        //this.eventHandler(_self)
        },

eventHandler: function (_self) {
    let arrayRefs = document.querySelectorAll('.accordion-title');

    for (let x = 0; x < arrayRefs.length; x++) {
      arrayRefs[x].addEventListener('click', function(event){
        console.log('event', event);
        _self.showtab(event.target);
    });
    }//for
},//self



insertData: function (_self) {
    dataCards.map(function (item, index) {
        document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
    });
},

tplCardItem: function (item, index) {
  return(`<div class='card-item' id="card-number-${index}">
  <img src="${item.url_image}"/>
  <div class="card-info">
  <p class='card-title'>${item.title}</p> 
  <p class='card-desc'>${item.desc}</p>
  <a class='card-cta' target="blank" href="${item.link}">${item.cta}</a>
  </div>
  </div>`)},
    }//init

  CARD.init();
})();