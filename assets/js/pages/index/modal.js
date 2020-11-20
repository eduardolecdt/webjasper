// variables

const modalValidade = document.querySelector('section.validade .modal')
const modalPlanograma = document.querySelector('section.planograma .modal')

const body = document.querySelector('body')

const abrirModalValidade = document.querySelector('section.validade .titulo .botoes .video_abrir')
const abrirModalPlanograma = document.querySelector('section.planograma .titulo .botoes .video_abrir')

const fecharModalValidade = document.querySelector('section.validade .modal button.fechar')
const fecharModalPlanograma = document.querySelector('section.planograma .modal button.fechar')

const videoValidadeReproduzindo = document.querySelector('.video.validade video')
const videoPlanogramaReproduzindo = document.querySelector('.video.planograma video')

const playValidadeModal = document.querySelector('.video.validade img.play')
const playPlanogramaModal = document.querySelector('.video.planograma img.play')
const pauseValidadeModal = document.querySelector('.video.validade img.pause')
const pausePlanogramaModal = document.querySelector('.video.planograma img.pause')

abrirModalValidade.onclick = function () {
  modalValidade.classList.add('mostrar')
  body.classList.add('modal_aberto')
}

fecharModalValidade.onclick = function () {
  modalValidade.classList.remove('mostrar')
  videoValidadeReproduzindo.pause()
  body.classList.remove('modal_aberto')
  playValidadeModal.classList.add('mostrar')
  playValidadeModal.classList.remove('ocultar')
  pauseValidadeModal.classList.add('ocultar')
  pauseValidadeModal.classList.remove('mostrar')
}

abrirModalPlanograma.onclick = function () {
  modalPlanograma.classList.add('mostrar')
  body.classList.add('modal_aberto')
}

fecharModalPlanograma.onclick = function () {
  modalPlanograma.classList.remove('mostrar')
  videoPlanogramaReproduzindo.pause()
  body.classList.remove('modal_aberto')
  playPlanogramaModal.classList.add('mostrar')
  playPlanogramaModal.classList.remove('ocultar')
  pausePlanogramaModal.classList.add('ocultar')
  pausePlanogramaModal.classList.remove('mostrar')
}
