import React from "react";

function CourseDetails() {
  const courses = [
    { id: 1, name: "React Basics", duration: "3 Weeks" },
    { id: 2, name: "Advanced JS", duration: "4 Weeks" }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name} - <strong>{course.duration}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
