// variables

const divVideoValidade = document.querySelector('.video.validade')
const videoValidade = document.querySelector('.video.validade video')

const iconeValidade = document.querySelector('.video.validade img.mostrar')
const playValidade = document.querySelector('.video.validade img.play')
const pauseValidade = document.querySelector('.video.validade img.pause')

const divVideoPlanograma = document.querySelector('.video.planograma')
const videoPlanograma = document.querySelector('.video.planograma video')

const iconePlanograma = document.querySelector('.video.planograma img.mostrar')
const playPlanograma = document.querySelector('.video.planograma img.play')
const pausePlanograma = document.querySelector('.video.planograma img.pause')

// validade

videoValidade.onmouseover = function () {
  divVideoValidade.classList.add('aparecer')
}

videoValidade.onmouseout = function () {
  divVideoValidade.classList.remove('aparecer')
}

playValidade.onmouseover = function () {
  divVideoValidade.classList.add('aparecer')
}

pauseValidade.onmouseover = function () {
  divVideoValidade.classList.add('aparecer')
}

videoValidade.onclick = function () {
  divVideoValidade.classList.remove('aparecer')
}

videoValidade.onclick = function () {
  divVideoValidade.classList.add('aparecer')
}

playValidade.onclick = function () {
  playValidade.classList.add('ocultar')
  playValidade.classList.remove('mostrar')
  pauseValidade.classList.remove('ocultar')
  pauseValidade.classList.add('mostrar')
  videoValidade.play()
}

pauseValidade.onclick = function () {
  pauseValidade.classList.add('ocultar')
  pauseValidade.classList.remove('mostrar')
  playValidade.classList.remove('ocultar')
  playValidade.classList.add('mostrar')
  videoValidade.pause()
}

// planograma

videoPlanograma.onmouseover = function () {
  divVideoPlanograma.classList.add('aparecer')
}

videoPlanograma.onmouseout = function () {
  divVideoPlanograma.classList.remove('aparecer')
}

playPlanograma.onmouseover = function () {
  divVideoPlanograma.classList.add('aparecer')
}

pausePlanograma.onmouseover = function () {
  divVideoPlanograma.classList.add('aparecer')
}

videoPlanograma.onclick = function () {
  divVideoPlanograma.classList.remove('aparecer')
}

videoPlanograma.onclick = function () {
  divVideoPlanograma.classList.add('aparecer')
}

playPlanograma.onclick = function () {
  playPlanograma.classList.add('ocultar')
  playPlanograma.classList.remove('mostrar')
  pausePlanograma.classList.remove('ocultar')
  pausePlanograma.classList.add('mostrar')
  videoPlanograma.play()
}

pausePlanograma.onclick = function () {
  pausePlanograma.classList.add('ocultar')
  pausePlanograma.classList.remove('mostrar')
  playPlanograma.classList.remove('ocultar')
  playPlanograma.classList.add('mostrar')
  videoPlanograma.pause()
}
