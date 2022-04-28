<template>
    <div class="vh-30 vw-15 p-3">
        <img v-bind:src="image" alt="">
        <h1>{{ userName }}</h1>
    </div>
</template>

<script>
export default {
    // 一人分のユーザーオブジェクトのデータを受け取る
    name: "UserCard",
    props: {
        image: String, // URLを受け取る
        userName: String,
    }
}
</script>