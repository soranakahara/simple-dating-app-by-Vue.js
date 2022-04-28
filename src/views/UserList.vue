<template>
  <div>
      <div v-for="user in users" :key="user.keys" >
        <!-- <div v-on:click="myRouting(user)">
          <user-card v-bind:image="user.picture['large']" v-bind:userName="user.name.first + ' ' + user.name.last" ></user-card>
        </div> -->
        <router-link :to="{ name: 'user-detail', params: { userId: user.login.uuid }}">
          <user-card v-bind:image="user.picture['large']" v-bind:userName="user.name.first + ' ' + user.name.last" ></user-card>
        </router-link>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import UserCard from '@/components/UserCard.vue'

export default {
  name: 'UserList',
  created: function(){
      // console.log("created");
      this.$store.dispatch("user/fetchUsers");
  },
  computed: {
      ...mapState('user', ['users'])
  },
  components: {
    UserCard,
  },
  methods: {
    myRouting: function(user){
      console.log(user.login.uuid);
      this.$router.push({ name: 'user-detail', params: { userId: user.login.uuid }});
    }
  }
}
</script>