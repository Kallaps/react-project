import React from "react";
import "../App.css";

const Section = ({ users }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>lastname</th>
            <th>age</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td className="td">{item.name}</td>
              <td className="td">{item.lastName}</td>
              <td className="td">{item.age}</td>
              <td className="td">{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Section;
