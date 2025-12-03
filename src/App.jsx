import Header from "./components/Header";
import Router from "./components/Router";

/**
 * Main application component.
 * Renders the Header and the Router for navigation.
 * @returns {JSX.Element} The rendered application component.
 */
function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}
export default App;
