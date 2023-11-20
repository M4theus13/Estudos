button = document.getElementById('button')

let notification;

let notificationVisibility;

function showNotification(){


    if (Notification.permission !== 'granted'){
        
        Notification.requestPermission()

    } else{

        notification = new Notification('Notificação Cringe!', {

            body: 'JavaScript teste Notificação',

            icon: 'assets/js.png',

            image: 'assets/background.jpg',

        });

    }

}

function showNotificationVisibility(){

    if (document.visibilityState === 'hidden'){

        notificationVisibility = new Notification('Ei!!!', {

            body: 'Volta!',

            icon: 'assets/catIcon.png',

            image: 'assets/cat.jpg'

        });

    } else {

        notificationVisibility.close();
        
    }

};

let btnNotification = document.querySelector('.btn-notification');

button.addEventListener("click", showNotification);

document.addEventListener('visibilitychange', showNotificationVisibility)