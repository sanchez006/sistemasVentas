import Swal from 'sweetalert2';
import '@sweetalert2/theme-borderless/borderless.css';

export function errorAlert(title, message, icon, timer, showCancelButton, confirmButton, cancelButton) {
  Swal.fire({
    title: title,
    text: message,
    icon: icon,
    timer: timer,
    showCancelButton: showCancelButton,
    confirmButtonText: confirmButton,
    cancelButtonText: cancelButton
  });
}