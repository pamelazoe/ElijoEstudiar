pmb_im.services.factory('ModalService', [ '$ionicModal', function($ionicModal) {

  var modalOBJ = {};
  /**
  * Función para abrir modal html
  */
  modalOBJ.openModal = function(style, content){
    var modalContent = document.getElementById('modal-page-content');
    //Clean classes and nodes
    var childs = modalContent.children;
    for (i = 0; i <= childs.length - 1; i++) {
      childs[i].style.display = "none";
    }
    //Realizamos modificaciones antes para el resize del mapa
    modalContent.className = "inside_rectangle";
    modalContent.classList.add(style);
    modalContent.appendChild(
      document.getElementById(content)
    );
    if ( style == "modal-map") {
      document.getElementById("ubicacion").style.display="block";
    }
    if ( style == "buscando") {
      document.getElementById('loading').style.display="block";
    }
    document.getElementById(content).style.display="block";
    document.getElementById("modal-page").style.display="block";
  }
  /**
  * Función para activar miniloading a la derecha de inputs
  */
  modalOBJ.activateLoading = function(container, style) {
    var cont = document.getElementById( container );
    var loading = document.getElementById("loading-mini");
    if ( loading !== null ){
      loading.className = style;
      loading.style.display="block";
    }
    else {
      var loading = document.createElement("div");
      loading.id = "loading-mini";
      loading.innerHTML = '<img src="img/small_loading1.gif" alt="Loading">';
    }
    cont.parentNode.insertBefore( loading, cont.nextSibling );
  }
  /*$scope.go_to_map = function(){
    $state.go("app.map");
  }*/
  return modalOBJ;

}]);
