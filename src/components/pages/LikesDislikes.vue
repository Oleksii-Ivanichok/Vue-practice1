<template>
    <div>
        <my-button v-on:click="addLike">Like</my-button>
        <my-button v-on:click="addDislikes">Dislike</my-button>
        <div>Likes: <strong>{{ likes }}</strong></div>
        <div>Dislikes: <strong>{{ dislikes }}</strong></div>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
    components: {MyButton},
    data() {
        return {
            likes: 0,
            dislikes: 0,
        }
    },
    methods: {
        addLike() {
            this.likes++;
        },
        addDislikes() {
            this.dislikes++;
        },
    }
}
</script>

<style scoped>

</style>
