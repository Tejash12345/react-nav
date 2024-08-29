import axios from "axios";
import { FormEvent, useState } from "react";
import React from "react";
import './products.css'; // Import your custom CSS file if it's named products.css

// AddEmp Component
export function AddEmp() {
  const [userName, setUserName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [salary, setSalary] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log("submit clicked....");
    console.log(userName);
    console.log(orgName);
    console.log(salary);
    console.log(phone);

    const empjson = { userName, orgName, salary, phone };

    axios.post("http://localhost:9090/mtz/emp/add", empjson).then((res) => {
      console.log(res);
    });
  };

  const getUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleOrg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrgName(e.target.value);
  };

  const handleSalary = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(e.target.value);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    <div className="add-emp-container">
      <h2>Add New products</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name of the product</label>
          <input
            name="userName"
            type="text"
            value={userName}
            onChange={getUserName}
            className="form-control"
            placeholder="enter user name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Company Name of product</label>
          <input
            name="orgname"
            value={orgName}
            type="text"
            onChange={handleOrg}
            className="form-control"
            placeholder="enter org name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price of the product</label>
          <input
            name="salary"
            value={salary}
            type="number"
            onChange={handleSalary}
            className="form-control"
            placeholder="enter salary"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            name="phone"
            value={phone}
            type="text"
            onChange={handlePhone}
            className="form-control"
            placeholder="enter user phone number"
          />
        </div>
        <div className="col-auto">
          <button onClick={handleSubmit} className="btn btn-primary mb-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

// Products Component
export default function Products() {
  return (
    <div>
      <AddEmp /> {/* Include the AddEmp component here */}
    </div>
  );
}
