// modal video

(function () {

  // variaveis
  const __modalVideoPlanograma = document.querySelector('section.planograma .modal')
  const __modalVideoValidade = document.querySelector('section.validade .modal')
  const __modalPoliticaPrivacidade = document.querySelector('footer .modal')
  const __body = document.querySelector('body')

  // metodos
  function botaoAbrirModalPlanograma() {
    const botaoAbrirModalPlanograma = document.querySelector('section.planograma button[name="abrir_modal_planograma"]')

    botaoAbrirModalPlanograma.addEventListener('click', () => {
      __modalVideoPlanograma.classList.add('mostrar')
      __body.classList.add('modal_aberto')
    })
  }

  function botaoAbrirModalValidade() {
    const botaoAbrirModalValidade = document.querySelector('section.validade button[name="abrir_modal_validade"]')

    botaoAbrirModalValidade.addEventListener('click', () => {
      __modalVideoValidade.classList.add('mostrar')
      __body.classList.add('modal_aberto')
    })
  }

  function botaoAbrirModalPoliticaPrivacidade() {
    const botaoAbrirModalPoliticaPrivacidade = document.querySelector('footer button[name="abrir_politica_privacidade"]')

    botaoAbrirModalPoliticaPrivacidade.addEventListener('click', () => {
      __modalPoliticaPrivacidade.classList.add('mostrar')
      __body.classList.add('modal_aberto')
    })
  }

  function fecharModalPoliticaPrivacidade() {
    window.addEventListener('click', (evento) => {
      const botaoFechar = 'div[name="modal_politica_privacidade"] button.fechar'
      if (!evento.target.matches(botaoFechar)) return

      __modalPoliticaPrivacidade.classList.remove('mostrar')
      __body.classList.remove('modal_aberto')
    })
  }

  // iniciar
  botaoAbrirModalPlanograma()
  botaoAbrirModalValidade()
  botaoAbrirModalPoliticaPrivacidade()
  fecharModalPoliticaPrivacidade()

}())
