import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';
import 'firebase/auth';


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null
        },
        status: null,
        error: null,
        updatePosts: [],
        posts: []
    }, 
    mutations: {
        setLoggedIn(state, value){
            state.user.loggedIn = value;
        },
        setUser(state, data){
            state.user.data = data
        },
        removeUser(state){
            state.user = null
        },
        setStatus(state, payload){
            state.status = payload
        },
        setError(state, payload){
            state.error = payload
        },
        setUpdatePosts(state, payload){
            state.updatePosts.push(payload)
        },
        addPost(state, {id, data}){
            const post = {
                'id' : id,
                'title' : data.title,
                'content' : data.content,
                'date' : data.date,
                'imageUrl' : data.imageUrl
            }
            state.posts.push(post)
        }
    },
    actions: {
        fetchUser({commit} , user){
            commit("setLoggedIn", user !== null);
            if(user){
                commit("setUser", {
                    displayName: user.displayName,
                    email: user.email
                });
            }else{
                commit("setUser", null);
            }
        },
        getPostsAction({commit}){
            firebase.firestore().collection('blog-posts').orderBy('date')
            .get().then((querySnapshot)=>{
                querySnapshot.forEach((doc)=>{
                    commit('addPost', {id: doc.id, data: doc.data()})
                })
            })
        },
        updatePostsAction({commit}, id){
                firebase.firestore().collection('blog-posts').doc(id)
                .get().then(snapshot =>{
                    if(snapshot.exists){

                        commit('addPost', {id: snapshot.id, data: snapshot.data()})
                    }else{
                        console.log("Doesnt Exist")
                    }
                })
        }

    },
    getters: {
        getStatus(state){
            return state.status
        },
        user(state){
            return state.user
        },
        getError(state){
            return state.error
        },
        getPosts(state){
            return state.posts
        },
        updatePosts(state){
            return state.updatePosts
        }
    }
})