<template>
    <div class="p-4 chat-window overflow-scroll">
        <span v-for="(message, index) in messages" :key="index" class="message bg-light rounded-4 py-2 px-3">
            {{ message }}
        </span>
    </div>
</template>

<script setup>
const messages = [
    'Hello', 'Hi', 'How are you?', 'Good morning!', 'Hello there!', 'Hi again!'
];
</script>

<style>

</style>