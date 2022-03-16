<script lang="ts">
import { defineComponent } from "vue";
import Grid from "./Grid.vue";

export default defineComponent({
  components: {
    Grid: Grid,
  },
  data() {
    return {
      minesAmount: 10,
      row: 20,
      column: 20,
    };
  },
  methods: {
    go: function () {
      console.log(this.minesAmount);
    },
  },
  watch: {
    minesAmount: function (value) {
      if (value < 10) {
        this.minesAmount = 10;
      }
    },
  },
});
</script>

<template>
  <div class="container sweep-mines">
    <div class="setting">
      <input class="col-1" type="number" v-model="row" />
      <input class="col-1" type="number" v-model="column" />
      <input class="col-1" type="number" v-model="minesAmount" />

      <button v-on:click="go">GO</button>
    </div>
    <div class="grid-section">
      <div class="grid-row" v-for="r in row" v-bind:key="r">
        <Grid v-for="c in column" v-bind:key="c" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.setting {
  justify-content: center;
}

.grid-section {
  margin-top: 2rem;
}
.grid-row {
  display: flex;
  justify-content: center;
}
</style>
