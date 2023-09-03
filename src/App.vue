<template>
    <div class="app">
        <navbar></navbar>
        <router-view>
        </router-view>
    </div>
</template>

<script>
import Navbar from "@/components/UI/Navbar.vue";

export default {
    components: {Navbar}
}
</script>

<style>
.app {
    padding: 20px;
}

.app__buttons {
    display: flex;
    justify-content: space-between;
}

</style>