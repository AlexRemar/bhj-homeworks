const editor = document.getElementById('editor');
const button = document.getElementById('clear');

const key = 'text';
window.addEventListener('unload', () => localStorage[key] = editor.value);

editor.value = localStorage[key];

button.addEventListener('click', () => editor.value = '');