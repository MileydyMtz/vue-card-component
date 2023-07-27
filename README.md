# Documentación del componente Card
## Descripción:
Este componente es una tarjeta genérica compuesta con una imagen, un título, un texto y un botón.

## Tecnologías usadas
A continuación, se enlistan las tecnologías y librerías utilizadas en el desarrollo de este componente:
* Vue 3
* Preprocesador SCSS
* Vue Test Utils
* Vitest
* Prettier
* ESLint

## Características del componente
### Props
El componente *Card* tiene cuatro propiedades:
* **image** (String) (Requerido): Enlace a la imagen que se mostrará en la parte superior de la tarjeta.
* **title** (String) (Requerido): Título de la tarjeta que se muestra debajo de la imagen.
* **text** (String) (Requerido): El texto de la tarjeta. Este texto se mostrará debajo del título.
* **maxLines** (Number) (Opcional): Cantidad máxima de líneas del texto que se mostrarán en la tarjeta. Por defecto es 3.

### Evento
* **more**: Evento que se emite cuando se hace clic en el botón de la tarjeta.

### Método
* **onClick()**: Método que se activa al hacer clic en el botón de la tarjeta. Este método emite el evento more.
 
### CSS
* Los estilos están definidos en la sección de <style> y usan la extensión .scss.
* Los estilos están "scoped", lo que significa que solo se aplicarán a este componente y no afectarán a otros componentes de la aplicación donde se reutilice.
* Se pueden modificar las variables globales definidas al inicio de la sección de *style*, las cuales cambian el color de la card y del botón, asi como también el color de las letras.

## Uso del componente
Para utilizar este componente, primero se debe descargar el archivo *TheCard.vue* que se encuentra dentro de *src/components* y agregarlo al proyecto donde se reutilizara. 
Posteriormente se debe importar y usarlo en la plantilla padre mediante la etiqueta *TheCard*. Asegúrese de pasar las propiedades *image*, *title*, *text* y *maxLines*, así como también el evento *more* emitido por el componente card cuando se hace click en el botón *Saber más*.

A continuación, un ejemplo:

```vue
<template>
<main>
    <TheCard 
        :image="cardData.image" 
        :title="cardData.title" 
        :text="cardData.text" 
        @more="handleMore" 
        :maxLines="4" 
    />
</main>
</template>

<script>
import TheCard from './components/TheCard.vue';

export default {
    components: {
        TheCard
    },
    data() {
        return {
            cardData: {
                image: 'https://loremflickr.com/640/480/abstract',
                title: 'Título de la card',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac consectetur quam, eu pharetra urna. Mauris at ultrices diam. Nullam sollicitudin, mauris sed hendrerit pulvinar, augue sem cursus elit, vel pharetra nisi metus non mi. Donec bibendum est pretium varius maximus. Proin euismod feugiat sapien ut dictum. Vivamus orci risus, finibus non nibh sit amet, auctor eleifend diam. Vestibulum et interdum nunc.'
            }
        }
    },
    methods: {
        handleMore() {
            // Gestionar lo que ocurre cuando se pulsa el botón "Saber más"
            console.log('Saber más');
        }
    }
}
</script>

```

## Demostración
El ejemplo anterior se encuentra en el archivo *App.vue*, y utiliza imágenes generadas automáticamente por el servicio [LoremFlickr](https://loremflickr.com/) para propósitos de demostración. 
En el método *handleMore* se puede agregar lo que quiere que suceda cuando se emita el evento *more*, en este ejemplo, simplemente se ha decidido imprimir 'Saber más' en la consola como una acción demostrativa. 

La implementación de este componente se puede ver de la siguiente forma:

**Visualización de la Card**

![Card](https://github.com/MileydyMtz/vue-card-component/assets/85470047/b2d8a84f-731d-473a-9133-e9e84e018146)

**Mensaje en consola**

![Card console](https://github.com/MileydyMtz/vue-card-component/assets/85470047/b476b277-9d14-4876-a908-569e00f0ce58)


## Pruebas
Las pruebas se han implementado utilizando la biblioteca vitest para correr las pruebas y @vue/test-utils para montar el componente. 

A continuación se muestran las pruebas implementadas:
* **renders the props correctly**: Esta prueba verifica si las propiedades se están renderizando correctamente en el componente. Se monta el componente con un conjunto de propiedades y luego se verifica si el título, el texto y la imagen se están renderizando con los valores esperados.
* **applies maxLines to style correctly**: Esta prueba verifica si la propiedad maxLines se aplica correctamente como un estilo en el componente. Se monta el componente con maxLines configurado en 5, y luego se verifica si el estilo del texto incluye 'webkit-line-clamp: 5'.
* **emits "more" event on click**: Esta prueba verifica si el componente emite el evento more cuando se hace clic en el botón. Se monta el componente, se dispara un evento de clic en el botón y luego se verifica si el componente ha emitido el evento more.
* **has required props**: Esta prueba verifica si las propiedades requeridas están configuradas correctamente. Se comprueba que image, title y text sean propiedades requeridas y que maxLines tenga un valor por defecto de 3.
