const section = document.getElementById('faqsContainer');
const iconSrc = '/assets/icons/down_arrow.svg';

const faqs = [
    {
        title: '¿Aceptan pagos con Bitcoin?',
        answer: 'Sí, aceptamos pagos con bitcoin y cualquier otra criptomoneda',
        id: '1'
    },
    {
        title: '¿Cuánto tiempo tarda en llegar mi pedido?',
        answer: 'Depende mucho de la dirección de entrega',
        id: '2'
    },
    {
        title: '¿Qué pasa si mi pedido es incorrecto o llegó en mal estado?',
        answer: 'Ponte en <a class="faq__link" href="contact.html">contacto</a> con nosotros y en breve solucionaremos tu problema',
        id: '3'
    },
    {
        title: 'Cómo me pueden notificar cuando lleguen más productos',
        answer: 'Si aceptaste la opción de recibir noticias cuando te registraste estas ofertas te llegan automáticamente a tu correo, de lo contrario puede activarla en tu perfil',
        id: '4'
    },
    {
        title: 'Mi pago no pasa, ¿qué puedo hacer?',
        answer: 'En primer lugar llama a tu banco, ellos te darán la asesoría adecuada',
        id: '5'
    }
];


function toggleQuestions() {
    const faqs = document.getElementsByClassName('faq');
    for (let i = 0; i < faqs.length; i++) {
        faqs[i].addEventListener('click', function () {
            this.classList.toggle('active');
            let faq__answer = this.lastElementChild;
            if (faq__answer.classList.contains('active')) {
                faq__answer.classList.remove('active');
            } else {
                faq__answer.classList.add('active');
            }
        });
    }
}

function renderFaqs() {
    let output = faqs.map(faq => {
        return `
        <div class="faq">
            <div class="faq__title">
                <p>${faq.title}</p>
                <div>
                    <img class="faq__icon" src="${iconSrc}">
                </div>
            </div>
            <div class="faq__answer" id="${faq.id}">
                ${faq.answer}
            </div>
        </div>
        `
    }).join('');
    section.innerHTML = output;
    toggleQuestions();
}

renderFaqs();