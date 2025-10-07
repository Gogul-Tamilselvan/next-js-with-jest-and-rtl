"use client"

import { useState } from "react";

export default function FormInsert({ submitfn }) {
const [disable, setdisable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setdisable(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    submitfn(data);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Enter name" />
        <input name="password" type="text" placeholder="Enter a password" />
        <button disabled={disable}  type="submit">{disable?"Submitting the data...":"Submit"}</button>
      </form>
    </div>
  );
}
