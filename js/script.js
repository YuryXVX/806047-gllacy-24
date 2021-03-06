/* Popup */

var overlay = document.querySelector(".modal-overlay");
var link = document.querySelector(".popup-open-button");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-close");

var login = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-email]");
var form = popup.querySelector("form");
var message = popup.querySelector("[name=message-user]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    email.focus();
    } else {
      login.focus();
    }
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
    }
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        overlay.classList.remove("modal-overlay-show");
    }
  }
});


/* Map */

function initMap() {
  var opt = {
    center: {lat:59.939202, lng:30.327438},
    zoom: 16.6
  };

  var myMap = new google.maps.Map(document.getElementById("google-map"), opt);

  var marker = new google.maps.Marker({
    position: {lat:59.938863, lng:30.323214},
    map: myMap,
    size: new google.maps.Size(218, 142),
    anchore: new google.maps.Point(48, 122),
        /*animation: google.maps.Animation.BOUNCE, */
    icon: 'img/icon.png'
    });
}
