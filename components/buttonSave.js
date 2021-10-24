import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

export default function ButtonSave({initialButton}) {
    const router = useRouter();
    return(
        <div className="btn-section block">
            <label className="label">
                <p className="control">
                    <button className="button is-purple-quizz-save"
                        type="submit"  >
                        Guardar
                    </button>
                </p>
            </label>
        </div>
    );
}