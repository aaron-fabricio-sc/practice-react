import React from "react";
import "../components/styles/BadgeNew.css";

import header from "../images/badge-header.svg";
import Badge from "../components/Badge";

import BadgeForm from "../components/BadgeForm";

class ReactNew extends React.Component {
  state = {
    form: {
      first: "",
      Apellidos: "",
      email: "",
      trabajo: "",
      twitter: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header}></img>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <Badge
                name={this.state.form.first}
                lastName={this.state.form.Apellidos}
                email={this.state.form.email}
                carrere={this.state.form.trabajo}
                twitter={this.state.form.twitter}
                logo="https://scontent.flpb2-2.fna.fbcdn.net/v/t1.0-1/p200x200/102788405_1554612481367516_754221753454806839_o.jpg?_nc_cat=103&_nc_sid=7206a8&_nc_ohc=WvS8JvYNhUcAX-e9EyJ&_nc_ht=scontent.flpb2-2.fna&_nc_tp=6&oh=d8d981c255bfb60e6e2aeb6a042b0246&oe=5F4A2506"
              ></Badge>
            </div>
            <div className="col-12 col-lg-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              ></BadgeForm>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ReactNew;
