import logo from "/logo.png";
import "./styles.css";
import { useState } from "react";
import type { Employee } from "./types";
import { defaultData } from "./defaultData";
import CreateEmployee from "./components/create-form";
import Datatable from "table";

function App() {
  const [employees, setEmployee] = useState<Employee[]>([]);

  return (
    <>
      <header>
        <a href="https://hr.net" target="_blank">
          <img src={logo} className="logo" alt="HRnet logo" />
        </a>
      </header>
      <h1 className="text-blue-500">HRnet</h1>
      <main className="">
        <h2>Create Employee</h2>
        <CreateEmployee
          onCreate={(newEmployee) =>
            setEmployee((employees) => [...employees, newEmployee])
          }
        />
        <button onClick={() => setEmployee(defaultData)}>Fake Employees</button>
        <button onClick={() => setEmployee([])}>Flush Employees</button>

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
      </main>
      <footer className="">©HRnet</footer>
    </>
  );
}

export default App;
