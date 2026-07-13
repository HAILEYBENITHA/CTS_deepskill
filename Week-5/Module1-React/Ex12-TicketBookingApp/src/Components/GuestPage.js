import React from 'react';

// GuestPage: the guest user can browse the page where the flight details are
// displayed, but cannot book tickets.
function GuestPage() {
  const flights = [
    { flightNo: 'AI-101', from: 'Chennai', to: 'Delhi', fare: 4500 },
    { flightNo: 'AI-202', from: 'Mumbai', to: 'Bengaluru', fare: 3200 },
    { flightNo: 'AI-303', from: 'Kolkata', to: 'Hyderabad', fare: 3800 }
  ];

  return (
    <div>
      <h2>Available Flights (Guest View)</h2>
      <table>
        <thead>
          <tr>
            <th>Flight No</th>
            <th>From</th>
            <th>To</th>
            <th>Fare (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((f) => (
            <tr key={f.flightNo}>
              <td>{f.flightNo}</td>
              <td>{f.from}</td>
              <td>{f.to}</td>
              <td>{f.fare}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Please login to book tickets.</p>
    </div>
  );
}

export default GuestPage;
