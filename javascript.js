const container = document.querySelector('#container');

const size = document.querySelector('#size');
size.addEventListener('click', () => {
    let sizeRequest = parseInt(prompt("Input size."));

    if (sizeRequest < 30) {
        for(let v = 0; v < sizeRequest; v++){
            const v = document.createElement('div');
        
            for(let h = 0; h < sizeRequest; h++){
                const h = document.createElement('div');
                h.style.borderStyle = 'solid';
                h.style.height = '10px';
                h.style.width = '10px';
        
                h.addEventListener('mouseover', () => {
                    h.style.backgroundColor = 'black';
                });
            
                v.appendChild(h);
            }
            container.appendChild(v);
        }        
    } else {
        console.log("Too big!");
    }
});