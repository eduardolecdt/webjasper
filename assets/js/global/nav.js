// Nav

(function () {

  // variaveis
  function executarNav() {
    const menu = document.querySelector('nav .menu')
    const abrirMenu = document.querySelector('nav img.abrir')
    const fecharMenu = document.querySelector('nav img.fechar')

    abrirMenu.addEventListener('click', () => {
      menu.classList.add('aparecer')
      menu.classList.remove('sumir')
      abrirMenu.classList.remove('mostrar')
      abrirMenu.classList.add('ocultar')
      fecharMenu.classList.remove('ocultar')
      fecharMenu.classList.add('mostrar')
    })

    fecharMenu.addEventListener('click', () => {
      menu.classList.add('sumir')
      menu.classList.remove('aparecer')
      abrirMenu.classList.remove('ocultar')
      abrirMenu.classList.add('mostrar')
      fecharMenu.classList.remove('mostrar')
      fecharMenu.classList.add('ocultar')
    })
  }

  // iniciar
  executarNav()

}())
