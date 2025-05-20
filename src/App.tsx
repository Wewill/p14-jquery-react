import logo from "/logo.png";
import "./App.css";
import Create from "./components/create";
import Employees from "./components/employees";

function App() {
  return (
    <>
      <header>
        <a href="https://hr.net" target="_blank">
          <img src={logo} className="logo" alt="HRnet logo" />
        </a>
      </header>
      <h1 className="text-blue-500">HRnet</h1>
      <main className="">
        <Create />
        <Employees />
      </main>
      <footer className="">©HRnet</footer>
    </>
  );
}

export default App;
