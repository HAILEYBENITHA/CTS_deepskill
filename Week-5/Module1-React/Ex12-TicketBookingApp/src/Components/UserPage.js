import React from 'react';

// UserPage: only the logged-in user can book tickets.
function UserPage() {
  const flights = [
    { flightNo: 'AI-101', from: 'Chennai', to: 'Delhi', fare: 4500 },
    { flightNo: 'AI-202', from: 'Mumbai', to: 'Bengaluru', fare: 3200 },
    { flightNo: 'AI-303', from: 'Kolkata', to: 'Hyderabad', fare: 3800 }
  ];

  const bookTicket = (flightNo) => {
    alert('Ticket booked for flight ' + flightNo);
  };

  return (
    <div>
      <h2>Book Tickets (User View)</h2>
      <table>
        <thead>
          <tr>
            <th>Flight No</th>
            <th>From</th>
            <th>To</th>
            <th>Fare (Rs.)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((f) => (
            <tr key={f.flightNo}>
              <td>{f.flightNo}</td>
              <td>{f.from}</td>
              <td>{f.to}</td>
              <td>{f.fare}</td>
              <td>
                <button onClick={() => bookTicket(f.flightNo)}>Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;
