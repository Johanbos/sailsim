<!--
  HelloWorld.vue
  Minimal Hello World component for baseline feature.
  Displays a single heading.
-->
<template>
  <div class="greetings">
    <h1 class="green">Hello World</h1>
  </div>
</template>

<!--
  Styles for HelloWorld component
-->
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1 {
    text-align: left;
  }
}
</style>
