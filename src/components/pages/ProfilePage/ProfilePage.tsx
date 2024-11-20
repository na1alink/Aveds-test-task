import React from "react";
import { Link } from "react-router-dom";
import { User } from "../../../types/User";
import Button from "../../ui/Button/Button";
import commonStyles from "../../../styles/common.module.css";
import styles from "./ProfilePage.module.css";
interface ProfilePageProps {
  user: User;
  onLogout: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onLogout }) => {
  return (
    <section className={styles.ProfilePage}>
      <div className={commonStyles.container}>
        <h1 className={styles.ProfilePage__title}>Привет, {user.name}!</h1>

        <div className={styles.ProfilePage__actions}>
          <Button
            onClick={onLogout}
            variant="secondary"
            className={styles.ProfilePage__logout}
          >
            Выйти из аккаунта
          </Button>
          <Link to="/contacts" className={styles.ProfilePage__link}>
            Перейти в контакты
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
