'use strict';
let highlightedUsers = [];

const options = {
  results: 15,
  page: 1,
  seed: 'pe20212',
};

loadUsers(options);

function loadUsers(options) {
  fetch(
    `https://randomuser.me/api/?results=${options.results}&page=${options.page}&seed=${options.seed}`
  )
    .then(response => response.json())
    .then(({ results }) => {
      renderUsers(results);
    })
    .catch(e => {
      console.log('e :>> ', e);
    });
}

// const [prevBtn, nextBtn] = document.querySelectorAll('button');

// prevBtn.addEventListener('click', prevBtnHandler);
// nextBtn.addEventListener('click', nextBtnHandler);

document.getElementById('prev').addEventListener('click', prevBtnHandler);
document.getElementById('next').addEventListener('click', nextBtnHandler);
document.getElementById('first').addEventListener('click', firstBtnHandler);
document.getElementById('last').addEventListener('click', lastBtnHandler);

function prevBtnHandler() {
  if (options.page > 1) {
    options.page -= 1;
    createPageCount(options.page)
    loadUsers(options);
  }
}
function nextBtnHandler() {
  options.page += 1;
  createPageCount(options.page)
  loadUsers(options);
}

// -- додати кнопку <<, тобто перехід першу сторінку;
function firstBtnHandler() {
    options.page = 1;
    createPageCount(options.page)
    loadUsers(options);
}
// -- додати кнопку <<, тобто перехід останню сторінку;
function lastBtnHandler() {
    options.page = options.results;
    createPageCount(options.page)
    loadUsers(options);
}

function renderUsers(users) {
  const usersList = document.querySelector('.users-list');
  const usersListItems = users.map(u => createUserItem(u));
  usersList.replaceChildren(...usersListItems);
}

// --- вивести дані списком;
function createUserItem({
  name: { first: firstName, last: lastName },
  picture: { large: src },
  dob: { age },
  phone,
  email,
  gender
}) {
  const userListItem = document.createElement('li');
  // колір рамки (фону) карткам генерувати залежно від статі користувача;
  gender === 'male' ? userListItem.style.boxShadow = '0 0 5px blue' : userListItem.style.boxShadow = '0 0 5px pink';
  userListItem.classList.add('user-list-item');
  userListItem.append(
    createUserImg(src, `${firstName} ${lastName}`),
    // додати інформацію про користувача (вік, імейл, ...);
    createUserMainInfo(`FullName - ${firstName} ${lastName}, Age -${ age }, Cellphone - ${phone.replace(/\s+/g, '-')}, @mail - ${email}`), // using regexp
    );
    let clickedFlag = false;
    function userCardHandler(e) {
        clickedFlag = !clickedFlag;
        clickedFlag ?  e.target.style.background = 'aqua' : e.target.style.background = '';
        // console.log(e.target);
        const name = `${firstName} ${lastName}`;
        const indexUser = highlightedUsers.indexOf(name)
        if(indexUser === -1) {
            highlightedUsers.push(name);
        } else {
            highlightedUsers.splice(indexUser,1);
        }
        highlightedUsersF();
        if(highlightedUsers.length === 0) {
            const display = document.getElementById('choosenName');
            display.style.display = 'none';
        }
    }
    userListItem.onclick = userCardHandler;
  return userListItem;
}

function createUserImg(src, alt) {
  const userImgEl = document.createElement('img');
  userImgEl.src = src;
  userImgEl.alt = alt;
  userImgEl.onerror = () => {
    userImgEl.src = './imgs/defaultImg.png';
  };
  return userImgEl;
}

function createUserMainInfo(textContent) {
  //console.log(textContent.split(' '));
  let userMainInfoEl = document.createElement('div');
  textContent.split(', ').forEach(element => {
    //console.log(element);
    const userParagraph = document.createElement('p');
    userMainInfoEl.append(userParagraph)
    userParagraph.textContent = element;
  });
  //console.log(userMainInfoEl);
  return userMainInfoEl;
}


let pageCounerOutput = document.createElement('p');
pageCounerOutput.classList.add('page');
function createPageCount(page) {
    pageCounerOutput.textContent = 'page - ' + page;
    document.body.append(pageCounerOutput);
}
createPageCount(options.page);

function highlightedUsersF() {
    const display = document.getElementById('choosenName');
    display.innerHTML = '';

    highlightedUsers.forEach(value => {
        const li = document.createElement('li');
        li.textContent = value;
        display.appendChild(li);
    });
    display.style.display = 'block';
}
