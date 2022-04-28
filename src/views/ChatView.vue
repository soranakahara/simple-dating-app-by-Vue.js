<template>
    <!-- 自分が送ったメッセージならアイコンを逆側にする -->
    <div>
        <div v-for="message in messages[$route.params.userId]" v-bind:key="message.messageId">
            <single-message v-bind='message'></single-message>
        </div>
        <input type="text" v-model="newMessage">
        <button v-on:click="setMessage(payloadMessage); newMessage='';">SEND MESSAGE</button>
    </div>
</template>

<script>
import SingleMessage from '@/components/SingleMessage.vue'
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
    name: 'ChatView',
    data(){
        return {
            newMessage: "",
        }
    },
    computed: {
        payloadMessage(){
            let date = Date();
            let id = this.$route.params.userId;
            let image = this.getUserById(id)['picture']['thumbnail'];
            let messageId = this.newMessageId;
            return {
                messageId: messageId,
                userId: id,
                messageText: this.newMessage,
                date: date,
                image: image
            }
        },
        ...mapState('message', ['messages', 'newMessageId']),
        ...mapGetters('user', ['getUserById']),
    },
    components: {
        SingleMessage,
    },
    methods: {
        ...mapMutations('message', ['setMessage'])
    }
}
</script>
