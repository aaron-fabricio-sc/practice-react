import React from "react";

class BadgeForm extends React.Component {
  // state = {};
  // handleChange = (e) => {
  //   // console.log({
  //   //   name: e.target.name,
  //   //   value: e.target.value,
  //   // });
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };
  handleClick = (e) => {
    console.log("se hizp click");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>Nuevo Badge</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nombres</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="first"
              value={this.props.formValues.first}
            ></input>
          </div>
          <div className="form-group">
            <label>Apellidos</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="Apellidos"
              value={this.props.formValues.Apellidos}
            ></input>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            ></input>
          </div>
          <div className="form-group">
            <label>Trabajo</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="trabajo"
              value={this.props.formValues.trabajo}
            ></input>
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            ></input>
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            SAVE
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
