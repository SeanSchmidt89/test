import React from "react";
import styles from "./Luxury.module.css";

const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h2>Luxury Selection</h2>
        <div className={styles.text_bg}>
          <p>
            <span>Select from the top luxury vehicles to roll in style</span>
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2183&q=80" />
          <div className={styles.content}>
            <h3>Camero</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
          <div className={styles.content}>
            <h3>Porsch</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
          <div className={styles.content}>
            <h3>Mustang</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
