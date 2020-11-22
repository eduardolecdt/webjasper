// Cookie Aviso

(function (){

  // Internal Variables

  const __buttonFecharCookie = document.querySelector('button#fechar_aviso_cookie')
  const __divCookie = document.querySelector('div.cookie')

  // Methods

  function habilitarCarregamentoDivCookie () {
    window.addEventListener('load', () => {
      if (localStorage.getItem('cookie')) return

      __divCookie.classList.add('mostrar')
    })
  }

  function habilitarBotaoFecharCookie () {
    __buttonFecharCookie.addEventListener('click', () => {
      localStorage.setItem('cookie', true)
      __divCookie.classList.remove('mostrar')
    })
  }

  // Inicio

  habilitarCarregamentoDivCookie()
  habilitarBotaoFecharCookie()

}())
