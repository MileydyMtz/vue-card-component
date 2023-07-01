<template>
<main>
    <TheCard 
    :image="cardData.image" 
    :title="cardData.title" 
    :text="cardData.text" 
    @more="handleMore" 
    :maxLines="4" />
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
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac consectetur quam, eu pharetra urna. Mauris at ultrices diam. Nullam sollicitudin, mauris sed hendrerit pulvinar, augue sem cursus elit, vel pharetra nisi metus non mi. Donec bibendum est pretium varius maximus. Proin euismod feugiat sapien ut dictum. Vivamus orci risus, finibus non nibh sit amet, auctor eleifend diam. Vestibulum et interdum nunc. Nam posuere eleifend ex, sed rutrum tortor vestibulum a. Mauris sed ornare massa, ac volutpat mauris. Mauris enim magna, mollis in erat id, condimentum rhoncus leo. Etiam molestie lacinia euismod. In hac habitasse platea dictumst. Nunc pharetra est nec lorem dignissim, nec tempus ligula fermentum. Quisque condimentum, felis sit amet auctor euismod, urna ligula consequat mauris, a sollicitudin urna nisi vel augue. Donec vel bibendum mi. Proin commodo, nisi vel suscipit auctor, odio quam consequat odio, eget iaculis leo dui non ipsum.'
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
