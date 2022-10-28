import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCart from '../../Shared/CourseSummaryCart/CourseSummaryCart';

const Courses = () => {
  const categoryData = useLoaderData();
  return (
    <div>
      <h2>Courses : {categoryData.length}</h2>
      {categoryData.map(data => (
        <CourseSummaryCart key={data._id} data={data}></CourseSummaryCart>
      ))}
    </div>
  );
};

export default Courses;
