let firstUser;

const cardBox = document.getElementById("card-box");
const modalDiv = document.getElementById('modal-div');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const role = document.getElementById('role');
const birthday = document.getElementById('birthday');
const statusHTML = document.getElementById('status');
const mode = document.getElementById('mode');
const image = document.getElementById('image');

let showModal = false;

function toggleModal() {
    showModal = !showModal;
    if (showModal === true) {
        modalDiv.style.display = 'flex';
    }else {
        modalDiv.style.display = 'none';
    };
}

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

]

function submitCard() {

    let student = {'image': image.value, 'firstName': firstName.value, 'lastName': lastName.value, 'birthday': birthday.value, 'role': role.value, 'statusHTML': statusHTML.value, 'mode': mode.value};
    // console.log(student);

    studentsArray.unshift(student);
    console.log(studentsArray);

    image.value = '';
    firstName.value = '';
    lastName.value = '';
    birthday.value = '';
    role.value = '';
    statusHTML.value = '';
    mode.value = '';
    modalDiv.style.display = 'none';
    cardBox.innerHTML = '';

    studentsArray => studentsArray.splice(1,12);
    studentsArray.forEach((user, contagem) => (renderUserCard(user)));

};

let indexButton = 1;

button1.style.backgroundColor = '#ffffff';

function showCards(btnNumber) {
    if (btnNumber === 1) {
        indexButton === 1;
        button1.style.backgroundColor = '#ffffff';
        button2.style.backgroundColor = '#c79051a1';
        button3.style.backgroundColor = '#c79051a1';
        cardBox.innerHTML = '';


        studentsArray.forEach((user, contagem) => {
            studentsArray.splice(1,12)
            renderUserCard(user)});


    }
    if (btnNumber === 2) {
        indexButton === 2;
        button1.style.backgroundColor = '#c79051a1';
        button2.style.backgroundColor = '#ffffff';
        button3.style.backgroundColor = '#c79051a1';
        cardBox.innerHTML = '';


        studentsArray.forEach((user, contagem) => {
            studentsArray.splice(11,12)
            renderUserCard(user)});


    }
    if (btnNumber === 3) {
        indexButton === 3;
        button1.style.backgroundColor = '#c79051a1';
        button2.style.backgroundColor = '#c79051a1';
        button3.style.backgroundColor = '#ffffff';
        cardBox.innerHTML = '';

        
        studentsArray.forEach((user, contagem) => {
            studentsArray.splice(21,12)
            renderUserCard(user)});


    };
}

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

studentsArray => studentsArray.splice(1,12);
studentsArray.forEach((user, contagem) => (renderUserCard(user)));

/* const userData = fetch('https://dummyjson.com/users')
.then(dadosCrus => dadosCrus.json())
.then(dadosJson => dadosJson.users.splice(1,12)
    .forEach((user, contagem) => renderUserCard(user))); */