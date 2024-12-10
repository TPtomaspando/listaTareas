import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormularioTarea = () => {
  return (
    <>
      <Form>
        <div className="d-flex justify-content-center">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Ingrese una tarea" />
          </Form.Group>
          <Button variant="primary" type="submit">
            +
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormularioTarea;
