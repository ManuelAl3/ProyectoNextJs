import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { useState } from 'react';

export default function ButtonSave({initialButton}) {
    const [button, setButton] = useState(false);

    const successAlert = (e) => {
        e.preventDefault;
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Finalizado',
            showConfirmButton: false,
            timer: 1600
    })}
    const router = useRouter();

    return(
        <div className="btn-section block">
            <label className="label">
                <p className="control">
                    <button className="button is-purple-quizz-save" type="submit" disabled = {(button)?true:false} onClick={(e) => successAlert(e) /*|| router.replace('/polls')*/}>
                        Guardar
                    </button>
                </p>
            </label>
        </div>
    );
}