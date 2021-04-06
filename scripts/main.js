console.log('hello world');

(function () {
  const MAIN_OBJ = {
    init: function () {
      console.log('load object...');

      this.eventHandlers();
    },

    eventHandlers: function () {
      document.querySelector('.hamburger-icon').addEventListener('click', function(){
        document.querySelector('.menu-container').classList.toggle('menu-open');
      });
    }
  }

  MAIN_OBJ.init();
})();