import React from "react";
import Button from "../../ui/Button/Button";
import { Link } from "react-router-dom";

interface User {
  login: string;
  password: string;
  name: string;
}

interface ProfilePageProps {
  user: User;
  onLogout: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onLogout }) => {
  return (
    <div>
      <p>Привет, {user.name}!</p>

      <div>
        <Button onClick={onLogout}>Выйти из аккаунта</Button>
        <Link to="/contacts">Перейти в контакты</Link>
      </div>
    </div>
  );
};

export default ProfilePage;
