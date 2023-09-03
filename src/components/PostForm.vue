<template>
    <div>
        <form class="form" @submit.prevent>
            <h4>Creating Post</h4>
            <my-input v-model:value="post.title"  type="text" placeholder="Name"/>
            <my-input v-model:value="post.body"  type="text" placeholder="Description"/>
            <my-button @click="createPost" style="margin-top: 15px;">Create</my-button>
        </form>
    </div>
</template>

<script>

import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
    components: {MyButton, MyInput},
    data() {
        return {
            post: {
                id: '',
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: '',
            }
        }
    }

}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
}

</style>