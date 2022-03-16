<script lang="ts" src>
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  data() {
    return {
      clicked: false,
      rightClicked: false,
    };
  },
  setup() {
    const store = useStore();
  },
  mounted() {},
  methods: {
    onClick: function () {
      this.clicked = true;
    },
    onRightClick: function (e: PointerEvent) {
      this.rightClicked = true;

      e.preventDefault();
    },
  },
});
</script>

<template>
  <div
    v-if="!clicked && !rightClicked"
    v-on:click="onClick"
    class="grid"
    v-bind:oncontextmenu="onRightClick"
  ></div>
  <div v-if="clicked" class="grid clicked">
    <span class="value">1</span>
  </div>
  <div v-if="rightClicked" class="grid clicked">
    <span class="value">fuck</span>
  </div>
</template>

<style scoped>
.grid {
  width: 3rem;
  height: 3rem;
  background: #a8d4ff;
  cursor: pointer;
  border: 1px solid;
  margin: -1px;
  box-shadow: 0 0 5px;
}

.clicked {
  background: cornflowerblue;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
}
.value {
  color: white;
}
</style>
