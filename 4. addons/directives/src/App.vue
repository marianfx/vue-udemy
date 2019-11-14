<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2">
      <!-- examples of built-in directives (all are v-**) -->
      <h1>Built-in directives</h1>
      <p v-text="'Some simple text'"></p>
      <p v-html="'<strong>HTML that should be sanitized before added here</strong>'"></p>
    </div>
    <hr />
    <div class="col-xs-12 col-sm-8 col-sm-offset-2">
      <!-- examples of custom directives (all are v-**) -->
      <h1>Custom directives</h1>
      <!-- they also have modifiers. We can create them on custom directives, it's the same how they exist in the main components -->
      <p v-highlight:background.delayed="'red'">Colored</p>
      <p v-local-highlight:background.delayed.blink="highlightSettings">Colored</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      highlightSettings: {
        mainColor: "red",
        secondColor: "green",
        delay: 2000,
        blinkInterval: 500
      }
    };
  },
  directives: {
    "local-highlight": {
      // bind (el, binding, vnode) -> once directive is attached to element
      bind(el, binding, vnode) {
        // el is ElementRef
        // el.style.backgroundColor = 'green';
        // el.style.backgroundColor = binding.value; // the value passed
        let value = binding.value;
        var delay = binding.modifiers["delayed"] ? value.delay : 0;

        // blink modifier
        if (binding.modifiers["blink"]) {
          let mainColor = value.mainColor;
          let secondColor = value.secondColor;
          let currentColor = mainColor;

          // the default delayed modifier
          setTimeout(() => {
            setInterval(() => {
              currentColor =
                currentColor == secondColor ? mainColor : secondColor;
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, value.blinkInterval);
          }, delay);
        } else {
          // the default delayed modifier
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = value.mainColor;
            } else {
              el.style.color = value.mainColor;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
