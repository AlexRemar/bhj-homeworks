const editor = document.getElementById('editor');
const button = document.getElementById('clear');

const key = 'text';
window.addEventListener('unload', () => localStorage.setItem(key, editor.value));

editor.value = localStorage.getItem(key, editor.value);

button.addEventListener('click', buttonDelete);
function buttonDelete(e){
    e.preventDefault();
    editor.value = '';
    localStorage.removeItem(key, editor.value)
}