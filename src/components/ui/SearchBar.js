import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    const { handleChange } = this.props;
    this.setState({
      text: e.target.value,
    });

    handleChange(e.target.value);
  };

  render() {
    const { text } = this.state;
    return (
      <section className="search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search Characters"
            value={text}
            onChange={this.onChange}
          />
        </form>
      </section>
    );
  }
}

export default SearchBar;
