import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PlusCircle } from "react-bootstrap-icons";

const FormularioTarea = () => {
  return (
    <>
      <div className="mb-4">
        <Form className=" container d-flex">
          <Form.Group className="w-100" controlId="formTarea">
            <Form.Control type="text" placeholder="Ingrese una tarea" />
          </Form.Group>
          <Button variant="primary" type="submit">
            <PlusCircle></PlusCircle>
          </Button>
        </Form>
      </div>
    </>
  );
};

export default FormularioTarea;
