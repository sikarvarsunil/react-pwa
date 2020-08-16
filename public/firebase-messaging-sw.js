importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-messaging.js');

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js').then(function(registration) {
        console.log('registration successful, the scope is', registration.scope);
    }).catch(function(err) {
        console.log('Service worker registration is failed, error', err);
    })
}
firebase.initializeApp({
    messagingSenderId: "563575395013",
});

firebase.messaging();

