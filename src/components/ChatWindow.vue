<template>
    <div class="chat-window">
        <div class="messages">
            <div class="single">
                <span class="created-at">3mins ago</span>
                <span class="name">Fisheeesh</span>
                <span class="message">Real Gangster Shit</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.chat-window {
    background: #f9fafe;
    padding: 30px 20px;
}
.messages {
    max-height: 400px;
    overflow: auto;
    /* background: red; */
}
.single {
    margin: 18px 0;
    /* background: green; */
}
.created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}
.name {
    font-weight: bold;
    margin-right: 6px;
}

</style>