const webpush = require('web-push');
const vapidKeys = webpush.generateVAPIDKeys();
export default function sw() {
    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/');
        
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);
        
        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }

    function appServerKey() {
        console.log(vapidKeys.publicKey);
        return urlBase64ToUint8Array(vapidKeys.publicKey);
    }

    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl).then((response) => {
       
        return response.pushManager.getSubscription().then((subscription) => {
            console.log(subscription);
            return response.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: appServerKey()
            })
        })
    })
}

