const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

function App() {
    return (
        <>
        <Header /> 
        <div title="hello">Hello React</div>
        <UserInfo />
        <NewsBody />
        <Footer /></>
    )
}

function UserInfo() {
    const user = {
        name: 'Jack',
        age: 15,
        imgSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
    };

    const userNameStyle = { color: user.age >=18 ? 'blue' : 'green', backround: 'yellow' }

    return (
        <article className="userCard">
            <h2 style={userNameStyle}>{user.name}</h2>
            <img src={user.imgSrc} alt="{user.name}" />
        </article>
    )
}




function NewsBody() {
    const news = { title: "Some news", body: "Something hapanned", isGood: true };
  
    const bodyColor = {
      backgroundColor: news.isGood === true ? "green" : "red",
    };
  
    return (
      <article className="newsInfo" style={bodyColor}>
        <h2>{news.title}</h2>
        <p>{news.body}</p>
      </article>
    );
  }

function Header() {
    return <header className="header"><h1>Page Title</h1></header>
}

function Footer() {
    //return <footer><p>FAQ</p><p>About Us</p><p>HOme</p></footer>
    return (
        <footer>
            <p>FAQ</p>
            <p>About Us</p>
            <p>HOme</p>
        </footer>
    )

}