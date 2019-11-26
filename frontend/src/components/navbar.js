import React, { Component } from "react";
import Form from "./form.js";
import UserLoader from "./loader/userLoader.js";
import UserBar from "./userBar.js";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      name: "",
      id: "",
      loading: false
    };
    this._isMounted = false;
    this.searchPost = this.searchPost.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setUser = this.setUser.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.setState({ loading: true });
    }
    let url = `https://polar-temple-62918.herokuapp.com/user/session`;
    fetch(url, {
      method: "POST",
      credentials: "include"
    })
      .then(resp => {
        return resp.json();
      })
      .then(res => {
        if (this._isMounted) {
          this.setState(
            {
              id: res.id || "",
              name: res.name || "",
              loading: false
            },
            () => {
              this.props.setUser(this.state.id);
            }
          );
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  searchPost(search) {
    this.props.setSearch(search);
  }
  onSubmit(input) {
    this.setState({ loading: true });
    let url = `https://polar-temple-62918.herokuapp.com/user/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: input.email,
        password: input.password
      }),
      credentials: "include"
    })
      .then(resp => {
        if (resp.status != 200) throw "Email or password is not correct";
        else return resp.json();
      })
      .then(res => {
        this.setState(
          {
            id: res.id,
            name: res.name,
            loading: false
          },
          () => {
            this.props.setUser(this.state.id);
          }
        );
      })
      .catch(err => {
        alert(err);
        this.setState({ loading: false });
      });
  }
  Logout(event) {
    event.preventDefault();
    let url = `https://polar-temple-62918.herokuapp.com/user/logout`;
    fetch(url, {
      method: "POST",
      credentials: "include"
    });
    this.setState({ name: "", id: "" }, () => {
      this.props.setUser(this.state.id);
    });
  }

  setUser() {
    if (this.state.loading) {
      return <UserLoader />;
    } else if (this.state.user == "" || this.state.id == "") {
      return <Form onSubmit={this.onSubmit.bind(this)} />;
    } else
      return (
        <UserBar
          name={this.state.name}
          id={this.state.id}
          Logout={this.Logout}
        />
      );
  }

  render() {
    return (
      <div className="d-flex flex-column bd-highlight mb-3">
        <div className="d-flex mt-4 pb-3">
          <div className="p-3 flex-grow-1 bd-highlight">
            <a href="https://github.com/mos311063">
              <img src="./icon.svg" alt="" width="50" height="50" />
            </a>
            <span> MERN Forum </span>
          </div>
          <div className="p-2">{this.setUser()}</div>
        </div>
        <div className="col-sm-6">
          <form className="form-block">
            <div className="input-group">
              <input
                onChange={e => this.searchPost(e.target.value)}
                className="form-control "
                type="search"
                placeholder="Search by title"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <i className="fa fa-search"></i>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
