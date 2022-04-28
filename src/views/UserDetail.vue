<template>
    <div class="d-flex justify-content-center">
        <div class="vw-100">
            <div class="d-flex justify-content-center">
                <img v-bind:src="user.picture.large" alt="">
                <router-link :to="{name:'chat-view', params: {userId: $route.params.userId}}">
                    <button>chat</button>
                </router-link>
            </div>
            
            <div>
                <table>
                    <tbody>
                        <tr>
                        <th scope="row">name</th>
                        <td>{{ user.name.first }}</td>
                        </tr>
                        <tr>
                        <th scope="row">age</th>
                        <td>{{ user.registered.age }}</td>
                        </tr>
                        <tr>
                        <th scope="row">gender</th>
                        <td>{{ user.gender }}</td>
                        </tr>
                        <tr>
                        <th scope="row">state</th>
                        <td>{{ user.location.state }}</td>
                        </tr>
                        <tr>
                        <th scope="row">city</th>
                        <td>{{ user.location.city }}</td>
                        </tr>
                        <tr>
                        <th scope="row">email</th>
                        <td>{{ user.email }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'UserDetail',
    data(){
        return {
            user: {},
            params: ""
        }
    },
    created: function(){
        this.user = this.getUserById(this.$route.params.userId);
    },
    computed: {
        ...mapGetters('user', ['getUserById'])
    }
}
</script>