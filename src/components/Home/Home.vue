<template>
  <div id="home" class="page">
    <header>
      <h1>Sky pet</h1>
    </header>
    <div id="image"></div>
    <img
      src="http://71.11.135.22:8081/"
      alt="Looks like the camera feed did not make it to the website! This is where your webcam footage should be. Make sure to refer to your user manual for proper device setup!"
    >
    <div id="input-buttons">
      <div id="feed-buttons">
        <input id="water-button" type="button" value="💧">
        <input id="food-button" type="button" value="🍖">
      </div>
      <div id="light-bulb">
        <input id="lightOnButton" type="submit" value="on">
        <input id="lightOffButton" type="submit" value="Off">
      </div>
    </div>
  </div>
</template>

<script>
window.onload = function() {
  const food = document.getElementById("food-button");
  const water = document.getElementById("water-button");
  const ledOn = document.getElementById("lightOnButton");
  const ledOff = document.getElementById("lightOffButton");

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

<style scoped>
#food-button, #water-button, #lightOffButton, #lightOnButton {
  cursor: pointer;
  font-size: var(--font-size-titles);
  background-color: var(--background-color);
  border: 0;
  margin: 5px;
  width: 50px;
  height: 50px;
}

#feed-buttons {
  display: flex;
  justify-content: space-around;
}

#home {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

#home > img {
  width: 500px;
  height: 400px;
}

#light-bulb {
  display: flex;
  justify-content: space-around;
}

#home > img {
  font-size: var(--font-size-titles);
  border-radius: 4px;
  background-color: var(--background-color);
}
</style>
