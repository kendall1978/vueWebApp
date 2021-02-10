import Vue from 'vue'
import Vuex from 'vuex'
import FirebaseApp from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        posts: []
    }, 
    mutations: {
        setUser (state, payload){
            state.user = payload
        },
        addPost (state, payload){
            let post = {
                id: payload.id,
                data: payload.data()
            }
            state.posts.push(post)
        }
    },
    actions:{
        async createPost ({ state }, post){
            await FirebaseApp.db.collection('admin').doc(state.user.uid).collection('blog-posts').add(post)
        }
    }
})