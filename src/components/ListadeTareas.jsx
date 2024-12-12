import React from "react";
import { ListGroup } from "react-bootstrap";
import Tarea from "./Tarea";

const ListadeTareas = ({ listaTareas }) => {
  return (
    <>
      <section className="container mt-4">
        <ListGroup>
          {listaTareas.map((tarea) => (
            <Tarea key={tarea} tarea={tarea}></Tarea>
          ))}
        </ListGroup>
      </section>
    </>
  );
};

export default ListadeTareas;
