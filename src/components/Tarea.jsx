import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Tarea = () => {
  return (
    <>
      <section>
        <Table borderless>
          <tbody>
            <tr>
              <td>Planificar</td>
              <td>
                <Button variant="danger">X</Button>
              </td>
            </tr>
            <tr>
              <td>Maquetar</td>

              <td>
                <Button variant="danger">X</Button>
              </td>
            </tr>
            <tr>
              <td>Codear</td>
              <td>
                <Button variant="danger">X</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default Tarea;
