import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PlusCircle } from "react-bootstrap-icons";
import { FormText } from "react-bootstrap";
import ListadeTareas from "./ListadeTareas";
import { useForm } from "react-hook-form";
import { useState } from "react";

const FormularioTarea = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [listaTareas, setListaTareas] = useState([]);

  const posteriorValidacion = (data) => {
    //... operador spread
    //evitar tareas duplicadas
    if (listaTareas.some(() => tarea === data.tarea.trin())) {
      alert("esta tarea ya existe");
    } else {
      setListaTareas([...listaTareas, data.tarea]);
      reset();
    }
  };

  return (
    <>
      <section className="mb-4">
        <Form
          onSubmit={handleSubmit(posteriorValidacion)}
          className=" container d-flex"
        >
          <Form.Group className="w-100" controlId="formTarea">
            <Form.Control
              type="text"
              placeholder="Ingrese una tarea"
              {...register("tarea", {
                required: "la tarea es un dato obligatorio",
                minLength: {
                  value: 3,
                  message: "La tarea debe de tener 3 caracteres como minimo",
                },
                maxLength: {
                  value: 25,
                  message: "La tarea debe tener como maximo 25 caracteres",
                },
              })}
            />
            <FormText className="text-danger">{errors.tarea?.message}</FormText>
          </Form.Group>
          <Button variant="primary" type="submit">
            <PlusCircle></PlusCircle>
          </Button>
        </Form>
        <ListadeTareas listaTareas={listaTareas}></ListadeTareas>
      </section>
    </>
  );
};

export default FormularioTarea;
