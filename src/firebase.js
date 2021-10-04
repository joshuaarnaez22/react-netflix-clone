import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA2rVmCYfCYV-dq91k0Qp9txQ1W8y5E26g",
    authDomain: "netflix-build-clone-6a7cb.firebaseapp.com",
    projectId: "netflix-build-clone-6a7cb",
    storageBucket: "netflix-build-clone-6a7cb.appspot.com",
    messagingSenderId: "510479181244",
    appId: "1:510479181244:web:f18e3c5a54023ebf6ef7b9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
 
  export {auth};
  export default db