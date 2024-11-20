import React, { useState } from "react";
import users from "../../../data/users.json";
import { User } from "../../../types/User";
import styles from "./LoginForm.module.css";
import Button from "../Button/Button";

interface LoginFormProps {
  onLogin: (user: User) => void;
  onSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onSuccess }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Пароль должен быть не менее 8 символов");
      return;
    }

    const user = users.find(
      (u) => u.login === login && u.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      onLogin(user);
      onSuccess();
    } else {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Логин"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        className={styles.form__input}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.form__input}
      />
      {error && <div className={styles.form__error}>{error}</div>}
      <Button type="submit" variant="secondary" className={styles.form__button}>
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
