<template>
    <div v-if="posts.length > 0">
        <h3>List of posts</h3>
        <transition-group name="post-list">
            <post-item
                :key="post.id"
                :post="post"
                v-for="post in posts"
                @remove="$emit('remove', post)"
            />
        </transition-group>
    </div>
    <h2 v-else>
        Post list are empty
    </h2>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
    components: {PostItem},
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.post-list {
    display: inline-block;
    margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
.post-list-move{
    transition: transform 0.3s ease;
}
</style>