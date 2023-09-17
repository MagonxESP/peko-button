<template>
    <button :class="{'transparent': transparent}">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        transparent: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
button {
    display: flex;
    height: 36px;
    min-width: 64px;
    padding: 0 16px;
    text-transform: capitalize;
    cursor: pointer;
    background-color: var(--background-color-primary);
    border: none;
    color: var(--text-color-primary);
    border-radius: 4px;
    font-weight: 500;
    text-decoration: none;
    text-align: center;
    align-items: center;
    line-height: normal;
    font-family: inherit;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
        0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.transparent {
    background-color: transparent;
    box-shadow: none;
    min-width: 0px;
    padding: 0;
}
</style>