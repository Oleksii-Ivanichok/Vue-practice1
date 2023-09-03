<template>
    <div>
    <button class="button">
        <slot></slot>
    </button>
    </div>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.button {
    align-self: flex-end;
    background: none;
    color: teal;
    padding: 10px 15px;
    border: 1px solid teal;
}
</style>