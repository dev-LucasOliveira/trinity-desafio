const cardBox = document.getElementById("card-box");
const modalDiv = document.getElementById('modal-div');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const role = document.getElementById('role');
const birthday = document.getElementById('birthday');
const statusHTML = document.getElementById('status');
const mode = document.getElementById('mode');
const image = document.getElementById('image');


// Função que mostra e esconde o Modal (aparentemente funcionando normalmente)

let showModal = false;

function toggleModal() {
    showModal = !showModal;
    if (showModal === true) {
        modalDiv.style.display = 'flex';
    }else {
        modalDiv.style.display = 'none';
    };

}


// Adicionei 60 alunos para testar a quebra das páginas

let studentsArray = [
    
    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Lucas', 
    'lastName': 'Oliveira',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Pedro', 
    'lastName': 'Luna',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},

    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
    'role': 'Monitor',
    'birthday': '2001/01/14',
    'statusHTML': 'Active',
    'mode': 'Onsite'},
]


// Função que recebe as informações e inclui o aluno novo na posição 0 do studentsArray usando .unshift e cria o card na tela (está com bug, e não estou conseguindo debugar)

let indexButton = 1;
// console.log(studentsArray);

function submitCard() {

    let student = {'image': image.value, 'firstName': firstName.value, 'lastName': lastName.value, 'birthday': birthday.value, 'role': role.value, 'statusHTML': statusHTML.value, 'mode': mode.value};
    // console.log(student);

    studentsArray.unshift(student);
    // console.log(studentsArray);

    image.value = '';
    firstName.value = '';
    lastName.value = '';
    birthday.value = '';
    role.value = '';
    statusHTML.value = '';
    mode.value = '';
    cardBox.innerHTML = '';

    
    let showModal = 'false';
    toggleModal();


    console.log(indexButton);

    if (indexButton === 1) {
        studentsArray.forEach((user, contagem) => {
            if (contagem < 12) {
                studentsArray => studentsArray.splice(1, 12)
                renderUserCard(user)
            }
        });

        let indexButton = 1;
    }

    if (indexButton === 2) {
        studentsArray.forEach((user, contagem) => {
            if (contagem > 12 && contagem < 24) {
                studentsArray => studentsArray.splice(12, 12)
                renderUserCard(user)
            }
        });
        
        let indexButton = 2;
    }

    if (indexButton === 3) {
        studentsArray.forEach((user, contagem) => {
            if (contagem > 24 && contagem < 36) {
                studentsArray => studentsArray.splice(24, 12)
                renderUserCard(user)
            }
        });
        
        let indexButton = 3;
    }

    if (indexButton === 4) {
        studentsArray.forEach((user, contagem) => {
            if (contagem > 37 && contagem < 48) {
                studentsArray => studentsArray.splice(36, 12)
                renderUserCard(user)
            }
        });
        
        let indexButton = 4;
    }

    if (indexButton === 5) {
        studentsArray.forEach((user, contagem) => {
            if (contagem > 49 && contagem < 60) {
                studentsArray => studentsArray.splice(48, 12)
                renderUserCard(user)
            }
        });
        
        let indexButton = 5;
    }

    if (indexButton === 6) {
        studentsArray.forEach((user, contagem) => {
            if (contagem > 61 && contagem < 72) {
                studentsArray => studentsArray.splice(60, 12)
                renderUserCard(user)
            }
        });
        
        let indexButton = 6;
    }

};


// Define o botão 1 branco como padrão de carregamento de página

button1.style.backgroundColor = '#ffffff';


// Função que define a página escolhida a partir dos botões de página redondos (aparentemente funcionando normalmente)

function showCards(btnNumber) {
    if (btnNumber === 1) {
        let indexButton = 1;
        button1.style.backgroundColor = '#ffffff';
        button2.style.backgroundColor = '#c79051a1';
        button3.style.backgroundColor = '#c79051a1';
        button4.style.backgroundColor = '#c79051a1';
        button5.style.backgroundColor = '#c79051a1';
        button6.style.backgroundColor = '#c79051a1';
        cardBox.innerHTML = '';


        studentsArray.forEach((user, contagem) => {
            if (contagem < 12) {
                studentsArray => studentsArray.splice(1, 12)
                renderUserCard(user)
            }
        });

        console.log(indexButton);

    }

    if (btnNumber === 2) {
        let indexButton = 2;
        button1.style.backgroundColor = '#c79051a1';
        button2.style.backgroundColor = '#ffffff';
        button3.style.backgroundColor = '#c79051a1';
        button4.style.backgroundColor = '#c79051a1';
        button5.style.backgroundColor = '#c79051a1';
        button6.style.backgroundColor = '#c79051a1';
        cardBox.innerHTML = '';


        studentsArray.forEach((user, contagem) => {
            if (contagem > 11 && contagem < 24) {
                studentsArray => studentsArray.splice(12, 12)
                renderUserCard(user)
            }
        });

        console.log(indexButton);

    }

    if (btnNumber === 3) {
        let indexButton = 3;
        button1.style.backgroundColor = '#c79051a1';
        button2.style.backgroundColor = '#c79051a1';
        button3.style.backgroundColor = '#ffffff';
        button4.style.backgroundColor = '#c79051a1';
        button5.style.backgroundColor = '#c79051a1';
        button6.style.backgroundColor = '#c79051a1';
        cardBox.innerHTML = '';

        
        studentsArray.forEach((user, contagem) => {
            if (contagem > 23 && contagem < 36) {
                studentsArray => studentsArray.splice(24, 12)
                renderUserCard(user)
            }
        });

        console.log(indexButton);

    }

    if (btnNumber === 4) {
        let indexButton = 4;
        button1.style.backgroundColor = '#c79051a1';
        button2.style.backgroundColor = '#c79051a1';
        button3.style.backgroundColor = '#c79051a1';
        button4.style.backgroundColor = '#ffffff';
        button5.style.backgroundColor = '#c79051a1';
        button6.style.backgroundColor = '#c79051a1';
        cardBox.innerHTML = '';


        studentsArray.forEach((user, contagem) => {
            if (contagem > 35 && contagem < 48) {
                studentsArray => studentsArray.splice(36, 12)
                renderUserCard(user)
            }
        });

        console.log(indexButton);

    }

    if (btnNumber === 5) {
        let indexButton = 5;
        button1.style.backgroundColor = '#c79051a1';
        button2.style.backgroundColor = '#c79051a1';
        button3.style.backgroundColor = '#c79051a1';
        button4.style.backgroundColor = '#c79051a1';
        button5.style.backgroundColor = '#ffffff';
        button6.style.backgroundColor = '#c79051a1';
        cardBox.innerHTML = '';


        studentsArray.forEach((user, contagem) => {
            if (contagem > 47 && contagem < 60) {
                studentsArray => studentsArray.splice(48, 12)
                renderUserCard(user)
            }
        });

        console.log(indexButton);

    }

    if (btnNumber === 6) {
        let indexButton = 6;
        button1.style.backgroundColor = '#c79051a1';
        button2.style.backgroundColor = '#c79051a1';
        button3.style.backgroundColor = '#c79051a1';
        button4.style.backgroundColor = '#c79051a1';
        button5.style.backgroundColor = '#c79051a1';
        button6.style.backgroundColor = '#ffffff';
        cardBox.innerHTML = '';

        
        studentsArray.forEach((user, contagem) => {
            if (contagem > 59 && contagem < 72) {
                studentsArray => studentsArray.splice(60, 12)
                renderUserCard(user)
            }
        });

        console.log(indexButton);

    };
}


// Função que gera os cards do studentsArray (aparentemente funcionando normalmente)

function renderUserCard(studentsArray) {
    const cardHTML = `
        <div class="card">      
            <img class="image" src=${studentsArray.image}>
            <div class="text-box">
                <div class="name">
                    <b> ${studentsArray.firstName} ${studentsArray.lastName} </b>
                </div>
                <div class="description">
                    <b>Role:</b>
                    <b>Birthday:</b> 
                    <b>Status:</b> 
                    <b>Mode:</b> 
                </div>
                <div class="personal-description">
                    <div class="role"> ${studentsArray.role} </div>
                    <div class="birthday"> ${studentsArray.birthday} </div>
                    <div class="status"> ${studentsArray.statusHTML} </div>
                    <div class="mode"> ${studentsArray.mode} </div>                        
                </div>  
            </div>
        </div>
    `;
    const newCard = document.createElement('div');
    newCard.innerHTML = cardHTML;
    cardBox.appendChild(newCard);
};


// forEach que gera a página inicial com os 12 primeiros cards com studentsArray (aparentemente funcionando normalmente)

if (indexButton === 1) {

    cardBox.innerHTML = '';

    studentsArray.forEach((user, contagem) => {
        if (contagem < 12) {
            studentsArray => studentsArray.splice(1, 12)
            renderUserCard(user)
        }
    });

}

if (indexButton === 2) {

    cardBox.innerHTML = '';

    studentsArray.forEach((user, contagem) => {
        if (contagem > 11 && contagem < 24) {
            studentsArray => studentsArray.splice(12, 12)
            renderUserCard(user)
        }
    });

}

if (indexButton === 3) {

    cardBox.innerHTML = '';
    
    studentsArray.forEach((user, contagem) => {
        if (contagem > 23 && contagem < 36) {
            studentsArray => studentsArray.splice(24, 12)
            renderUserCard(user)
        }
    });

}

if (indexButton === 4) {

    cardBox.innerHTML = '';

    studentsArray.forEach((user, contagem) => {
        if (contagem > 35 && contagem < 48) {
            studentsArray => studentsArray.splice(36, 12)
            renderUserCard(user)
        }
    });

}

if (indexButton === 5) {

    cardBox.innerHTML = '';

    studentsArray.forEach((user, contagem) => {
        if (contagem > 47 && contagem < 60) {
            studentsArray => studentsArray.splice(48, 12)
            renderUserCard(user)
        }
    });

}

if (indexButton === 6) {

    cardBox.innerHTML = '';
    
    studentsArray.forEach((user, contagem) => {
        if (contagem > 59 && contagem < 72) {
            studentsArray => studentsArray.splice(60, 12)
            renderUserCard(user)
        }
    });

};