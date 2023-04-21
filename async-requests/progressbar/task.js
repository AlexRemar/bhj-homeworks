const form = document.getElementById('form');
const selectFile = form.querySelector('input');
const progressBar = document.getElementById('progress');


form.addEventListener('submit', e => {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    const request = new XMLHttpRequest();
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload'); 
    
    request.upload.addEventListener('progress', e => progressBar.value = (e.loaded / e.total).toFixed(2));
    
    request.send(formData);
  });
  
  selectFile.addEventListener('change', () => progressBar.value = '0');