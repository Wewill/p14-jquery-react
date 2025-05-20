export default function Create() {
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const dateOfBirth = formData.get("dateOfBirth") as string;
    const startDate = formData.get("startDate") as string;
    const street = formData.get("street") as string;
    const city = formData.get("city") as string;
    const state = formData.get("state") as string;
    const zipCode = formData.get("zipCode") as string;
    const department = formData.get("department") as string;
    const employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department,
    };

    return employee;
  };

  return (
    <>
      <h2>Create Employee</h2>
      <form className="w-1/3" onSubmit={handleCreate}>
        <fieldset id="contact" className="grid">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="firstName" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="lastName" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="text" name="dateOfBirth" />

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text" name="startDate" />
        </fieldset>

        <fieldset id="address" className="grid">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" name="street" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" name="city" />

          <label htmlFor="state">State</label>
          <select name="state" id="state"></select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" name="zipCode" />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>
    </>
  );
}
