import { createStore } from 'vuex'
import http from '@/plugins/axios'
export default createStore({
  state() {
    return {
      me: "",
      user_type:"",
      appoinments:[],
      typePerson:[],
      sip:[],
      indications:[],
      image_path:"",
      file_name:"",
      img:""
    };
  },
  getters: {
  },
  mutations: {
    getMe(state, data){
      state.me = data.full_name
      state.user_type = data.type
    },
    getAppoinment(state, data){
      state.appoinments = data
    },
    getPersonType(state, data){
      state.typePerson = data
    },
    getSipName(state, data){
      state.sip = data
    },
    getIndications(state, data){
      state.indications = data
    },
  },
  actions: {
    async getMe ({commit}){
      try {
        const {data: {data}} = await http.post("/auth/me")
        commit("getMe", data)
        localStorage.setItem('user_type', data.type)
      } catch(err) {
        console.log(err)
      }
    },
    getAppoinment ({commit}){
      http.get("/resources?type=appointment-list").then(res=>{
        commit("getAppoinment", res.data.data)
        console.log(res.data.data, "appoinment")
      })
    },
    getPersonType({commit}){
      http.get("/resources?type=form-list").then(res=>{
        commit("getPersonType", res.data.data)
      })
    },
    getSipName({commit}){
      http.get("/resources?type=sips-list").then(res=>{
        commit("getSipName", res.data.data)
      })
    },
    getIndications({commit}){
      http.get("/resources?type=indications-list").then(res=>{
        commit("getIndications", res.data.data)
      })
    }
  },
  modules: {
  }
})
