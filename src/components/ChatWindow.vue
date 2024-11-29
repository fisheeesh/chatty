<template>
    <div class="p-4 chat-window overflow-scroll">
        <div v-for="(message, index) in messages" :key="index" class="d-flex gap-3 mb-3">
            <div class="image-container d-flex justify-content-center align-items-center">
                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" class="img-fluid rounded-circle" width="60">
            </div>
            <div class="d-flex flex-column">
                <span class="fw-bold ms-1">{{ message.sender }}</span>
                <span class="bg-primary rounded-5 py-2 px-3 message text-white">{{ message.message }}</span>
                <span style="font-size: 11px;" class="text-muted ms-1 mt-1">{{ message.time }} min(s) ago</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const messages = [
    {
        message : 'Hi! My name is chatty!',
        time : '1',
        sender : 'chatty'
    },
    {
        message : 'Hello World!',
        time : '1',
        sender : 'Fisheeesh'
    },
    {
        message : 'Nigga!',
        time : '1',
        sender : 'Admin'
    },
];
</script>

<style>

</style>