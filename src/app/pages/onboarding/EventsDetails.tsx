import React from 'react';

interface EventDetailsProps {
  title: string;
  location: string;
  date: string;
  image: string;
  onBack: () => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({ title, location, date, image, onBack }) => {
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={onBack} style={{ marginBottom: '20px', padding: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>
        Back
      </button>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }} />
      <h1>{title}</h1>
      <p>{location}</p>
      <p>{date}</p>
    </div>
  );
};

export default EventDetails;