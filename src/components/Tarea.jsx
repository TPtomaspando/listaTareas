import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";

const Tarea = () => {
  return (
    <>
      <ListGroup.Item className="d-flex justify-content-between">
        Planificar
        <Button variant="danger">
          <XCircle></XCircle>
        </Button>
      </ListGroup.Item>
    </>
  );
};

export default Tarea;
