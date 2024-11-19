import React, { useState } from "react";
import Modal from "../../ui/Modal/Modal";
import LoginForm from "../../ui/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import { User } from "../../../types/User";
import commonStyles from "../../../styles/common.module.css";
import styles from "./HomePage.module.css";
import Button from "../../ui/Button/Button";

interface HomePageProps {
  onLogin: (user: User) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onLogin }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = (user: User) => {
    onLogin(user);
    setIsModalOpen(false);
  };

  return (
    <section className={styles.HomePage}>
      <div className={commonStyles.container}>
        <h1 className={styles.HomePage__title}>
          Место для получения медицинской помощи
        </h1>
        <div className={styles.HomePage__action}>
          <Button
            onClick={() => setIsModalOpen(true)}
            className={styles.HomePage__button}
            variant="secondary"
          >
            Войти
          </Button>
          <Link to="/contacts" className={styles.HomePage__link}>
            Контакты
          </Link>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <LoginForm onLogin={handleLogin} />
          </Modal>
        </div>
        <div className={styles.HomePage__advantages}>advantages</div>
      </div>
    </section>
  );
};

export default HomePage;
