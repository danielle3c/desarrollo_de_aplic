function ConvertidorTemperatura(Element) {
    const selectedUnit = Element.value;
    const dias = document.querySelectorAll('.dia');
    
    dias.forEach(dia => {
        const temperaturas = dia.querySelectorAll('.temperaturas span');
        
        temperaturas.forEach(tempSpan => {
            let temp = parseInt(tempSpan.textContent);
            let isAlto = tempSpan.classList.contains('alto');
            
            if (selectedUnit === 'F') {
                temp = Math.round((temp * 9/5) + 32);
            } else {
                temp = Math.round((temp - 32) * 5/9);
            }
            
            tempSpan.textContent = temp;
        });
    });
}

function hideCookie() {
    const cookieElement = document.getElementById('Cookie');
    if (cookieElement) {
        cookieElement.style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const cityElements = document.querySelectorAll('.navbar li');
    
    cityElements.forEach(city => {
        city.addEventListener('click', function() {
            const cityName = this.textContent;
            alert(`Loading weather report for ${cityName}`);
        });
    });
});