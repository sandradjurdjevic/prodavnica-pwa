(function () {


  if('serviceWorker' in navigator){
    
    window.addEventListener('load',()=>{
      navigator.serviceWorker
      .register("sw_cache_site.js")
      .then(reg => console.log('Service Worker:Registered'))
      .catch(err => console.log('Service Worker: Error: ${err}'));
    })
  }

  1
  /*  const BACK_URL="http://localhost:5000";
    const urlBase64ToUint8Array = (base64String) => {
      const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
      const base64 = (base64String + padding)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");
  
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
  
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    }

    //Public Key:
//BEDTMkxnB14mWTduL_fNZ46XjNf3daHP7yZ1Dhx5YBqr5fs7g7jc3GJkJbiH3W8YrJqu4tI2_El-EzOnuqjQuGs

//Private Key:
//DatZpXFi79r5qO14U1Iw9DgXDuRE77PUEv-PTB-nvF0
  
  
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("sw.js", { scope: "." })
        .then((register) => {
          console.log("service worker registered");
          if ("Notification" in window) {
            Notification.requestPermission((result) => {
              if (result === "granted") {
                console.log("Acess granted! :)");
                register.pushManager.subscribe({//backend
                  userVisibleOnly: true,
                  applicationServerKey: urlBase64ToUint8Array('BEDTMkxnB14mWTduL_fNZ46XjNf3daHP7yZ1Dhx5YBqr5fs7g7jc3GJkJbiH3W8YrJqu4tI2_El-EzOnuqjQuGs')
                }).then(subscription => {
                  fetch(BACK_URL+"/subscribe", {
                    method: "POST",
                    body: JSON.stringify(subscription),
                    headers: {
                      "content-type": "application/json"
                    }
                  });
                });
  
              
              } else if (result === "denied") {
                console.log("Access denied :(");
              } else {
                console.log("Request ignored :/");
              }
            });
          }
        })
        .catch((err) => console.log("service worker not registered", err));
    }*/

    const hide = (elem) => {
      elem.style.display = 'none';
  }
  
  // show an element
  const show = (elem) => {
      elem.style.display = 'block';
  }
  
  // toggle the element visibility
  const toggle = (elem) => {
      
      // if the element is visible, hide it
      if(window.getComputedStyle(elem).display !== 'none') {
          hide(elem);
          return;
      }
  
      // show the element
      show(elem);
  }

    window.addEventListener("load", () => {
      function handleNetworkChange(event) {
        if (navigator.onLine) {
          document.body.classList.remove("offline");
          console.log("online");

        } else {
          document.body.classList.add("offline");
          console.log("offline");
          show(document.querySelector("#offline-notification"));
        }
      }
    
      window.addEventListener("online", handleNetworkChange);
      window.addEventListener("offline", handleNetworkChange);
    });
})();