# Recomendador-Peliculas

## Resumen
Hemos creado una página web para recomendar películas en función de los gustos del usuario

## Funcionamiento
Al cargar la página rellenaremos un formulario con nuestras preferencias. En base a los resultados obtenidos mostraremos una película que encaje con los requisitos.
En la tarjeta mostrada tendremos información básica de la película. Podremos añadirla a favoritos, solicitar más información y ver el trailer de la película, así como información de dónde verla en plataformas de streaming. 
En caso de querer otra película podemos hacerlo, manteniendo los parámetros iniciales. También podremos volver a rellenar el formulario si queremos cambiar los parámetros de búsqueda. 

Tenemos una sección de favoritos donde se almacenarán las películas previamente añadidas. Esta página se almacenará en Local Storage. 

Para hacer funcionar la página es necesaria una Apikey. Primero, en la carpeta javascript creamos un archivo llamado "apiKey.js" y en el interior copiamos el ejemplo mostrado en el archivo "apiKey.js/example". Para conseguirla la key tenéis que hacer lo siguiente: 
Vamos a https://developer.themoviedb.org/docs/getting-started. 
Hay que registrarse en la página. 
Id a la sección API Reference. 
Una vez aquí, en el dashboard izquierdo seleccionamos Authentication. 
En esa sección copiamos el Acces Token y el API Key Auth y lo pegamos en el archivo "apiKey.js" creado al principio.


