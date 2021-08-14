import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
import { generateTimeTable } from "./Timetable";
import "bootstrap/dist/css/bootstrap.min.css";

const TableDis = () => {
  const seat = 5;
  const [counter, setCounter] = useState(60);
  const [numKeep, setNumKeep] = useState(0);
  const [booked, setBooked] = useState([]);
  const max = 15;
  const min = 5;
  const [seats, setSeats] = useState(
    Math.floor(Math.random() * (max - min) + 5)
  );
  let history = useHistory();

  const [data, setData] = useState(generateTimeTable());

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const bookslot = (index) => {
    setNumKeep(numKeep + 1);
    const bookmin = data.findIndex((v) => {
      return v.id === index;
    });
    let requiredSlot = data[bookmin];
    requiredSlot = {
      ...requiredSlot,
      available: requiredSlot.available > 0 ? requiredSlot.available - 1 : 0,
      isBooked: true,
    };
    let dataCopy = [...data];
    dataCopy[bookmin] = requiredSlot;
    setData([...dataCopy]);
    setBooked([...booked, dataCopy[bookmin]]);
  };

  useEffect(() => {
    if (numKeep === 3) {
      return alert("Reached Maximum limit");
    }
  }, [numKeep]);

  const GoTOCart = () => {
    return history.push({ pathname: "/cart", state: { booked } });
  };

  return (
    <>
      {" "}
      <div>
        <div
          className="top-icon"
          style={{ position: "relative", left: "700px" }}
        >
          <i
            class="large shopping cart icon"
            style={{ cursor: "pointer" }}
            onClick={() => GoTOCart()}
          >
            {numKeep}
          </i>
        </div>
        <div className="timer" style={{ fontWeight: "bold" }}>
          Time Left : {counter} seconds
        </div>
        <div
          className="banner"
          style={{ fontWeight: "bold", color: "orange", fontSize: "40px" }}
        >
          Claim Your Free Trial Class
        </div>
        <br />
        <div
          className="tableTop"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <p
            className="leftCorner"
            style={{ fontWeight: "bold", color: "blue", fontSize: "25px" }}
          >
            Class Schedule
          </p>
          <p
            className="rightCorner"
            style={{
              fontWeight: "bold",
              textAlign: "right",
              fontSize: "25px",
              paddingLeft: "400px",
            }}
          >
            Free Seats Left: {seats}
          </p>
        </div>
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
                Availability
              </th>
            </tr>
          </thead>
          {data.map((v) => {
            return (
              <tbody>
                <tr>
                  <td>{v.name}</td>
                  <td>{v.date}</td>
                  <td>{v.time}</td>
                  <td>
                    {v.available > 0
                      ? v.available + "seats available"
                      : "0 Seats available"}
                  </td>
                  <td>
                    <button
                      type="button"
                      disabled={
                        v.isBooked || v.available === 0 || numKeep === 3
                      }
                      onClick={() => bookslot(v.id)}
                    >
                      {v.isBooked
                        ? "Booked"
                        : v.available > 0
                        ? "Bookslot"
                        : "Full"}
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </>
  );
};

export default TableDis;
