import styles from "./create.module.css";

// Create 페이지의 틀
export default function Layout({ children }) {
  console.log("Create 레이아웃 작동");

  return (
    <form>
      <h2 className={styles.title}>Create Page</h2>
      {/* page.js 불러오기: Create 페이지의 알맹이 */}
      {children}
    </form>
  );
}
