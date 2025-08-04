import React from "react";
import "./App.css";

function App() {
  const offices = [
    {
      name: "Business Bay",
      rent: 60000,
      address: "OMR Road, Chennai",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJvCdxRgAjQ0HNrHEgHg33md0JIXDT-TB8pA&s"
    },
    {
      name: "TechPark Suites",
      rent: 55000,
      address: "Tidel Park, Chennai",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYpnXSCvQ7jY_eaxFvvfqd3t4rRQpYoMlYzg&s"
    },
    {
      name: "SkyView Towers",
      rent: 75000,
      address: "Anna Salai, Chennai",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOoOejSoDTmiO01lDA_RubrFuSD0_2RLTM9Q&s"
    }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental App</h1>

      {offices.map((office, index) => (
        <div key={index} className="office-card">
          <h2>{office.name}</h2>
          <img src={office.image} alt={office.name} className="office-image" />
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
