import React from "react";
import { ListGroup } from "react-bootstrap";
import Tarea from "./Tarea";

const ListadeTareas = () => {
  return (
    <>
      <section className="container mt-4">
        <ListGroup>
          <Tarea></Tarea>
          <Tarea></Tarea>
          <Tarea></Tarea>
        </ListGroup>
      </section>
    </>
  );
};

export default ListadeTareas;
