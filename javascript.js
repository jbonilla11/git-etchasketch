const container = document.querySelector('#container');

for(let v = 0; v < 16; v++){
    const v = document.createElement('div');

    for(let h = 0; h < 16; h++){
        const h = document.createElement('div');
        h.style.borderStyle = 'solid';
        h.style.height = '15px';
        h.style.width = '15px';
    
        v.appendChild(h);
    }
    container.appendChild(v);
}
