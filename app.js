const display = document.querySelector('.display');
const buttons = Array.from(document.getElementsByTagName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
    switch(e.target.innerText) {
        case 'AC': 
            display.innerText = '';
            break;
        case 'Del':
            display.innerText = display.innerText.slice(0,-1);
            break;
        case '=':
            try {
                display.innerText =  eval(display.innerText);
                break;
            } catch {
                display.innerText = 'Error';
                break;
            }
        default:
            display.innerText += e.target.innerText;
        }
    });
});