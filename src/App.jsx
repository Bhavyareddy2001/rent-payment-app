import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [rent, setRent] = useState(0);
  const [months, setMonths] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const toggleMonth = (month) => {
    setMonths((prev) =>
      prev.includes(month)
        ? prev.filter((m) => m !== month)
        : [...prev, month]
    );
  };

  const total = rent * months.length;
  const resetForm = () => {
    setName("");
    setPhone("");
    setRent(0);
    setMonths([]);
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">
        Smart Rent Payment Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl text-center">
          <p>Total Months</p>
          <h2 className="text-xl font-bold">{months.length}</h2>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl text-center">
          <p>Rent / Month</p>
          <h2 className="text-xl font-bold">₹{rent}</h2>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl text-center">
          <p>Total Amount</p>
          <h2 className="text-xl font-bold">₹{total}</h2>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl max-w-xl mx-auto">
        <h2 className="text-xl mb-4">Tenant Details</h2>

        <input
          type="text"
          placeholder="Tenant Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-3 rounded text-black"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 mb-3 rounded text-black"
        />
        <input
          type="number"
          placeholder="Rent Amount"
          className="w-full p-2 mb-4 rounded text-black"
          onChange={(e) => setRent(Number(e.target.value))}
        />

        {/* Month Selection */}
        <div className="flex gap-3 mb-4">
          {["Previous", "Current", "Next"].map((m) => (
            <button
              key={m}
              onClick={() => toggleMonth(m)}
              className={`px-4 py-2 rounded ${months.includes(m)
                  ? "bg-green-500"
                  : "bg-white/20 hover:bg-white/40"
                }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="flex gap-3 mb-4">
          <button className="bg-white/20 px-3 py-2 rounded">UPI</button>
          <button className="bg-white/20 px-3 py-2 rounded">Card</button>
          <button className="bg-white/20 px-3 py-2 rounded">NetBanking</button>
        </div>

        {/* Pay Button */}
        <button
          onClick={() => setShowSuccess(true)}
          className="w-full bg-green-500 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Pay ₹{total}
        </button>
      </div>

      {/* Success Animation */}
      {showSuccess && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center"
        >
          <div className="bg-white text-black p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-2">Payment Successful 🎉</h2>
            <p>Thank you!</p>
            <button
              onClick={() => {
                setShowSuccess(false);
                resetForm();
              }}
              className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>

  );
}
<div className="bg-red-500 text-white p-4">Tailwind Test</div>