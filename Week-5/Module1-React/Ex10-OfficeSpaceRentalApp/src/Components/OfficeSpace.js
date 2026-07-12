import React from 'react';

// OfficeSpace component: uses React JSX to create elements, attributes and
// render the DOM. It declares office objects, loops through them and applies
// inline CSS (Rent color red if below 60000, green if above 60000).
function OfficeSpace() {
  // Heading element
  const heading = <h1>Office Space Rental</h1>;

  // Attribute to display the image of the office space
  const imageUrl =
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=400&q=60';

  // A single office object with Name, Rent and Address
  const office = {
    name: 'Tech Park Tower',
    rent: 75000,
    address: '123 Corporate Avenue, Chennai'
  };

  // A list of office objects
  const offices = [
    { name: 'Tech Park Tower', rent: 75000, address: '123 Corporate Avenue, Chennai' },
    { name: 'Business Bay', rent: 55000, address: '45 MG Road, Bengaluru' },
    { name: 'Skyline Hub', rent: 90000, address: '9 Sea Link Road, Mumbai' },
    { name: 'Metro Works', rent: 48000, address: '78 Ring Road, Delhi' }
  ];

  return (
    <div>
      {/* Element to display the heading of the page */}
      {heading}

      {/* Attribute to display the image of the office space */}
      <img className="office-image" src={imageUrl} alt="Office Space" />

      {/* Object of office to display Name, Rent and Address */}
      <div className="office-card">
        <h3>{office.name}</h3>
        {/* Inline CSS - rent in green if above 60000, red if below */}
        <p style={{ color: office.rent > 60000 ? 'green' : 'red', fontWeight: 'bold' }}>
          Rent: Rs. {office.rent}
        </p>
        <p>{office.address}</p>
      </div>

      {/* Loop through the list of office objects to display more data */}
      <div>
        {offices.map((item, index) => (
          <div className="office-card" key={index}>
            <h3>{item.name}</h3>
            <p
              style={{
                color: item.rent > 60000 ? 'green' : 'red',
                fontWeight: 'bold'
              }}
            >
              Rent: Rs. {item.rent}
            </p>
            <p>{item.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfficeSpace;
