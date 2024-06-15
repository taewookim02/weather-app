import styles from "./styles.css";

import { UIController } from "./controller/UIController";

document.addEventListener("DOMContentLoaded", () => {
  const app = new UIController();

  app.init();
});
