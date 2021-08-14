import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CartT = () => {
  let history = useLocation();
  const [data, setData] = useState(history.state.booked);

  const cancelClass = (index) => {
    const updateClass = data.filter((v) => {
      return v.id !== index;
    });
    setData(updateClass);
  };

  console.log(data);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr className="tableRow" style={{ padding: "100px" }}>
            <th className="tableRow" style={{ paddingInline: "60px" }}>
              Subject
            </th>
            <th className="tableRow" style={{ paddingInline: "60px" }}>
              Date
            </th>
            <th className="tableRow" style={{ paddingInline: "60px" }}>
              Time
            </th>
            <th className="tableRow" style={{ paddingInline: "60px" }}>
              Available
            </th>
          </tr>
        </thead>
        {data &&
          data.map((v) => {
            return (
              <tbody>
                <tr>
                  <td>{v.name}</td>
                  <td>{v.date}</td>
                  <td>{v.time}</td>
                  <td>{v.available} Seats available</td>
                  <td>
                    <button
                      className="cancel"
                      onClick={() => cancelClass(v.id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </Table>
    </div>
  );
};

export default CartT;
