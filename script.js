let firstUser;

const cardBox = document.getElementById("card-box");
const modalDiv = document.getElementById('modal-div');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

let showModal = false;

function toggleModal() {
    showModal = !showModal;
    if (showModal === true) {
        modalDiv.style.display = 'flex';
    }else {
        modalDiv.style.display = 'none';
    };
}

let indexButton = 1;


button1.style.backgroundColor = '#ffffff';

function showCards(btnNumber) {
    if (btnNumber === 1) {
        indexButton === 1;
        button1.style.backgroundColor = '#ffffff';
        button2.style.backgroundColor = '#c79051a1';
        button3.style.backgroundColor = '#c79051a1';
        cardBox.innerHTML = '';
        const userData = fetch('https://dummyjson.com/users')
        .then(dadosCrus => dadosCrus.json())
        .then(dadosJson => dadosJson.users.splice(1,12)
            .forEach((user, contagem) => renderUserCard(user)));
    }
    if (btnNumber === 2) {
        indexButton === 2;
        button1.style.backgroundColor = '#c79051a1';
        button2.style.backgroundColor = '#ffffff';
        button3.style.backgroundColor = '#c79051a1';
        cardBox.innerHTML = '';
        const userData = fetch('https://dummyjson.com/users')
        .then(dadosCrus => dadosCrus.json())
        .then(dadosJson => dadosJson.users.splice(11,12)
            .forEach((user, contagem) => renderUserCard(user)));
    }
    if (btnNumber === 3) {
        indexButton === 3;
        button1.style.backgroundColor = '#c79051a1';
        button2.style.backgroundColor = '#c79051a1';
        button3.style.backgroundColor = '#ffffff';
        cardBox.innerHTML = '';
        const userData = fetch('https://dummyjson.com/users')
        .then(dadosCrus => dadosCrus.json())
        .then(dadosJson => dadosJson.users.splice(21,12)
            .forEach((user, contagem) => renderUserCard(user)));
    };
}

function renderUserCard(userData) {
    const cardHTML = `
        <div class="card">      
            <img class="image" src=${userData.image}>
            <div class="text-box">
                <div class="name">
                    <b> ${userData.firstName} ${userData.lastName} </b>
                </div>
                <div class="description">
                    <b>Role:</b>
                    <b>Birthday:</b> 
                    <b>Status:</b> 
                    <b>Mode:</b> 
                </div>
                <div class="personal-description">
                    <div class="role"> Teacher </div>
                    <div class="birthday"> ${userData.birthDate} </div>
                    <div class="status"> Active </div>
                    <div class="mode"> Onsite </div>                        
                </div>  
            </div>
        </div>
    `;
    const newCard = document.createElement('div');
    newCard.innerHTML = cardHTML;
    cardBox.appendChild(newCard);
};

const userData = fetch('https://dummyjson.com/users')
.then(dadosCrus => dadosCrus.json())
.then(dadosJson => dadosJson.users.splice(1,12)
    .forEach((user, contagem) => renderUserCard(user)));