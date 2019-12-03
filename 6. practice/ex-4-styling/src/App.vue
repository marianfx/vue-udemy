<template>
  <div id="app" class="container">
  <!-- 1) Start the Effect with the Button. The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick (attach respective class to the div with id "effect" below) -->
  <div>
    <button @click="toggleEffecting">{{ buttonText }} </button>
    <div id="effect" :class="activeClass"></div>
  </div>
  <!-- 2) Create a couple of CSS classes and attach them via the array syntax -->
  <div :class="['box', 'shadow']">I got no class :(</div>
  <!-- 3) Let the user enter a class (create some example classes) and attach it -->
  <div>
    <input v-model="userClass" type="text">
    <div class="big" :class="userClass"></div>
  </div>
  <!-- 4) Let the user enter a class and enter true/ false for another class (create some example classes) and attach the classes -->
  <div>
    <input v-model="userClass2" type="text">
    <input @input="$event.target.value == 'true' ? (userAddClass2 = true) : (userAddClass2 = false)" type="text">
    <div class="big" :class="[userClass2, { red: userAddClass2 }]"></div>
  </div>
  <!-- 5) Repeat 3) but now with values for styles (instead of class names). Attach the respective styles.  -->
  <div>
    <input v-model="userStyle" type="text">
    <div class="big" :style="{'background-color': userStyle}"></div>
  </div>
  <!-- 6) Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. -->
  <div>
    <button @click="startProgress">Start Progress</button>
    <div class="progress">
      <div class="progress-bar" role="progressbar" :style="{ width: progressValue + '%'}" :aria-valuenow="progressValue" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        buttonText: 'Start Effect',
        trigger: null,
        triggerRunning: false,
        activeClass: '',

        userClass: '',
        userClass2: '',
        userAddClass2: false,

        userStyle: '',
        progressValue: 0
      }
    },
    methods: {
      toggleEffecting() {
          if (this.triggerRunning) {
            this.buttonText = "Start effect";
            this.triggerRunning = false;
            clearInterval(this.trigger);
            this.trigger = null;
          }
          else {
            this.buttonText = "Stop effect";
            this.triggerRunning = true;
            this.trigger = setInterval(() => { this.activeClass = this.activeClass == 'highlight' ? 'shrink' : 'highlight' }, 500);
          }
      },
      startProgress() {
        this.progressValue = 0;
        let timer = setInterval(() => {
          if (this.progressValue === 100) {
            clearInterval(timer);
            setTimeout( () => alert("Finished"), 500);
            return;
          }

          this.progressValue ++;
        }, 100);
      }
    }
  }
</script>

<style>
#effect {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.highlight {
  background-color: red;
  width: 200px !important;
}

.shrink {
  background-color: gray;
  width: 50px !important;
}

.big {
  width: 100px;
  height: 100px;
}

.box {
  border: 1px solid red;
}

.shadow {
  box-shadow: 1px salmon;
}
.red {
  background-color: red;
}
</style>