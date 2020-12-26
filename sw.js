'use strict';
self.addEventListener(
    'install', function (event) {
        event.waitUntil(
            self.skipWaiting()
        );
    }
);
self.addEventListener('fetch', () => {});

self.addEventListener('push', function (event) {
    console.log('Received push');
    var notificationTitle = 'Hello';
    var notificationOptions = {
        body: 'Thanks for sending this push msg.',
        icon: 'icon',
        badge: 'badge',
        tag: 'simple-push-demo-notification',
        data: {
            url: 'https://developers.google.com/web/fundamentals/getting-started/push-notifications/'
        }
    };

    if (event.data) {
        var dataText = event.data.text();
        const obj = dataText? JSON.parse(dataText): ''
        notificationTitle = 'Received Payload';
        notificationOptions.body = `Push data: ${obj.data || 'no-data'}`;
    }

    event.waitUntil(Promise.all([self.registration.showNotification(notificationTitle, notificationOptions)]));
});


self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    if (event.notification.data && event.notification.data.url) {
        clients.openWindow(event.notification.data.url);
    }
});