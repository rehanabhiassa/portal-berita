import { useState } from "react";
import axios from "axios";

import FormInput from "../elements/input";
import Button from "../elements/button";

const SignupForm = (props) => {
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordKonfirmation = e.target.passwordKonfirmation.value;

    if (passwordKonfirmation !== password) {
      setMessage("Konfirmasi kata sandi salah.");

      return e.target.passwordKonfirmation.focus();
    }

    axios.post("http://localhost:9000/signup", {
      name,
      username,
      email,
      password,
    });

    location.replace("/signin");
  };

  return (
    <>
      <form onSubmit={handleSignup} className="flex flex-col gap-5">
        <FormInput label="Nama" type="text" name="name" placeholder="Nama" />
        <FormInput
          label="Nama Pengguna"
          type="text"
          name="username"
          placeholder="Nama pengguna"
        />
        <FormInput
          label="Alamat Email"
          type="email"
          name="email"
          placeholder="Alamat email"
        />
        <FormInput
          label="Buat Password"
          type="password"
          name="password"
          placeholder="Buat password"
        />
        <FormInput
          label="Konfirmasi Password"
          type="password"
          name="passwordKonfirmation"
          placeholder="Konfirmasi password"
        />
        <p className="text-sm font-normal text-red-600">{message}</p>
        <Button>Daftar</Button>
      </form>
    </>
  );
};

export default SignupForm;
