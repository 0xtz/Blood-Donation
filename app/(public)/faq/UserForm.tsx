"use client";
import React, { useState, useEffect, useRef } from "react";

export default function UserForm() {
  const [userSearch, setUserSearch] = useState("");
  const inputRef = useRef();

  const submitHandler = (e: any) => {
    setUserSearch(
      // @ts-ignore
      inputRef.current!.value
    );
    inputRef.current.value = "";
  };
  return (
    <>
      <br />
      <label htmlFor="name">Name : </label>
      <input type="text" ref={inputRef} />
      <br />
      <br />
      <button onClick={submitHandler} className="button__primary">
        Submit
      </button>
      <p>{userSearch}</p>
    </>
  );
}
