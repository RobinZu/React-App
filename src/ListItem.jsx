import React from 'react';
import { Link } from 'react-router-dom';

function ListItem({ student, onDelete }) {
  return (
    <li>
      <img src={student.img} alt={`${student.firstName} ${student.lastName}`} style={{ width: '100px', height: '100px' }} />
      <h2>{student.firstName} {student.lastName}</h2>
      <p>Country: {student.country}</p>
      <p>Status: {student.isStudent ? 'Student' : 'Not a Student'}</p>
      <Link to={`/item/${student.id}`}>View Details</Link>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default ListItem;
