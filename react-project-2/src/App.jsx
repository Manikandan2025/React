import React from "react";
import Card from "./Component/Card";

const App = () => {
  let name = "Manikandan";
  let age = 21;
  let skills = [
    "HTML",
    "CSS",
    " JavaScript",
    "React",
    "nodeJS",
    "ExpressJS",
    "MongoDB",
    "java",
    "Python",
    "C",
  ];

  let players = [
    { name: "Rohit Sharma", player_number: 16 },
    { name: "Virat Kohli", player_number: 18 },
    { name: "Jasprit Bumrah", player_number: 10 },
    { name: "Ravindra Jadeja", player_number: 8 },
    { name: "Hardik Pandya", player_number: 33 },
  ];

  return (
    <>
      <div>
        <h1>My name is {name}</h1>
        <h2>My age is {age}</h2>
        <h3>My skills are:</h3>
        {skills.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </div>

      <div className="card-container">
        {players.map((ele, index) => {
          return (
            <Card name={ele.name} number={ele.player_number} key={index} />
          );
        })}
      </div>
    </>
  );
};

export default App;
