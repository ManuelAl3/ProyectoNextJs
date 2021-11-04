import Income from '../../components/quizzesUsers/income-survey';

export default function iewsUsers(){
    return (
      <>
        <div class="tabs is-centered">
          <ul>
            <li class="is-active">
              <a>Encuesta 1</a>
            </li>
            <li>
              <a>Encuesta 2</a>
            </li>
            <li>
              <a>Encuesta 3</a>
            </li>
            <li>
              <a>Encuesta 4</a>
            </li>
          </ul>
        </div>

        {/* Módulo de encuesta*/}
        <Income />
      </>
    );
}