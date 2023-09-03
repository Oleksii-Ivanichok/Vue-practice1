<template>
    <div>
        <my-input type="text" v-on:input="changeName"/>
        <p class="name">Your Name: {{ name }} </p>
    </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";

export default {
    components: {MyInput},
    data() {
        return {
            name: ''
        }
    },
    methods: {
        changeName(event) {
            this.name = event.target.value
        },
    }
}
</script>

<style scoped>

</style>