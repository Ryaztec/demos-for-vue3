import { createStore, createLogger } from "vuex";
import sweepMines from "./modules/sweepMines";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    sweepMines,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
