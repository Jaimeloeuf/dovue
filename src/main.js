import Vue from 'vue';
import App from './App.vue';
import firebase from 'firebase';
import router from './router';
import store from './store';

// Import other dependencies
import VModal from 'vue-js-modal';
import autofocus from './directives/autofocus';

// Register the VModal component for other components to use.
Vue.use(VModal);

Vue.config.productionTip = false

// Register global custom directive called `v-autofocus`
Vue.directive('autofocus', autofocus);


// firebaseConfig auto generated in project settings
firebase.initializeApp({
    apiKey: "AIzaSyBLNzTnm890qIYStxM5_nljMh3CoxkVyDk",
    authDomain: "dovue-c1892.firebaseapp.com",
    databaseURL: "https://dovue-c1892.firebaseio.com",
    projectId: "dovue-c1892",
    storageBucket: "dovue-c1892.appspot.com",
    messagingSenderId: "9521872878",
    appId: "1:9521872878:web:e90626e43f23617a"
});


// Wait for firebase to finish initialization before creating the app.
// So that the router navigation wont break due to invalid auth
firebase.auth().onAuthStateChanged(() => {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
})