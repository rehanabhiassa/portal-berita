import { useState } from "react";
import axios from "axios";

import FormInput from "../elements/input";
import Button from "../elements/button";

const SigninForm = (props) => {
  const [message, setMessage] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:9000/signin", {
      username,
      password,
    });

    if (response.data.status === 404) {
      setMessage(response.data.message);

      e.target.username.focus();
    } else if (response.data.status === 401) {
      setMessage(response.data.message);

      e.target.password.focus();
    } else {
      setMessage("");

      localStorage.setItem("id", response.data.data.id);
      localStorage.setItem("username", response.data.data.username);
      localStorage.setItem("name", response.data.data.name);
      localStorage.setItem("email", response.data.data.email);

      location.replace("/home");
    }
  };

  return (
    <>
      <form onSubmit={handleSignin} className="flex flex-col gap-5">
        <FormInput
          label="Nama Pengguna"
          type="text"
          name="username"
          placeholder="Nama pengguna"
        />
        <FormInput
          label="Kata Sandi"
          type="password"
          name="password"
          placeholder="Kata sandi"
        />
        <p className="text-sm font-normal text-red-600">{message}</p>
        <Button>Masuk</Button>
      </form>
    </>
  );
};

export default SigninForm;
