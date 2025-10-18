import { Header } from "./Header";

const Sidebar = () => {
  return (
    <aside className="bg-red-500 h-screen overflow-hidden">
      <Header />
      <nav>
        <ul>
          <li>Dashboard</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
