import Layout from '../../components/Layout';
import ButtonSave from '../../components/buttonSave';
import MessageInfo from '../../components/messageInfo';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { db } from '../../db/firebase';
import { collection, addDoc } from "firebase/firestore";
import { login, signup, logout, useAuth } from '../../db/firebase';


export default function IncomeSurvey(){
    const { register,handleSubmit, formState: { errors } } = useForm();
    // BACKEND
    //----------------USERLOGGED------------------
    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth();
  
      //-------CurrentUser-Redirect--------
      //const router = useRouter();
      /*useEffect(() =>{
        if(currentUser){
        //alert(currentUser);
        router.push('../admin/administrador');
        }else{
          console.log("¡No nay usuario activo!");
        }
      }, 5000) */
    //-------CurrentUser-Redirect--------
  
    async function handleLogout(){
      setLoading(true);
      try {
        logout();
      } catch {
        alert("Error!");
      }
      setLoading(false);
    }
    //----------------USERLOGGED------------------
    const eIngresoColRef = collection(db, "encuestasIngreso");

    const initialStateValues = {
        res1:'',
        res2:'',
        res3:'',
        res4:'',
        user:''
    };
    const [encuesta, setEncuesta] = useState(initialStateValues);

    const handleInputChange = e => {
        console.log(e.target);
        const { name, value } = e.target;
        setEncuesta({...encuesta, [name]: value});
    }

    const createEncuesta = () => {
        //e.preventDefault();
        /* for (let index = 0; index < document.getElementsByName('res4[]').length; index++) {
            encuesta.res4[index]=document.getElementsByName('res4[]')[index].checked;
        }; */
        encuesta.user=currentUser.email;
        console.log(encuesta);
        addEncuesta(encuesta);
        //alert(newEIngresoR1,newEIngresoR2,newEIngresoR3,newEIngresoR4);
        //await addDoc(eIngresoColRef, {res1: newEIngresoR1, res2: newEIngresoR2, res3: newEIngresoR3, res4: newEIngresoR4});
      };

    const addEncuesta = async (encuestaObject) =>{
        await addDoc(eIngresoColRef, {res1: encuestaObject.res1, res2: encuestaObject.res2, res3: encuestaObject.res3, res4: encuestaObject.res4, user: encuestaObject.user});
    }

    // FRONTEND

    const router = useRouter();
    //let forms = data;

    const alertActivated = () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Finalizado",
        showConfirmButton: false,
        timer: 1600,
      });
      setTimeout(() => {
        router.replace("/polls");
      }, 1600);
    };

    const onSubmit = () => {
        createEncuesta();
        alertActivated();
    }

    return (
      <>
        <Layout>
        {/*------------------------------------NAVBAR------------------------------------*/}
        <div className="sidebar">
            <div className="logo-details">
                <i className='bx bxl-c-plus-plus icon'></i>
                <div className="logo_name">Unipoli ISW</div>
                <i className='bx bx-menu' id="btn"></i>
            </div>
            <ul className="nav-list">
                <li>
                    <i className='bx bx-search'></i>
                    <input type="text" placeholder="Search..." />
                    <span className ="tooltip">Buscar</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-grid-alt'></i>
                        <span className="links_name">Dashboard</span>
                    </a>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li>
                    <Link href="/admin/viewsUsers">
                        <i className='bx bx-folder'></i>
                        <span className="links_name">Encuestas</span>
                    </Link>
                    <span className="tooltip">Encuestas</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-user'></i>
                        <span className="links_name">{ currentUser?.email }</span>
                    </a>
                    <span className="tooltip">{ currentUser?.email }</span>
                </li>
                <li>
                    <Link href="/" onClick={handleLogout}>
                        <i className='bx bx-pie-chart-alt-2'></i>
                        <span className="links_name">Cerrar Sesion</span>
                    </Link>
                    <span className="tooltip">Cerrar Sesion</span>
                </li>
                {/* <li className="profile">
                    <div className="profile-details">
                        <img src="../public/images/profile.jpg" alt="profileImg" />
                        <div class ="name_job">
                        <div class ="name">Manuel Alberto</div>
                        <div class ="job">Alumno</div>
                        </div>
                    </div>
                    <i className='bx bx-log-out' id="log_out"></i>
                </li>*/}
            </ul>
        </div>
        {/*------------------------------------NAVBAR------------------------------------*/}
          <div className="title-main-quizz blockzz">
            <p className="title is-2">
              Encuesta de ingreso al programa de estudios de ingeniería en software
            {/*
              {forms.map((data) => {
                return <p className="title is-2">{data.titulo}</p>;
              })}
            */}
            </p>
          </div>

          <MessageInfo />

          {/* Módulo de encuesta*/}
          <form
            className="quizz-main m-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="field is-horizontal box">
              <div className="field-is is-normal">
                <label name="question_id" className="label">
                  Escuela de procedencia <span className="span-req">*</span>
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      {...register("res1", {
                        required: {
                          value: true,
                          message: "Campo obligatorio",
                        },
                      })}
                      name="res1"
                      /*value={forms.answer}*/
                      onChange={handleInputChange}
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                    {errors.res1 && (
                      <p className="error-message-field">
                        ¡{errors.res1.message}!
                      </p>
                    )}
                  </p>
                </div>
              </div>
              <div className="field-is is-normal">
                <label name="question_id" className="label">
                  Especialidad cursada en tu escuela de procedencia:
                  <span className="span-req">*</span>
                </label>
              </div>
              <div className="field-body block">
                <div className="field">
                  <p className="control">
                    <input
                      {...register("res2", {
                        required: {
                          value: true,
                          message: "Campo obligatorio",
                        },
                      })}
                      name="res2"
                      onChange={handleInputChange}
                      /*value={forms.answer}*/
                      className="input is-purple"
                      type="text"
                      placeholder="respuesta"
                    />
                    {errors.res2 && (
                      <p className="error-message-field">
                        ¡{errors.res2.message}!
                      </p>
                    )}
                  </p>
                </div>
              </div>
              {/* Módulo checkradio*/}
              <div className="block">
                <label name="question_id" className="label">
                  ¿Cómo te enteraste de la Universidad Politécnica de Durango?
                </label>
                <div className="section-check">
                  <div className="control">
                    <label className="radio">
                      <input
                        {...register("radio", { required: true })}
                        type="radio"
                        name="res3"
                        className="m-rght"
                        value="Páginas Web"
                        onChange={handleInputChange}
                      />
                      Páginas Web
                    </label>
                  </div>
                  <div className="control">
                    <label className="radio">
                      <input
                        {...register("radio", { required: true })}
                        type="radio"
                        name="res3"
                        className="m-rght"
                        value="Redes Sociales"
                        onChange={handleInputChange}
                      />
                      Redes Sociales
                    </label>
                  </div>
                  <div className="control">
                    <label className="radio">
                      <input
                        {...register("radio", { required: true })}
                        type="radio"
                        name="res3"
                        className="m-rght"
                        value="Medios de comunicación (televisión, radio, periódico,
                          otro)"
                        onChange={handleInputChange}
                      />
                      Medios de comunicación (televisión, radio, periódico,
                      otro)
                    </label>
                  </div>
                  <div className="control">
                    <label className="radio">
                      <input
                        {...register("radio", { required: true })}
                        type="radio"
                        name="res3"
                        className="m-rght"
                        value="Visita guiada programada por mi bachillerato"
                        onChange={handleInputChange}
                      />
                      Visita guiada programada por mi bachillerato
                    </label>
                  </div>
                  <div className="control">
                    <label className="radio">
                      <input
                        {...register("radio", { required: true })}
                        type="radio"
                        name="res3"
                        className="m-rght"
                        value="Pendones"
                        onChange={handleInputChange}
                      />
                      Pendones
                    </label>
                  </div>
                  <div className="control">
                    <label className="radio">
                      <input
                        {...register("radio", { required: true })}
                        type="radio"
                        name="res3"
                        className="m-rght"
                        value="Recomendación de alguien más"
                        onChange={handleInputChange}
                      />
                      Recomendación de alguien más
                    </label>
                  </div>
                </div>
                {errors.radio && (
                  <p className="error-message-field">
                    ¡Campo obligatorio!
                  </p>
                )}
                <div className="control ">
                  <div className="field-is is-normal">
                    <label className="label">Otro:</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input
                          onChange={handleInputChange}
                          name="res3"
                          /*value={forms.answer}*/
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Módulo checkbox*/}
              <div className="block">
                <label name="question_id" className="label">
                  ¿Qué te motiva a estudiar Ingeniería en Software?
                </label>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("radio", { required: true })}
                      name="res4"
                      type="radio"
                      className="m-rght"
                      value="Diseñar y desarrollar software a la medida y/o genérico de calidad."
                      onChange={handleInputChange}
                      />
                    Diseñar y desarrollar software a la medida y/o genérico de
                    calidad.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("radio", { required: true })}
                      name="res4"
                      type="radio"
                      className="m-rght"
                      value="Diseñar y crear bases de datos y aplicaciones para su manipulación."
                      onChange={handleInputChange}
                      />
                    Diseñar y crear bases de datos y aplicaciones para su
                    manipulación.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("radio", { required: true })}
                      name="res4"
                      type="radio"
                      className="m-rght"
                      value="Gestionar, administrar e implementar proyectos de innovación en el área de software."
                      onChange={handleInputChange}
                      />
                    Gestionar, administrar e implementar proyectos de innovación
                    en el área de software.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("radio", { required: true })}
                      name="res4"
                      type="radio"
                      className="m-rght"
                      value="Proporcionar soporte técnico y estratégico a la infraestructura de tecnologías de información."
                      onChange={handleInputChange}
                      />
                    Proporcionar soporte técnico y estratégico a la
                    infraestructura de tecnologías de información.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("radio", { required: true })} 
                      name="res4"
                      type="radio"
                      className="m-rght"
                      value="Integrar nuevas soluciones de software a servicios modernos como el comercio electrónico."
                      onChange={handleInputChange}
                      />
                    Integrar nuevas soluciones de software a servicios modernos
                    como el comercio electrónico.
                  </label>
                </div>
                <div className="section-check">
                  <label className="checkbox">
                    <input
                      {...register("radio", { required: true })}
                      name="res4"
                      type="radio"
                      className="m-rght"
                      value="Desarrollar investigación en el campo del desarrollo y reingeniería de las tecnologías de la información."
                      onChange={handleInputChange}
                      />
                    Desarrollar investigación en el campo del desarrollo y
                    reingeniería de las tecnologías de la información.
                  </label>
                </div>
                {errors.checkbox && (
                  <p className="error-message-field">
                    ¡Campo obligatorio!
                  </p>
                )}
                <div className="control ">
                  <div className="field-is is-normal">
                    <label name="question_id" className="label">
                      Otro:
                    </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input
                          onChange={handleInputChange}
                          name="res4[]"
                          /*value={forms.answer}*/
                          className="input is-purple"
                          type="text"
                          placeholder="respuesta"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón de guardar encuesta*/}
            <ButtonSave />
          </form>
        </Layout>
      </>
    );
}

/*export async function getStaticProps() {
    try {
      const res = await fetch('http://localhost:3200/preguntas')
      const data = await res.json()
      return {
        props: {
          data
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
*/