import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const PeopleChart = (people) => {
const arrayPeople = Object.values(people)[0]
// console.log(arrayPeople);
  const data = {
    labels: arrayPeople.map((person) => `${person.firstName} ${person.lastName}`),
    datasets: [
      {
        data: arrayPeople.map((person) => person.participation),
        backgroundColor: [
          'rgb(56, 151, 222)',
          'rgb(60, 188, 155)',
          'rgb(233, 74, 52)',
          'rgb(156, 85, 184)',
          'rgb(188, 194, 199)',
        ],
        hoverOffset: 4
      }
    ]
}

  return (
    <>
      <Doughnut className="doughnut-chart" data={data} />
    </>

  );
};

export default PeopleChart;
