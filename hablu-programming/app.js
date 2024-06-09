// window.onload = function(){
//     document.getElementById('close').onclick = function(){
//         this.parentNode.parentNode.remove();
//         return false;
//     };
// };

// function clos(){
// let x = document.getElementById('close');
// x.remove()
// }

// script.js
// script.js
// script.js

// script.js

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const alertDiv = document.querySelector('.alert');
    if (alertDiv) {
        alertDiv.querySelector('.close').addEventListener('click', () => closeAlert(alertDiv));
    }
});

function closeAlert(alertDiv) {
    alertDiv.style.opacity = '0';
    setTimeout(() => alertDiv.remove(), 600);
}
