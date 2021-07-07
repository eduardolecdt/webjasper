// Drag Drop

(function () {

  // variaveis
  function executarDragDrop() {
    document.addEventListener('dragstart', (evento) => evento.preventDefault(), false)
    document.addEventListener('drop', (evento) => evento.preventDefault(), false)
  }

  // iniciar
  executarDragDrop()

}())
