document.addEventListener('DOMContentLoaded', function() {
    const output = document.querySelector('.output');
    const buttons = document.querySelectorAll('.custom-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.getAttribute('value');
            switch (buttonValue) {
                case '=':
                    try {
                        output.textContent = eval(output.textContent);
                    } catch (error) {
                        output.textContent = 'Error';
                    }
                    break;
                case 'AC':
                    output.textContent = '0';
                    break;
                case 'BS':
                    output.textContent = output.textContent.slice(0, -1);
                    if (output.textContent === '') {
                        output.textContent = '0';
                    }
                    break;
                default:
                    if (output.textContent === '0' && buttonValue !== '/') {
                        output.textContent = buttonValue;
                    } else {
                        output.textContent += buttonValue;
                    }
                    break;
            }
        });
    });
});