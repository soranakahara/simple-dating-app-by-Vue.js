// import { rmSync } from 'fs' 勝手に追加されてた
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    users : {
        // id: userObject
    }
}
const getters = {
    getUserById(state){
        return function(userId){
            // console.log("getUserById is working " + userId);
            // console.log(typeof(userId));
            return state.users[userId];
        }       
    }
}
const mutations = {
    setUsers(state, userData){
        // リアクティブに値を渡すにはただ連想配列に追加するだけではダメ→$setを使うか、スプレッドシンタックスでオブジェクトを書き換える
        // state.users[userData['login']['uuid']] = userData; // idはlogin.uuid。valueはobject
        Vue.set(state.users, userData.login.uuid, userData);
        // console.log(userData.login.uuid);
        // let newId = userData['login']['uuid'];
        // state.obj = { ...state.obj, [userData['login']['uuid']]:userData};
    }
}
const actions = {
    fetchUsers(context){
        fetch("https://randomuser.me/api/?results=20").then((response)=>response.json()).then(function(data){
            const res = data;
            console.log("We got profiles of " + res.info["results"] + " persons"); // 取得した人数を表示（パラメータクエリで指定した人数になっているかどうか）
            const objs = res.results;
            for (const obj of objs) {
                // console.log(obj.name.last);
                context.commit('setUsers', obj); // resultsのvalueはオブジェクトの入ったリスト[]
            }
            // 10人のリストが入ったオブジェクト取得
        })
    }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}