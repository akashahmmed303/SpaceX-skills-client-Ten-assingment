import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/faq-courses')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div>
      <h4>All Courses : {courses.length}</h4>
      <div>
        {courses.map(cs => (
          <p key={cs.id}>
            <small>
              <Link to={`/courses/${cs.id}`}>{cs.name}</Link>
            </small>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
