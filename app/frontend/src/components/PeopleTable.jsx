import React from "react";

function PeopleList({ people, handleDelete, handleEdit }) {
      return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Participation</th>
            <th>Delete</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.participation}%</td>
              <td>
                <button onClick={() => handleDelete(person.id)} className="delete-button">
                  X
                </button>
              </td>
              <td>
                <button onClick={() => handleEdit(person)} className="edit-button">
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default PeopleList;
