import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.page}>
      <h1>Web Technologies I</h1>
      <p>Welcome 👋</p>

      <div className={styles.card}>
        <p>
          <strong>Name:</strong> Your Name Here
        </p>
        <p>
          <strong>Section:</strong> 1 or 2
        </p>
        <p>
          <strong>Project:</strong> Your Project Name
        </p>
      </div>
    </div>
  );
}
