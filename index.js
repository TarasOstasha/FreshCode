// Створіть реакт компонент, який виводить інформацію про користувача:
// фото, ім'я, прізвище, ... .
// Дані про користувача компонент повинен отримувати у пропсах.

// * Застилити картку. Приклад макету прикладено.

// * Додати до інформації про користувача gender. На основі гендера в інлайн-стилях визначати колір імені користувача (або тіні картки тощо).

const root = ReactDOM.createRoot(document.getElementById('root'));
let user = {
    firstName: 'Jack',
    lastName: 'Wilsher',
    imgSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwBB6EpvkBGkaYHYPokDwyq6KuBl9qAvtAIEj5g_eaugebOM5X'
}

root.render(<App />);

function App() {
    return (
        <>
        <div title="hello">Hello React</div>
        <UserInfo gender={ AddUserGender = 'male' } userInfo={user} /> 
        </>
    )
}

function AddUserGender(gender) { // function to set gender
    return gender;
}

function UserInfo(props) {
    const { gender, userInfo } = props;
    user.gender = gender; // set gender to the original user object
    return (
        <div className="card" style={ gender === 'male' ? { boxShadow: 'rgb(0 5 227 / 35%) 0px 5px 15px'} : { boxShadow: 'rgb(243 19 204 / 35%) 0px 5px 15px'} }>
            <h3 className="userName">{userInfo.firstName} {userInfo.lastName}</h3>
            <img src={userInfo.imgSrc} alt="{user.firstName}" />
        </div>
    )
}

