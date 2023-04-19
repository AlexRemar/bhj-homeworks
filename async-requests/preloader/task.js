let exchangeRate = document.querySelector('.item');
let loader = document.getElementById('loader');


let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE){
        loader.className = 'loader'

        const valuteListJ = JSON.parse(xhr.responseText).response.Valute;
        const valuteList = [];   
        for (const key in valuteListJ) {
        valuteList.push({name: valuteListJ[key].CharCode, value: valuteListJ[key].Value});

        const formRate = `<div class="item__code">
                        ${valuteListJ[key].CharCode}
                    </div>
                    <div class="item__value">
                        ${valuteListJ[key].Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>`
exchangeRate.insertAdjacentHTML('beforeend', formRate);
        }
    }
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send();



