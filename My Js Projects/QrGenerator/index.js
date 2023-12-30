const userField = document.querySelector('#userField');
const button = document.querySelector('#button-addon1');
const generate = document.querySelector('.imgGallery');
const text = document.querySelector('.text');
//main function of generator
const qrGenerator = () => {
        generate.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userField.value;
    }
    //user ()

button.addEventListener('click', (e) => {
    e.preventDefault();

    text.innerHTML = 'processing ...';
    if (userField !== "") {
        setTimeout(() => {
            text.remove();

        }, 1000);
    }



    qrGenerator();
})