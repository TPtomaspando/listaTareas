import React from "react";
import { ListGroup } from "react-bootstrap";
import Tarea from "./Tarea";

const ListadeTareas = ({ listaTareas, borrarTarea }) => {
  return (
    <>
      <section className="container mt-4">
        <ListGroup>
          {listaTareas.map((tarea) => (
            <Tarea key={tarea} tarea={tarea} borrarTarea={borrarTarea}></Tarea>
          ))}
        </ListGroup>
      </section>
    </>
  );
};

export default ListadeTareas;
