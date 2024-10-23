// Índice inicial del formulario actual 
let currentIndex = 0;

// Array de objetos que contiene los identificadores de los formularios y sus botones correspondientes
const formularios = [
  {
    id: "Fieldset_1",
    idButton: "button_1",
    idBackButton: null,
  },
  {
    id: "Fieldset_2",
    idButton: "button_2",
    idBackButton: "backButton_2",
  },
  {
    id: "Fieldset_3",
    idButton: "button_3",
    idBackButton: "backButton_3",
  },
  {
    id: "Fieldset_4",
    idButton: "button_4",
    idBackButton: "backButton_4",
  },
  {
    id: "Fieldset_5",
    idButton: "button_5",
    idBackButton: "backButton_5",
  },
  {
    id: "Fieldset_6",
    idButton: null,
    idBackButton: "backButton_6",
  }
];

// Array de objetos que manda una id al pulsar el botón submit para que al ser recibida de un listado de películas.
const GENEROS = [
  { id: 28, name: "Acción" },
  { id: 12, name: "Aventura" },
  { id: 16, name: "Animación" },
  { id: 35, name: "Comedia" },
  { id: 80, name: "Crimen" },
  { id: 99, name: "Documental" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Familia" },
  { id: 14, name: "Fantasía" },
  { id: 36, name: "Historia" },
  { id: 27, name: "Terror" },
  { id: 10402, name: "Música" },
  { id: 9648, name: "Misterio" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Ciencia ficción" },
  { id: 10770, name: "Película de TV" },
  { id: 53, name: "Suspense" },
  { id: 10752, name: "Bélica" },
  { id: 37, name: "Western" },
];

// Ocultar todos los fieldsets menos el primero al cargar la página
formularios.forEach((formulario, index) => {
  const fieldset = document.getElementById(formulario.id);
  if (index !== 0) {
    fieldset.style.display = 'none'; // Oculta los fieldsets excepto el primero
  }
});

// Validación de los campos obligatorios
function validarCampoRequerido(formularioId) {
  let valido = true;

  if (formularioId === "Fieldset_1") {
    const respuesta = document.querySelector('input[name="pregunta1"]:checked');
    if (!respuesta) {
      document.getElementById('error_1').style.display = 'inline';
      valido = false;
    } else {
      document.getElementById('error_1').style.display = 'none';
    }
  } else if (formularioId === "Fieldset_2") {
    const anio = document.getElementById('anio');
    if (!anio.value) {
      document.getElementById('error_2').style.display = 'inline';
      valido = false;
    } else {
      document.getElementById('error_2').style.display = 'none';
    }
  } else if (formularioId === "Fieldset_3") {
    const genero = document.querySelector('input[name="genero"]:checked');
  if (!genero) {
    document.getElementById('error_3').style.display = 'inline';
    valido = false;
  } else {
    document.getElementById('error_3').style.display = 'none';
   }
  }  
    else if (formularioId === "Fieldset_4") {
    const duracionMedia = document.getElementById('duracion-media');
    if (!duracionMedia.value) {
      document.getElementById('error_4').style.display = 'inline';
      valido = false;
    } else {
      document.getElementById('error_4').style.display = 'none';
    }
  } else if (formularioId === "Fieldset_5") {
    const provider = document.getElementById('provider');
    if (!provider.value) {
      document.getElementById('error_5').style.display = 'inline';
      valido = false;
    } else {
      document.getElementById('error_5').style.display = 'none';
    }
  }

  return valido;
}

// Itera sobre cada formulario dentro del array 'formularios'
formularios.forEach((formulario, index) => {
  // Obtiene el botón asociado a cada formulario por su ID
  if (formulario.idButton) {
    const button = document.getElementById(formulario.idButton);

    // Asigna un evento de clic al botón
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Verificar si el campo requerido está completado
      if (!validarCampoRequerido(formulario.id)) {
        return;  // Si el campo no es válido, no avanzamos al siguiente formulario
      }

      document.getElementById(formularios[currentIndex].id).style.display = 'none';

      // Verifica si el índice actual es menor que el total de formularios menos uno
      if (currentIndex < formularios.length - 1) {
        currentIndex++;  // Si es así, incrementa el índice para pasar al siguiente formulario
      }

      // Muestra el siguiente fieldset
      document.getElementById(formularios[currentIndex].id).style.display = 'block';
    });
  }

  // Función para los botones "Atrás"
  if (formulario.idBackButton) {
    const backButton = document.getElementById(formulario.idBackButton);

    backButton.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById(formularios[currentIndex].id).style.display = 'none';

      // Verifica si el índice actual es superior a uno
      if (currentIndex > 0) {
        currentIndex--;  // Si es así, disminuye el índice para pasar al anterior formulario
      }

      // Muestra el anterior fieldset
      document.getElementById(formularios[currentIndex].id).style.display = 'block';
    });
  }
});

// Función para mostrar los géneros
function showGenres(generos) {
  const optionsParent = document.getElementsByClassName("column-options")[0];

  generos.forEach(genero => {
    const generoLabel = document.createElement("label");
    const generoInput = document.createElement("input");

    generoLabel.innerText = genero.name;
    generoLabel.appendChild(generoInput);

    generoInput.type = "checkbox";
    generoInput.name = "genero";
    generoInput.value = genero.id;

    optionsParent.appendChild(generoLabel);
  });
}

showGenres(GENEROS);
