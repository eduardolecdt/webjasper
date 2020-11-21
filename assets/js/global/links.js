// links

(function () {

  // variaveis
  function toExternalPage(url) {
    const a = document.createElement('a')
    a.rel = 'noopener noreferrer nofollow'
    a.target = '_blank'
    a.href = url
    a.click()
  }

  // metodos
  function redirecionarParaLogin() {
    const irParaLogin = '#para_login'

    window.addEventListener('click', (evento) => {
      if (!evento.target.matches(irParaLogin)) return

      const url = 'https://sistemas.webjasper.com.br/login'
      toExternalPage(url)
    })
  }

  function redirecionarParaWhatsapp() {
    const irParaWhatsapp = '#para_whatsapp'

    window.addEventListener('click', (evento) => {
      if (!evento.target.matches(irParaWhatsapp)) return

      const url = 'https://api.whatsapp.com/send?l=pt_pt&phone=5551992004580'
      toExternalPage(url)
    })
  }

  function redirecionarParaSistemaPlanograma() {
    const irParaPlanograma = '#para_planograma'

    window.addEventListener('click', (evento) => {
      if (!evento.target.matches(irParaPlanograma)) return

      const url = 'https://webjasper.com.br/sistema-planograma'
      toExternalPage(url)
    })
  }

  function redirecionarParaSistemaValidade() {
    const irParaValidade = '#para_validade'

    window.addEventListener('click', (evento) => {
      if (!evento.target.matches(irParaValidade)) return

      const url = 'https://webjasper.com.br/sistema-validade'
      toExternalPage(url)
    })
  }

  function redirecionarParaInicio() {
    const irParaInicio = '#para_inicio'

    window.addEventListener('click', (evento) => {
      if (!evento.target.matches(irParaInicio)) return

      const url = 'https://webjasper.com.br'
      toExternalPage(url)
    })
  }

  // iniciar
  redirecionarParaLogin()
  redirecionarParaWhatsapp()
  redirecionarParaSistemaPlanograma()
  redirecionarParaSistemaValidade()
  redirecionarParaInicio()

}())
