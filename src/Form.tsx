import React, { useState } from "react";
import style from "./Form.module.css";
import { Sub } from "./interfaces/types";
interface FormState {
  inputValues: Sub;
}

export default function Form() {
  const [input, setInput] = useState<FormState["inputValues"]>({
    nick: "",
    avatar: "",
    subMonths: 0,
    description: "",
  });

  const handleSubmit = () => {};
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={style.bodyForm}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nick"
          placeholder="nick"
          onChange={handleChange}
        />
        <input
          type="text"
          name="avatar"
          placeholder="avatar"
          onChange={handleChange}
        />
        <input
          type="number"
          name="subMonths"
          placeholder="subMonths"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <button>Save </button>
      </form>
    </div>
  );
}
