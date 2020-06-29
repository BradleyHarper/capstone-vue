<template>
  <div id="home" class="page">
    <div id="image"></div>
    <img
      style="-webkit-user-select: none;"
      src="http://71.11.135.22:8081/"
      alt="Looks like the camera feed did not make it to the website! This is where your webcam footage should be. Make sure to refer to your user manual for proper device setup!"
    >
    <div id="forms">
      <input id="wbutton" type="button" value="Water">
      <input id="fbutton" type="button" value="Feed">
    </div>
    <div id="lightbulb">
      <input id="lightOnButton" type="submit" value="On">
      <input id="lightOffButton" type="submit" value="Off">
<!--      <div id="switch">-->
<!--        <label class="switch">-->
<!--          <input type="checkbox">-->
<!--          <span class="slider round"></span>-->
<!--        </label>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {}
};

window.onload = function() {
  const food = document.getElementById("fbutton");
  const water = document.getElementById("wbutton");
  const ledOn = document.getElementById("lightOnButton");
  const ledOff = document.getElementById("lightOffButton");
  const sLed = document.getElementById("switch");

  const options = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    mode: "no-cors"
  };

  food.addEventListener("click", function feedReq() {
    fetch("http://71.11.135.22:3000/api/servo2/sml", options).then(Response => Response.ok);
  });

  water.addEventListener("click", function waterReq() {
    fetch("http://71.11.135.22:3000/api/servo/sml", options).then(Response => Response.ok);
  });

  ledOn.addEventListener("click", function ledOnReq() {
    fetch("http://71.11.135.22:3000/api/led/on", options).then(Response => Response.json);
  });

  ledOff.addEventListener("click", function ledOffReq() {
    fetch("http://71.11.135.22:3000/api/led/off", options).then(Response => Response.json);
  });
};
</script>

<style>
  #forms {
    display: flex;
    justify-content: space-around;
  }

  #lightbulb {
    display: flex;
    justify-content: space-around;
  }
.switch {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 25px;
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
  left: 1px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:after {
  content: "";
}

input:checked + .slider {
  background-color: bisque;
}

input:focus + .slider {
  box-shadow: 0 0 1px bisque;
}

input:checked + .slider:before {
  -webkit-transform: translateX(43px);
  -ms-transform: translateX(43px);
  transform: translateX(43px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

#home > img {
  font-size: 3vh;
  background-color: rgba(255, 228, 196, 0.8);;
  text-decoration: none;
  border-radius: 4px;
}
</style>
