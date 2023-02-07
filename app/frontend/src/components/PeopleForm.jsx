import React from "react";

function PeopleForm({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  participation,
  setParticipation,
  handleSubmit,
  editing, 
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Participation"
        value={participation}
        onChange={(e) => setParticipation(e.target.value)}
        required
      />
      <button type="submit">{editing ? "UPDATE" : "SEND"}</button>
    </form>
  );
}

export default PeopleForm;
