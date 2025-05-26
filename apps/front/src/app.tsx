import logo from "/logo.png";
import "./styles.css";
import { useState, Suspense, lazy } from "react";
import type { Employee } from "./types";
// import { defaultData } from "./defaultData";
import CreateEmployee from "./components/create-form";
// import Datatable from "@wewiil/datatable";

// const CreateEmployee = lazy(() => import("./components/create-form"));
const Datatable = lazy(() => import("@wewiil/datatable"));
const CreateDefaultData =
  import.meta.env.DEV && lazy(() => import("./components/create-default-data"));

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
        <Suspense fallback={<div>Loading...</div>}>
          {view === "create" && (
            <>
              <button type="button" onClick={() => setView("list")}>
                View Current Employees
              </button>

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
              {CreateDefaultData && (
                <CreateDefaultData
                  onClick={(defaultData) => setEmployee(defaultData)}
                />
              )}
              <button type="button" onClick={() => setEmployee([])}>
                Flush Employees
              </button>
              <div className="h-2" />
              <button type="button" onClick={() => setView("create")}>
                Home
              </button>
            </>
          )}
        </Suspense>
      </main>
      <footer className="">©HRnet</footer>
    </>
  );
}

export default App;
