import Layout from '../../components/Layout';
import ButtonSave from '../../components/buttonSave';
import MessageInfo from '../../components/messageInfo';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function IncomeSurvey({data}){
    const { register,handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    const router = useRouter();

    let forms = data;

    const [button, activityButton] = useState(false);

    const handleInputChange = () => {

    };

    const alert = (e) => {
        e.preventDefault;
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Finalizado",
            showConfirmButton: false,
            timer: 1600,
        });
        //router.replace('/polls');
    }

    const successAlert = (e) => {
      if (errors.answer == true && errors.answer_2 == true) {
        e.preventDefault;
      } else {
        alert(e);
      }
    };

    return (
      <>
        <div className="title-main-quizz block">
          <p>
            {" "}
            {forms.map((data) => {
              return <p className="title is-2">{data.titulo}</p>;
            })}{" "}
          </p>
        </div>

        <MessageInfo />

        {/* Módulo de encuesta*/}
        <form
          className="quizz-main m-auto"
          action="/save"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="field is-horizontal box">
            <div className="field-is is-normal">
              <label name="question_id" className="label">
                {" "}
                Escuela de procedencia <span className="span-req">*</span>
              </label>
            </div>
            <div className="field-body block">
              <div className="field">
                <p className="control">
                  <input
                    {...register("answer", {
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                    })}
                    name="answer"
                    value={forms.answer}
                    onChange={handleInputChange}
                    className="input is-purple"
                    type="text"
                    placeholder="respuesta"
                  />
                  {errors.answer && (
                    <span className="error-message-field">
                      {errors.answer.message}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="field-is is-normal">
              <label name="question_id" className="label">
                Especialidad cursada en tu escuela de procedencia:{" "}
                <span className="span-req">*</span>
              </label>
            </div>
            <div className="field-body block">
              <div className="field">
              <p className="control">
                  <input
                    {...register("answer_2", {
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                    })}
                    name="answer_2"
                    value={forms.answer}
                    onChange={handleInputChange}
                    className="input is-purple"
                    type="text"
                    placeholder="respuesta"
                  />
                  {errors.answer_2 && (
                    <span className="error-message-field">
                      {errors.answer_2.message}
                    </span>
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
                      name="answer"
                      value={forms.answer}
                      /*onChange={handleChange}*/ type="radio"
                      value="paginas"
                    />
                    Páginas Web
                  </label>
                </div>
                <div className="control">
                  <label className="radio">
                    <input
                      name="answer"
                      value={forms.answer}
                      /*onChange={handleChange}*/ type="radio"
                    />
                    Redes Sociales
                  </label>
                </div>
                <div className="control">
                  <label className="radio">
                    <input
                      name="answer"
                      value={forms.answer}
                      /*onChange={handleChange}*/ type="radio"
                    />
                    Medios de comunicación (televisión, radio, periódico, otro)
                  </label>
                </div>
                <div className="control">
                  <label className="radio">
                    <input
                      name="answer"
                      value={forms.answer}
                      /*onChange={handleChange}*/ type="radio"
                    />
                    Visita guiada programada por mi bachillerato
                  </label>
                </div>
                <div className="control">
                  <label className="radio">
                    <input
                      name="answer"
                      value={forms.answer}
                      /*onChange={handleChange}*/ type="radio"
                    />
                    Pendones
                  </label>
                </div>
                <div className="control">
                  <label className="radio">
                    <input
                      name="answer"
                      value={forms.answer}
                      /*onChange={handleChange}*/ type="radio"
                    />
                    Recomendación de alguien más
                  </label>
                </div>
              </div>
              <div className="control ">
                <div className="field-is is-normal">
                  <label className="label">Otro:</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input
                        name="answer"
                        value={forms.answer}
                        /*onChange={handleChange}*/ className="input is-purple"
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
                  <input name="answer_c" type="checkbox" />
                  Diseñar y desarrollar software a la medida y/o genérico de
                  calidad.
                </label>
              </div>
              <div className="section-check">
                <label className="checkbox">
                  <input name="answer_c" type="checkbox" />
                  Diseñar y crear bases de datos y aplicaciones para su
                  manipulación.
                </label>
              </div>
              <div className="section-check">
                <label className="checkbox">
                  <input name="answer_c" type="checkbox" />
                  Gestionar, administrar e implementar proyectos de innovación
                  en el área de software.
                </label>
              </div>
              <div className="section-check">
                <label className="checkbox">
                  <input name="answer_c" type="checkbox" />
                  Proporcionar soporte técnico y estratégico a la
                  infraestructura de tecnologías de información.
                </label>
              </div>
              <div className="section-check">
                <label className="checkbox">
                  <input name="answer_c" type="checkbox" />
                  Integrar nuevas soluciones de software a servicios modernos
                  como el comercio electrónico.
                </label>
              </div>
              <div className="section-check">
                <label className="checkbox">
                  <input name="answer_c" type="checkbox" />
                  Desarrollar investigación en el campo del desarrollo y
                  reingeniería de las tecnologías de la información.
                </label>
              </div>
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
                        name="answer"
                        value={forms.answer}
                        /*onChange={handleChange}*/ className="input is-purple"
                        type="text"
                        placeholder="respuesta"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botón de guardar encuesta
          <ButtonSave />
          */}

          <div className="btn-section block">
            <label className="label">
              <p className="control">
                <button className="button is-purple-quizz-save" type="submit" /*disabled={button ? true : false}*/ onClick={(e) => successAlert(e)} >
                  Guardar
                </button>
              </p>
            </label>
          </div>
        </form>
      </>
    );
}

export async function getStaticProps() {
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
