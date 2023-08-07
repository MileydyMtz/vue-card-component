<template>
<main>
    <Card 
        :image="cardData.image" 
        :title="cardData.title" 
        :text="cardData.text" 
        @more="handleMore" 
        :maxLines="4" 
    />
</main>
</template>

<script>
import Card from './components/TheCard.vue';

export default {
    components: {
        Card
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

<style scoped>
main {
    display: flex;
    justify-content: center;
}
</style>
