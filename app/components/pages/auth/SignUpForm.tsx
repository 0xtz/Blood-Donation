"use client";

import { User } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

function SignUpForm() {
  const [user, setUser] = useState<User>({
    id: "",
    cin: "",

    last_name: "",
    first_name: "",
    email: "",
    dob: new Date(),
    address: "",
    city: "",
    phone_number: "",
    blood_type: "",

    password: "",
  });
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await fetch("/api/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .catch((err) => {
        toast.error(`Error: ${err}`);
      })
      .then((res) => {
        if (res?.status === 200) {
          toast.success("Account created successfully");
          window.location.href = "/auth/signin";
        } else {
          toast.error("Error: " + res?.statusText);
        }
      });
  };

  return (
    <form className="form__signup">
      <h1 className="form__title underline">Sign Up</h1>
      {/*  ---------------  */}
      <input
        className="form__input"
        type="text"
        value={user.cin}
        placeholder="CIN"
        onChange={(e) => setUser({ ...user, cin: e.target.value })}
      />
      <div className="flex flex_culmn">
        <input
          className="form__input"
          type="text"
          value={user.first_name}
          placeholder="Fist Name"
          onChange={(e) => setUser({ ...user, first_name: e.target.value })}
        />
        <input
          className="form__input"
          type="text"
          value={user.last_name}
          placeholder="Last Name"
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}
        />
      </div>
      <input
        className="form__input"
        type="text"
        value={user.email}
        placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        className="form__input"
        type="date"
        // value={user.dob}
        placeholder="Date of Birth"
        onChange={(e) => {
          console.log(e.target.valueAsDate);
          setUser({
            ...user,
            // @ts-ignore
            dob: e.target.valueAsDate ? e.target.valueAsDate : new Date(),
          });
        }}
      />
      <input
        className="form__input"
        type="text"
        value={user.city}
        placeholder="City"
        onChange={(e) => setUser({ ...user, city: e.target.value })}
      />

      <input
        className="form__input"
        type="phone"
        value={user.phone_number}
        placeholder="Phone Number"
        onChange={(e) => setUser({ ...user, phone_number: e.target.value })}
      />
      <select
        className="form__input"
        onChange={(e) => setUser({ ...user, blood_type: e.target.value })}>
        <option value="">- Select your blood type -</option>
        {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((blood) => (
          <option key={blood} value={blood}>
            {blood}
          </option>
        ))}
      </select>
      <input
        className="form__input"
        type="password"
        value={user.password}
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <input
        className="form__input"
        type="password"
        value={password}
        placeholder="Confirm Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex_column tos">
        {/* tos */}
        <input type="checkbox" name="tos" id="checkbox" />
        <label htmlFor="checkbox" className="color-stroke">
          I agree to the terms and conditions
        </label>
      </div>
      {/*  ---------------  */}
      <button className="button__primary form__button" onClick={handleSubmit}>
        Sign In
      </button>
      {/* you dont have an account ? sign up */}
      <span className="color-stroke">You already have an account ?</span>
      <Link href="/auth/signup" className="button__secondary form__button">
        Sign Up
      </Link>
    </form>
  );
}

export default SignUpForm;
