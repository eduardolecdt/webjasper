// modal video

(function () {

  // variaveis
  const __modalVideoPlanograma = document.querySelector('section.planograma .modal')
  const __modalVideoValidade = document.querySelector('section.validade .modal')

  // metodos
  function botaoAbrirModalPlanograma() {
    const botaoAbrirModalPlanograma = document.querySelector('section.planograma button[name="abrir_modal_planograma"]')

    botaoAbrirModalPlanograma.addEventListener('click', () => {
      __modalVideoPlanograma.classList.add('mostrar')
    })
  }

  function botaoAbrirModalValidade() {
    const botaoAbrirModalValidade = document.querySelector('section.validade button[name="abrir_modal_validade"]')

    botaoAbrirModalValidade.addEventListener('click', () => {
      __modalVideoValidade.classList.add('mostrar')
    })
  }

  // iniciar
  botaoAbrirModalPlanograma()
  botaoAbrirModalValidade()

}())
