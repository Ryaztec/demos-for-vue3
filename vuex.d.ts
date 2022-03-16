import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { sweepMinesStateType } from "./src/store/modules/sweepMines";

declare module "@vue/runtime-core" {
  // 声明自己的 store state
  interface State {
    sweepMines: sweepMinesStateType;
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
