import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import Store from './store'



const config = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_PROJECT_ID+".firebaseapp.com",
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_PROJECT_ID+".appspot.com",
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID
}

const FirebaseApp = firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings)
FirebaseApp.db = firestore


export async function signIn(email, password) {
    try{
        await firebase.auth().signInWithEmailAndPassword(email, password)
        let user = firebase.auth().currentUser
        Store.commit('setUser', user)
        return true
    }catch(err){
        return err
    }
}



FirebaseApp.signout = async () =>{
    try{
        await firebase.auth().signOut()
        Store.commit('setUser', null)
        return true
    }catch (err) {
        return err
    }
}

FirebaseApp.resetPassword = async (email) => {
    try{
        await firebase.auth().sendPasswordResetEmail(email)
        return true
    } catch (err) {
        return err
    }
}

FirebaseApp.init = () => {
    FirebaseApp.db.collection('admin').doc(Store.state.user.uid).collection('blog-posts').onSnapshot(snapshot =>{
        snapshot.docChanges().forEach((change) => {
            if(change.type === 'added'){
                console.log('doc added', change.doc.data())
                Store.commit('addPost', change.doc)
            }
        })
    })
}


export default {
    FirebaseApp: FirebaseApp,
    firestore: firestore
}


