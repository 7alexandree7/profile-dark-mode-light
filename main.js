function toggleMode() {  // função q sera executado ao clicar no butão switch
    
    const html = document.documentElement // acessar o documento html da pagina
  
    html.classList.toggle("light")  // Faz a verificação automatica se a classe light esta ativa ou n
                                    // se tiver ativa, ao clicar no botão ela remove.
                                    // se não estiver ativa, ela adicionar a classe light no HTML.

// Pegar a tag IMG
    const imagem = window.document.querySelector("#profile img")


// Sunstituir a imagem
    if(html.classList.contains("light")) {

// se estiver com o tema light, adicionar a imagem light
        imagem.setAttribute("src", "./assets/e4aec18c62a76d7e054e104c2914daf0_preview_rev_1.png")
   }

    else {
//se estiver sem o tema light, adicionar a imagem escura
         imagem.setAttribute("src", "./assets/GioC.png")
   }




}