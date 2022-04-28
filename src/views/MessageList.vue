<template>
    <div>
        <div v-for='message in messageList' v-bind:key='message.messageId'>
            <single-message v-bind="message"></single-message>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SingleMessage from '@/components/SingleMessage.vue'
// import { defineComponent } from '@vue/composition-api'

export default {
    name: 'MessageList',
    computed: {
        ...mapGetters('message', ['messages', 'messageList'])
    },
    components: {
        SingleMessage,
    }
}
</script>
