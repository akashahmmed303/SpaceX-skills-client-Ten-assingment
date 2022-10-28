import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
  const data = useLoaderData();
  return (
    <div>
      <h2>Courses : {data.length}</h2>
    </div>
  );
};

export default Courses;
