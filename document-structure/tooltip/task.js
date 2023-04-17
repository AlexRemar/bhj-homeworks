const links = document.getElementsByClassName('has-tooltip');

for (const link of links) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = link.title;    
    link.insertAdjacentElement('afterEnd', tooltip);

    link.addEventListener('click', function(e) {
        e.preventDefault();
        if (tooltip.classList.contains('tooltip_active')) {
            tooltip.classList.remove('tooltip_active');
            return;
          }
    const prevTooltip = document.querySelector('.tooltip_active');
    if (prevTooltip)
      prevTooltip.classList.remove('tooltip_active');
    link.removeAttribute("title");
        
    tooltip.classList.add('tooltip_active');
    let too = tooltip.getBoundingClientRect();
    let lin = link.getBoundingClientRect();

    if((too.top - lin.top) > link.offsetHeight){
        tooltip.style.top = lin.top + link.offsetHeight + 'px';
        tooltip.style.left = too.left + 'px';
    } else{
        tooltip.style.top = too.top + 'px';
        tooltip.style.left = lin.left + 'px';
    }   
    })   
}
