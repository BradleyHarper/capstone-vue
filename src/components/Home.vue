<template>
   <div id="home">
    <img
      style="-webkit-user-select: none;"
      src="http://71.11.135.22:8081/"
      alt="Looks like the camera feed did not make it to the website! This is where your webcam footage should be. Make sure to refer to your user manual for proper setup"
    >
    
    <form id="water" method="POST" action="http://71.11.135.22:3000/api/servo/sml">
      <input type="submit" value="Water">
    </form>

    <form id="food" method="POST" action="http://71.11.135.22:3000/api/servo2/sml">
      <input type="submit" value="Feed">
    </form>

    <div class="buttonselector">
      <button>small</button>
      <button>Medium</button>
      <button>Large</button>
    </div>
    <footer>
      <h2>Please, if you have any questions please feel free to contact me or visit the community forum!</h2>
    </footer>
   </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>

</style>