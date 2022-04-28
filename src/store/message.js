import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    messages: {
    // userのid: [各ユーザーのmessageオブジェクト{userId:, userName:, date:, massageText:}の配列]
    },
    newMessageId: 0,
}
const getters = {
    getMessagesById(state){
      return function(id){ // クロージャ
        return state.messages[id]; //messageオブジェクトの配列を返す
      }
    },
    messageList(state){
      let res = [];
      for (let userId in state.messages) {
        // console.log(state.messages[userId]);
        res.push(state.messages[userId][0]);
      }
      // console.log(res);
      return res; // 各ユーザーの最新のmessageオブジェクト1つずつの配列
    }
}
const mutations = {
    setMessage(state, payload){
      // console.log(!state.messages[payload.userId]);
      if(!state.messages[payload.userId]){
        // メッセージが無いならvalueにそのまま設定(配列形式)
        state.messages = {...state.messages, [payload.userId]: [payload]};
      } else {
        // メッセージのリストがあるなら先頭に追加
        // 配列の長さの変更もリアクティブに検知できないが、pushやunshiftはリアクティブ
        // console.log(state.messages[payload.userId].length);
        state.messages[payload.userId].unshift(payload);
        // Vue.set(state.messages[payload.userId], 0, payload);
        // console.log(state.messages[payload.userId].length);
      }
      state.newMessageId += 1;
      // console.log(state.messages);
    }
}
const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}