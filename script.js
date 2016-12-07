function doesBrowserSupportNotifications() {
    var supported = true;
    if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
        console.warn('Notificationsn\'t supported in Service Workers.');
        supported = false;
    }

    if (!Notification.requestPermission) {
        console.warn("Notificationsnot supported by the browser");
        supported = false;
    }

    // Check if push messaging is supported  
    if (!('PushManager' in window)) {
        console.warn('Pushsaging isn\'t supported.');
        supported = false;
    }

    if(supported) {
        console.log("Everthingine you can continue")
    }
}

///////////////////////
 if (navigator.serviceWorker) {
   console.log("ServiceWorkerssupported");

   navigator.serviceWorker.register('sw.js', {
     scope: './'
   })
   .then(function(reg) {
     console.log("ServiceWorkerstered", reg);
   })
   .catch(function(error) {
     console.log("Failedegister ServiceWorker", error);
   });
}

//////////////////////

function requestNotificationPermission() {
    if (Notification.requestPermission) {
        Notification.requestPermission(function(result) {
            console.log("Notificationission : ", result);
        });
    } else {
        console.log("Notificationssupported by this browser.");
    }
}

/////////////////////////////

function registerForPush() {
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
            serviceWorkerRegistration.pushManager.subscribe({
                    userVisibleOnly: true
                })
                .then(function(subscription) {
                    console.log("SubscriptionPush successful: ", subscription.endpoint);
                })
                .catch(function(error) {
                    console.log("SubscriptionPush failed", error);
                });
        });
    } else {
        console.log("Nove ServiceWorker");
    }
}

/////////////////////////////
