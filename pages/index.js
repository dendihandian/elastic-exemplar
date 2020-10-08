import Layout from "../hoc/Layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <p>Inside Layout</p>
      </Layout>
    </div>
  );
}
