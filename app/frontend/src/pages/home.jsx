import React, { useState, useEffect } from "react";
import PeopleList from "../components/PeopleTable";
import PeopleForm from "../components/PeopleForm";
import PeopleChart from "../components/chart";
import axios from "axios";

function App() {
  const [people, setPeople] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [participation, setParticipation] = useState();
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);

useEffect(() => {
  async function fetchData() {
    const response = await axios.get("http://localhost:3001/");
    setPeople(response.data);
  } 

  const intervalId = setInterval(fetchData, 1000);

  return () => {
    clearInterval(intervalId);
  };
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editing) {
      await axios.post("http://localhost:3001/", {
        firstName,
        lastName,
        participation,
      });
      setPeople([...people, { id: people.length + 1, firstName, lastName, participation }]);
    } else {
      await axios.put(`http://localhost:3001/${id}`, {
        firstName,
        lastName,
        participation,
      });
      const updatedPeople = people.map((person) =>
        person.id === id ? { ...person, firstName, lastName, participation } : person
      );
      setPeople(updatedPeople);
      setEditing(false);
    }
    setFirstName("");
    setLastName("");
    setParticipation(0);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/${id}`);
    setPeople(people.filter((person) => person.id !== id));
  };

  const handleEdit = (person) => {
    setEditing(true);
    setFirstName(person.firstName);
    setLastName(person.lastName);
    setParticipation(person.participation);
    setId(person.id);
  };

  function TotalParticipation({ people }) {
    const total = Number(people.reduce((sum, person) => parseInt(sum) + parseInt(person.participation), 0));
    if(parseInt(total) <= 100) return <h4>Total Participation: {parseInt(total)}%</h4>;
    if(parseInt(total) > 100) return <h4 style={{color: 'red'}} >Total Participation: {parseInt(total)}% <h3>Participação maior que 100%</h3> </h4>;
  }
  return (
    <div>
      <PeopleForm
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        participation={participation}
        setParticipation={setParticipation}
        handleSubmit={handleSubmit}
        editing={editing}
        people={people}
      />
      <div className="info">
        <h3>DATA</h3>
        CRUD completo com integração MYSQL gerando uma tabela e gráfico dinâmico
      </div>
      <div className="container">
      <PeopleList people={people} handleDelete={handleDelete} handleEdit={handleEdit} />
      <PeopleChart people={people} />
      </div>
      <section className="total">
        <TotalParticipation people={people} />
      </section>
    </div>
  );
}

export default App;