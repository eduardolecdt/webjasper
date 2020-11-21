// modal video

(function () {

  // metodos
  function habilitarCliqueVideo() {
    const buscarVideo = 'div[name="modal_video"] .video video'

    window.addEventListener('click', (evento) => {
      const video = evento.target
      if (!video.matches(buscarVideo)) return

      if (video.paused) darPlayNoVideo(video)
      else darPauseNoVideo(video)
    })
  }

  function habilitarCliqueBotaoFechar() {
    const botaoFechar = 'div[name="modal_video"] button.fechar'
    const body = document.querySelector('body')

    window.addEventListener('click', (evento) => {
      if (!evento.target.matches(botaoFechar)) return

      const modal = evento.target.parentElement
      const video = modal.querySelector('.video video')

      video.pause()
      modal.classList.remove('mostrar')
      body.classList.remove('modal_aberto')
    })
  }

  // auxiliares

  function darPlayNoVideo(video) {
    const divVideo = video.parentElement

    video.play()
    divVideo.classList.add('reproduzindo')
    divVideo.classList.remove('pausado')
  }

  function darPauseNoVideo(video) {
    const divVideo = video.parentElement

    video.pause()
    divVideo.classList.add('pausado')
    divVideo.classList.remove('reproduzindo')
  }

  // iniciar
  habilitarCliqueVideo()
  habilitarCliqueBotaoFechar()

}())
