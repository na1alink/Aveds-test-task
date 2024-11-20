import React from "react";
import commonStyles from "../../../styles/common.module.css";
import styles from "./ContactsPage.module.css";

const ContactsPage: React.FC = () => {
  return (
    <section className={styles.ContactsPage}>
      <div className={commonStyles.container}>
        <h1 className={styles.ContactsPage__title}>Контакты</h1>
      </div>
    </section>
  );
};

export default ContactsPage;
