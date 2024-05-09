import Swal from 'sweetalert2';
import '@sweetalert2/theme-borderless/borderless.css';

export function errorAlert(title, message, icon, timer) {
  Swal.fire({
    title: 'Error Alert',
    text: message,
    icon: icon,
    timer: timer,
  });
}