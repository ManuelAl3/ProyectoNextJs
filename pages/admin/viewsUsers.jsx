import { useState, useEffect } from 'react';

import { db } from '../../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

import { Table } from 'reactstrap';
export default function iewsUsers(){

    const [eIngreso, seteIngreso] = useState([]);
    const eIngresoColRef = collection(db, "encuestasIngreso");

    useEffect(() =>{
        const geteIngreso = async () =>{
          const data = await getDocs(eIngresoColRef);
          seteIngreso(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        }
        geteIngreso()
      }, [])
    return (
      <>
        <div className="title-main-quizz block">
          <p className="title is-2">Encuesta Ingreso</p>
        </div>

        {/* Módulo de encuesta*/}
        <div className="container is-align-content-center">
          <div className="field is-horizontal box">
            <h2>Registros:</h2>
            <div className="field-is is-normal">
              {eIngreso.map((e) => {
                return (
                  <div className="encuesta">
                    <div className="columns">
                      <div className="column is-align-items-flex-end	">
                        <button>Editar</button>
                      </div>
                    </div>
                    <div className="box field is-horizontal">
                      <div className="column question-id">
                        Escuela de procedencia: <br />
                        {e.res1}
                      </div>
                      <div className="column">
                        Especialidad cursada en tu escuela de procedencia:{" "}
                        <br />
                        {e.res2}
                      </div>
                      <div className="column">
                        ¿Cómo te enteraste de la Universidad Politécnica de
                        Durango? <br />
                        {e.res3}
                      </div>
                      <div className="column">
                        ¿Qué te motiva a estudiar Ingeniería en Software? <br />
                        {e.res4}
                      </div>
                    </div>
                    {/* <button onClick={() =>{deleteEIngreso(e.id)}}>Eliminar</button> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Table borderless hover responsive size="">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
}