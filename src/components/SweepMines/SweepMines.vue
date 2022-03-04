<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-6">321</div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
