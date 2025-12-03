import Nav from "./Nav";

/**
 * Header component that displays the application title and navigation menu.
 * @returns {JSX.Element} The rendered header component.
 */
function Header() {
  return (
    <header className="bg-white shadow mb-6">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Películas</h1>
        <Nav />
      </div>
    </header>
  );
}
export default Header;
