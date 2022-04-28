<template>
    <div class="p-3 d-flex">
        <img v-bind:src="image" alt="">
        <p>{{ messageText }}</p>
        <p>{{ date }}</p>
    </div>
</template>

<script>
export default {
    name: "SingleMessage",
    props: {
        image: String,
        date: String,
        messageText: String,
    } //messageオブジェクトを受け取る
}
</script>