const cardBox = document.getElementById("card-box");
const modalBox = document.getElementById('modal-box');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const role = document.getElementById('role');
const birthday = document.getElementById('birthday');
const statusHTML = document.getElementById('status');
const mode = document.getElementById('mode');
const image = document.getElementById('image');
const indexPage = document.getElementById('index-page');
const indexPageBox = document.getElementById('index-page-box');
const buttonBox = document.getElementById('button-box');


// Função que mostra e esconde o Modal (aparentemente funcionando normalmente)

let showModal = false;

function toggleModal() {

    showModal = !showModal;

    if (showModal === true) {

        modalBox.style.display = 'flex';
    
    }else {
    
        modalBox.style.display = 'none';
    
    };

}



// Adicionei 10 alunos para testar a quebra das páginas

let studentsArray = [
    
    {'image': 'https://i.im.ge/2022/09/03/ObJ276.OQPoT0-DSC-0368.jpg',
    'firstName': 'Marlos', 
    'lastName': 'Gonçalves',
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
    'mode': 'Onsite'}
]



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
    indexPage.innerHTML = '1';

    
    toggleModal();


    studentsArray.forEach((user, contagem) => {
        if (contagem < 12) {
            studentsArray => studentsArray.splice(1, 12)
            renderUserCard(user)
        }
    });

    createPageDot();

};

console.log(buttonBox.innerHTML)

// Função que define a página escolhida a partir dos botões de página redondos (aparentemente funcionando normalmente)

function changePage(btnNumber) {

    cardBox.innerHTML = '';

    indexPage.innerHTML = btnNumber;

    let pageLenght = 12;

    studentsArray.forEach((user, contagem) => {
        
        if ( 12*((btnNumber) - 1) - 1 < contagem && contagem < 12*(btnNumber) ) {
            studentsArray => studentsArray.splice(12*((btnNumber) - 1), 12)
            renderUserCard(user)
        }

    });

}



// Função que gera os botões automaticamente pelo tamanho do array de estudantes

function createPageDot() {

    buttonBox.innerHTML = '';

    studentsArray.forEach((user, contagem) => {
        
        if (Math.floor(contagem/12) === contagem/12) {

            // console.log('true');

            const newButton = document.createElement('div');
            const buttonHTML = `
            <button class="button" onclick="changePage(${Math.floor(contagem/11 + 1)})">  </button>
            `;
            newButton.innerHTML = buttonHTML;
            buttonBox.appendChild(newButton);

        }

    });

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

studentsArray.forEach((user, contagem) => {
    if (contagem < 12) {
        studentsArray => studentsArray.splice(1, 12)
        renderUserCard(user)
    }
});

createPageDot();
