function aumentarLikes() {
    const contador = document.getElementById("like-count");
    let texto = contador.textContent;          // ejemplo: "3 like(s)"
    let numero = parseInt(texto);              // obtiene el número
    numero++;                                  // suma 1
    contador.textContent = `${numero} like(s)`; // actualiza el texto
}