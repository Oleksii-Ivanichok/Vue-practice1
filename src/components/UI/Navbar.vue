<template>
    <div class="navbar">
        <my-button @click="$router.push('/')">Vue 3</my-button>
        <div class="navbar__buttons">
            <my-button @click="$router.push('/posts')">
                Posts
            </my-button>
            <my-button @click="$router.push('/about')">
                About
            </my-button>
            <my-button @click="$router.push('/likes-dislikes')">
                Likes Dislikes
            </my-button>
            <my-button @click="$router.push('/input-connect')">
                Input Connect
            </my-button>
        </div>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
    components: {MyButton}
}
</script>

<style scoped>
.navbar {
    height: 50px;
    background: lightgrey;
    box-shadow: 2px 2px 4px grey;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar__buttons{
    gap: 20px;
    display: flex;
    margin-left: auto;
}
</style>