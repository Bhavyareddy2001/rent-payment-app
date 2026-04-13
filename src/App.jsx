import { useState } from "react";

function App() {
  const [rent, setRent] = useState("");
  const [month, setMonth] = useState("");
  const [history, setHistory] = useState([]);

  const handleAdd = () => {
    if (!rent || !month) return alert("Enter all fields");

    const newEntry = {
      id: Date.now(),
      rent,
      month,
    };

    setHistory([newEntry, ...history]);
    setRent("");
    setMonth("");
  };

  const handleDelete = (id) => {
    setHistory(history.filter((item) => item.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>💸 Smart Rent Tracker</h1>

      <div style={styles.card}>
        <input
          type="text"
          placeholder="Enter Month (e.g. April)"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Enter Rent Amount"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleAdd} style={styles.button}>
          Add Payment
        </button>
      </div>

      <h2>📜 Payment History</h2>

      {history.length === 0 ? (
        <p>No payments yet</p>
      ) : (
        history.map((item) => (
          <div key={item.id} style={styles.item}>
            <span>
              {item.month} - ₹{item.rent}
            </span>
            <button onClick={() => handleDelete(item.id)} style={styles.delete}>
              ❌
            </button>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    fontFamily: "Arial",
  },
  card: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px auto",
    padding: "10px",
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  delete: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default App;