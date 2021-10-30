import { useState, useEffect } from 'react';

import { db } from '../../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

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
          <p className="title is-2">Encuestas</p>
        </div>
        {/* */}
        <div class="tabs is-centered">
          <ul>
            <li class="is-active">
              <a>Encuesta1</a>
            </li>
            <li>
              <a>Encuesta2</a>
            </li>
            <li>
              <a>Encuesta3</a>
            </li>
            <li>
              <a>Encuesta4</a>
            </li>
          </ul>
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
      </>
    );
}