import styles from "./styles.css";

import { UIController } from "./controller/UIController";
import { Header } from "./component/Header";

document.addEventListener("DOMContentLoaded", () => {
  const app = new UIController();

  app.init();
});
