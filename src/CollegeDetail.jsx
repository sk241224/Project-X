import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./CollegeDetail.css"

function CollegeDetail() {
  const { id } = useParams(); // Extract the college ID from the URL
  const [college, setCollege] = useState(null);

  useEffect(() => {
    // Fetch the college data based on the id
    const fetchCollege = async () => {
      // Replace this with your actual data fetching logic
      const response = await fetch(`/api/colleges/${id}`);
      const data = await response.json();
      setCollege(data);
    };

    fetchCollege();
  }, [id]);

  if (!college) {
    return <div>Loading...</div>; // Show loading state while the data is being fetched
  }

  return (
    <div className="college-detail">
      <h1>{college.name}</h1>
      <img src={college.image} alt={college.name} />
      <p>{college.city}, {college.state}</p>
      <p>{college.description}</p>
      {/* Render other details about the college */}
    </div>
  );
}

export default CollegeDetail;
