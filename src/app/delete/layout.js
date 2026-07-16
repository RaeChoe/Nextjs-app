// Create 페이지의 틀
export default function Layout({ children }) {
  console.log(children);

  return (
    <form>
      <h2>Delete Page</h2>
      {/* page.js 불러오기: Create 페이지의 알맹이 */}
      {children}
    </form>
  );
}
