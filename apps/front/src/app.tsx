import logo from "/logo.png";
import "./styles.css";
import { useState } from "react";
import type { Employee } from "./types";
import { defaultData } from "./defaultData";
import CreateEmployee from "./components/create-form";
import Datatable from "@wewiil/datatable";

function App() {
  const [employees, setEmployee] = useState<Employee[]>([]);
  const [view, setView] = useState("create");

  return (
    <>
      <header>
        <a href="https://hr.net" target="_blank">
          <img src={logo} className="m-auto" alt="HRnet logo" />
        </a>
      </header>
      <h1 className="text-(--main-color)">HRnet</h1>
      <main className="">
        {view === "create" && (
          <>
            <a onClick={() => setView("list")}>View Current Employees</a>

            <h2>Create Employee</h2>
            <CreateEmployee
              onCreate={(newEmployee) =>
                setEmployee((employees) => [...employees, newEmployee])
              }
            />
          </>
        )}
        {view === "list" && (
          <>
            <h2>Current Employees</h2>
            <Datatable
              data={employees}
              columns={[
                {
                  header: "First Name",
                  key: "firstName",
                },
                {
                  header: "Last Name",
                  key: "lastName",
                },
                {
                  header: "Date of Birth",
                  key: "dateOfBirth",
                },
                {
                  header: "Start Date",
                  key: "startDate",
                },
                {
                  header: "Street",
                  key: "street",
                },
                {
                  header: "City",
                  key: "city",
                },
                {
                  header: "State",
                  key: "state",
                },
                {
                  header: "Zip Code",
                  key: "zipCode",
                },
                {
                  header: "Department",
                  key: "department",
                },
              ]}
            />
            <button onClick={() => setEmployee(defaultData)}>
              Fake Employees
            </button>
            <button onClick={() => setEmployee([])}>Flush Employees</button>
            <div className="h-2" />
            <a onClick={() => setView("create")}>Home</a>
          </>
        )}
      </main>
      <footer className="">©HRnet</footer>
    </>
  );
}

export default App;
