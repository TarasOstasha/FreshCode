import React, { Component } from "react";

export default class UserListWithClasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: false,
      error: null,
      currentPage: 1
    };
  }

  loadUsers=(currentPage)=> {
    this.setState({ isFetching: true })
    fetch(`https://randomuser.me/api/?page=${currentPage}&results=5&seed=abc`)
      .then((req) => req.json())
      .then(({results}) => this.setState({ users: results }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isFetching: false }))
  }

  componentDidMount() {
    const { currentPage } = this.state;
    this.loadUsers(currentPage);
  }

  componentDidUpdate(prevProps, presState) {
    const { currentPage: prevPage } = presState;
    const { currentPage } = this.state;
    if(prevPage !== currentPage) {
        this.loadUsers(currentPage)
    }

  }

  nextPage=()=>{
    const { currentPage } = this.state; 
    this.setState({currentPage: currentPage + 1})
  }

  prevPage=()=>{
    
  }

  render() {
    const { users, isFetching, error, currentPage } = this.state;
    return (
      <>
      {currentPage}
      <button onClick={this.nextPage}>{'<'}</button>
      <button>{'>'}</button>
        {isFetching && <div>LOADING...</div>}
        {error && <div>!!!ERROR!!!</div>}
        {!isFetching && !error && (
          <ul>
            {users.map((u) => (
              <li key={u.login.uuid}>{JSON.stringify(u)}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
