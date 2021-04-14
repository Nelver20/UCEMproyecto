console.log('hello world');

(function () {
  const MAIN_OBJ = {
    init: function () {
      console.log('cargando javascript...');

      this.eventHandlers();
    },

    eventHandlers: function () {
      document.querySelector('.hamburger-icon').addEventListener('click', function(){
        document.querySelector('.menu-container').classList.toggle('menu-open');
      });

        document.querySelector('.sub-hamburger-icon').addEventListener('click', function(){
          document.querySelector('.sub-menu-container').classList.toggle('sub-menu-open');
        });


    }

  }

  MAIN_OBJ.init();
})();