import logo from "/logo.png";
import "./App.css";
import Create from "./components/create-form";
import Datatable from "table";

import defaultData from "./defaultData";

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

        <h2>Current Employees</h2>
        <Datatable
          data={defaultData}
          columns={[
            {
              header: "First Name",
              accessorKey: "firstName",
            },
            {
              header: "Last Name",
              accessorKey: "lastName",
            },
            {
              header: "Date of Birth",
              accessorKey: "dateOfBirth",
            },
            {
              header: "Start Date",
              accessorKey: "startDate",
            },
            {
              header: "Street",
              accessorKey: "street",
            },
            {
              header: "City",
              accessorKey: "city",
            },
            {
              header: "State",
              accessorKey: "state",
            },
            {
              header: "Zip Code",
              accessorKey: "zipCode",
            },
            {
              header: "Department",
              accessorKey: "department",
            },
          ]}
        />
      </main>
      <footer className="">©HRnet</footer>
    </>
  );
}

export default App;
