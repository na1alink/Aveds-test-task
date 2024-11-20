import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../ui/Modal/Modal";
import LoginForm from "../../ui/LoginForm/LoginForm";
import { User } from "../../../types/User";
import Button from "../../ui/Button/Button";
import styles from "./Header.module.css";

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
  onLogin: (user: User) => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout, onLogin }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsModalOpen(false);
    navigate("/profile");
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link
          to={isLoggedIn ? "/profile" : "/"}
          className={styles.header__logo}
        >
          logo
        </Link>
        <nav className={styles.header__nav}>
          <Link to="/contacts" className={styles.header__link}>
            Контакты
          </Link>
          {isLoggedIn ? (
            <Button
              onClick={onLogout}
              variant="primary"
              className={styles.header__button}
            >
              Выход
            </Button>
          ) : (
            <Button
              onClick={handleLoginClick}
              variant="primary"
              className={styles.header__button}
            >
              Войти
            </Button>
          )}
        </nav>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <LoginForm onLogin={onLogin} onSuccess={handleLoginSuccess} />
        </Modal>
      </div>
    </header>
  );
};

export default Header;
