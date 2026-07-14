import React from 'react';

// Course Details component - uses the map() function and keys.
function CourseDetails() {
  const courses = [
    { id: 1, name: 'React Fundamentals', duration: '4 weeks' },
    { id: 2, name: 'Advanced JavaScript', duration: '3 weeks' },
    { id: 3, name: 'Full Stack with Java', duration: '8 weeks' }
  ];

  return (
    <div className="card">
      <h2>Course Details</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <strong>{course.name}</strong> - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
