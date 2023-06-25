function typeTextFn() {
  const titulo = document.querySelector("p");

  function digitando(element) {
    const array = element.innerHTML.split("");
    element.innerHTML = "";

    array.forEach((letter, i) => {
      setTimeout(() => {
        element.innerHTML += letter;
      }, 100 * i);
    });
  }

  digitando(titulo);
}

typeTextFn();