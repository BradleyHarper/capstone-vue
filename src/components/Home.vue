<template>
  <div id="home" class="page">
    <img
      style="-webkit-user-select: none;" src="http://71.11.135.22:8081/" alt="Looks like the camera feed did not make it to the website! This is where your webcam footage should be. Make sure to refer to your user manual for proper setup">
    <div id="forms">
      <input id="wbutton" type="button" value="Water">
      <input id="fbutton" type="button" value="Feed">
    </div>
    <div id="lightbulb">
        <input id="lightOnButton" type="submit" value="Lights on!">
        <input id="lightOffButton" type="submit" value="Lights off!">
      <!--<label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
      </label>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};

window.onload = function() {
  var food = document.getElementById("fbutton");
  var water = document.getElementById("wbutton");
  var ledOn = document.getElementById("lightOnButton");
  var ledOff = document.getElementById("lightOffButton");

  food.addEventListener("click", function feedReq() {
    fetch("http://71.11.135.22:3000/api/servo2/sml", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      mode: "no-cors"
    }).then(Response => Response.ok);
  });

  water.addEventListener("click", function waterReq() {
    fetch("http://71.11.135.22:3000/api/servo/sml", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      mode: "no-cors"
    }).then(Response => Response.ok);
  });

  ledOn.addEventListener("click", function ledOnReq() {
    fetch("http://71.11.135.22:3000/api/led/on", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      mode: "no-cors"
    }).then(Response => Response.ok);
  });

  ledOff.addEventListener("click", function ledOffReq() {
    fetch("http://71.11.135.22:3000/api/led/off", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      mode: "no-cors"
    }).then(Response => response.ok);
  });
};
</script>

<style>
.switch {
  position: relative;
  display: inline-block;
  width: 6vw;
  height: 5vh;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: bisque;
}

input:focus + .slider {
  box-shadow: 0 0 1px bisque;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>