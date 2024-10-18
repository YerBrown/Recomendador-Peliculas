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
        idButton: "button_6", 
        idBackButton: "backButton_6",   
    }
];

// Array de objetos que manda una id al pulsar el boton submit para que al ser recibida de un listado de peliculas.
const GENEROS = [
    {
      id: 28,
      name: "Acción",
    },
    {
      id: 12,
      name: "Aventura",
    },
    {
      id: 16,
      name: "Animación",
    },
    {
      id: 35,
      name: "Comedia",
    },
    {
      id: 80,
      name: "Crimen",
    },
    {
      id: 99,
      name: "Documental",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Familia",
    },
    {
      id: 14,
      name: "Fantasía",
    },
    {
      id: 36,
      name: "Historia",
    },
    {
      id: 27,
      name: "Terror",
    },
    {
      id: 10402,
      name: "Música",
    },
    {
      id: 9648,
      name: "Misterio",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Ciencia ficción",
    },
    {
      id: 10770,
      name: "Película de TV",
    },
    {
      id: 53,
      name: "Suspense",
    },
    {
      id: 10752,
      name: "Bélica",
    },
    {
      id: 37,
      name: "Western",
    },
  ];


// Ocultar todos los fieldsets menos el primero al cargar la página
 formularios.forEach((formulario, index) => {
     const fieldset = document.getElementById(formulario.id);
     if (index !== 0) {
         fieldset.style.display = 'none'; // Oculta los fieldsets excepto el primero
     }
 });

 // Itera sobre cada formulario dentro del array 'formularios'
 formularios.forEach((formulario, index) => {
     // Obtiene el botón asociado a cada formulario por su ID
     const button = document.getElementById(formulario.idButton);

     // Asigna un evento de clic al botón
     button.addEventListener("click", (e) => {
         e.preventDefault();
         document.getElementById(formularios[currentIndex].id).style.display = 'none';

        // Verifica si el índice actual es menor que el total de formularios menos uno
        if (currentIndex < formularios.length - 1) {
            currentIndex++;  // Si es así, incrementa el índice para pasar al siguiente formulario
        } 

        // Muestra el siguiente fieldset
        document.getElementById(formularios[currentIndex].id).style.display = 'block';
    });
     // Obtiene el botón asociado a cada formulario por su ID
     
     //_____________________________________________________________________//
     if (formulario.idBackButton){
     const backButton = document.getElementById(formulario.idBackButton);

     // Asigna un evento de clic al botón
     backButton.addEventListener("click", (e) => {
         e.preventDefault();
         document.getElementById(formularios[currentIndex].id).style.display = 'none';

        // Verifica si el índice actual es menor que el total de formularios menos uno
        if (currentIndex > 0) {
            currentIndex--;  // Si es así, disminuye el índice para pasar al anterior formulario
        } 

        // Muestra el siguiente fieldset
        document.getElementById(formularios[currentIndex].id).style.display = 'block';
    });
}
});

