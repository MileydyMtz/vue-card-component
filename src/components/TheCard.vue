<template>
<div class="card">
    <img :src="image" alt="Imagen de card" class="card-img">
    <h2 class="card-title">{{ title }}</h2>
    <p class="card-text" :style="{ '-webkit-line-clamp': maxLines }">{{ text }}</p>
    <button @click="onClick" class="card-button">Saber más</button>
</div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        image: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        maxLines: {
            type: Number,
            default: 3
        }
    },
    methods: {
        onClick() {
            this.$emit('more');
        }
    }
}
</script>

<style lang="scss" scoped>
$button-background-color: #007BFF;
$button-text-color: #ffffff;
$card-background: #ffffff;
$card-max-width: 350px;
$card-text-color: #666666;
$card-title-color: #333333;

.card {
    align-items: center;
    background-color: $card-background;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.20);
    display: flex;
    flex-direction: column;
    margin: 15px;
    max-width: $card-max-width;
    overflow: hidden;
}

.card-img {
    height: 200px;
    object-fit: cover;
    width: 100%;
}

.card-title {
    color: $card-title-color;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px 0;
}

.card-text {
    -webkit-box-orient: vertical;
    color: $card-text-color;
    display: -webkit-box;
    line-height: 1.6;
    overflow: hidden;
    padding: 0 15px;
}

.card-button {
    background-color: $button-background-color;
    border-radius: 5px;
    border: none;
    color: $button-text-color;
    cursor: pointer;
    margin-bottom: 20px;
    padding: 10px 20px;
    transition: background-color 0.3s;
}

.card-button:hover {
    background-color: darken($button-background-color, 10%);
}
</style>
