import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const flights = [
    { id: 1, airline: "Air India", from: "Chennai", to: "Delhi", time: "10:30 AM" },
    { id: 2, airline: "IndiGo", from: "Bangalore", to: "Mumbai", time: "12:45 PM" },
    { id: 3, airline: "SpiceJet", from: "Kolkata", to: "Hyderabad", time: "4:00 PM" }
  ];

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>

      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <UserPage flights={flights} />
        </>
      ) : (
        <>
          <button onClick={handleLogin}>Login</button>
          <GuestPage flights={flights} />
        </>
      )}
    </div>
  );
}

function GuestPage({ flights }) {
  return (
    <div className="page">
      <h2>Welcome Guest</h2>
      <p>Please log in to book tickets.</p>
      <FlightList flights={flights} canBook={false} />
    </div>
  );
}

function UserPage({ flights }) {
  return (
    <div className="page">
      <h2>Welcome User</h2>
      <p>You can now book tickets.</p>
      <FlightList flights={flights} canBook={true} />
    </div>
  );
}

function FlightList({ flights, canBook }) {
  return (
    <div className="flight-list">
      {flights.map((flight) => (
        <div key={flight.id} className="flight-card">
          <p><strong>{flight.airline}</strong></p>
          <p>{flight.from} ➡️ {flight.to}</p>
          <p>Time: {flight.time}</p>
          {canBook && <button className="book-btn">Book Ticket</button>}
        </div>
      ))}
    </div>
  );
}

export default App;
