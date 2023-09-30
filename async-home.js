
// 1) Зробити запит даних до одного із серверів (одного з API) на вибір, використовуючи fetch()
// - Випадкові факти про котів https://catfact.ninja/fact
// Наприклад, при натисканні на кнопку змінювати рядок на новий рандомний.
loadData();

function loadData() {
    const dataFromServer = 'https://catfact.ninja/fact';
    fetch(dataFromServer)
        .then(res => res.json())
        .then(data => createMainWrapper(data))
        .catch(err => console.log(err))
}
function createMainWrapper({ fact }) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('main');
    wrapper.style.textAlign = 'center';

    wrapper.append(createH1(),createH2(fact), loadCatImg(), createBtn(wrapper))
    document.body.append(wrapper);
}
function createH1() {
    const h1 = document.createElement('h1');
    h1.classList.add('h1');
    h1.textContent = 'Interesting Facts About Cats';
    return h1;
}
function createH2(data) {
    const h2 = document.createElement('h2');
    h2.textContent = `" ${data} "`;
    h2.style.fontStyle = 'italic';
    return h2;
}
function loadCatImg() {
    const catImg = document.createElement('img');
    catImg.width = 500;
    fetch(`https://cataas.com/cat`)
        //.then(res => res.json())
        .then(data => catImg.src = data.url) // I've found this api - https://cataas.com/. It can generate random imgs each time
        .catch(err => console.log(err))
        return catImg;
}
function createBtn(parentDiv) {
    const catInfoBtn = document.createElement('button');
    catInfoBtn.textContent = 'More Facts';
    catInfoBtn.style.display = 'block';
    catInfoBtn.style.margin = '0 auto';
    function generateFacts() {
        parentDiv.textContent = ''
        loadData();
    }
    catInfoBtn.onclick = generateFacts;
    return catInfoBtn;
}
