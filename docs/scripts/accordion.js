const dataAccordion = [{
    "title": "¿Se necesita alguna membresia para ver peliculas?",
  "desc": "Esto funciona como otros servicios de películas a nivel de web y la ventaja es que no se necesita de suscripción para ver películas."
},
{
    "title": "¿Tienen Contenidos nuevos?",
    "desc": "Por el momento una que otra película o serie, se estrena en nuestra página, por el momento no tenemos muchos estrenos. "
  },
  {
    "title": "¿Como es nuestro servicio?",
    "desc": "El servicio que prestamos es a base de otros servidores donde disponen de películas."

}];

(function (){
    let ACCORDION = {
        init: function (){
            let _self = this;
            //Llamamos las funciones
            this.insertData(_self);
            this.eventHandler(_self);
        },

        eventHandler:function(_self){
            let arrayRefs = document.querySelectorAll('.accordion-title');

            for (let x = 0; x < arrayRefs.length; x++) {
                arrayRefs[x].addEventListener('click', function(event){
                    console.log('event', event);
                    _self.showTab(event.target);
                });
            }
        },

        showTab: function(refItem){
            let activeTab = document.querySelector('.tab-active');

            if(activeTab){
                activeTab.classList.remove('tab-active');
            }

            console.log('show tab', refItem);
            refItem.parentElement.classList.toggle('tab-active');
        },

        insertData: function (_self) {
            dataAccordion.map(function (item, index){
                //console.log('item!!!!!', item);
                document.querySelector('.main-accordion-container').insertAdjacentHTML('beforeend', _self.tplAccordionItem(item));
            });
        },

        tplAccordionItem: function (item) {
            return(` <div class='accordion-item'>
            <p class='accordion-title'>${item.title}</p>
            <p class='accordion-desc'>${item.desc}</p>
            </div>`)},
        }

        ACCORDION.init();

})();