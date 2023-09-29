import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/SideBar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Autor 1"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam molestiae cumque nulla fugit? Distinctio vel maxime quibusdam? Aut nostrum, ducimus temporibus architecto odio consectetur reiciendis porro illum? Quisquam, quidem laborum."
          />

          <Post
            author="Autor 2"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam molestiae cumque nulla fugit? Distinctio vel maxime quibusdam? Aut nostrum, ducimus temporibus architecto odio consectetur reiciendis porro illum? Quisquam, quidem laborum."
          />
        </main>
      </div>
    </div>
  );
}
