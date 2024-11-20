import React from "react";
import styles from "./AdvantagesList.module.css";

import onlineReception from "../../../assets/images/online-reception.svg";
import anEmergency from "../../../assets/images/an-emergency.svg";
import cancerTreatment from "../../../assets/images/cancer-treatment.svg";

const advantagesData = [
  {
    image: onlineReception,
    title: "Онлайн-прием",
    text: "Рыба текст",
  },
  {
    image: anEmergency,
    title: "Экстренный Случай",
    text: "Рыба текст",
  },
  {
    image: cancerTreatment,
    title: "Лечение рака",
    text: "Рыба текст",
  },
];

const AdvantagesList: React.FC = () => {
  return (
    <ul className={styles.AdvantagesList}>
      {advantagesData.map((advantage, index) => (
        <li key={index} className={styles.AdvantagesList__item}>
          <div className={styles.AdvantagesList__itemTop}>
            <img src={advantage.image} alt={advantage.title} />
          </div>

          <div className={styles.AdvantagesList__itemWrap}>
            <h2 className={styles.AdvantagesList__itemTitle}>
              {advantage.title}
            </h2>
            <div className={styles.AdvantagesList__itemSeparator}></div>
            <p className={styles.AdvantagesList__itemText}>{advantage.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AdvantagesList;
