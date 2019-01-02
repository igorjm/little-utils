import React, { Component } from 'react'

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.onSearch.bind(this);
  }
  componentDidMount() {
    console.log(this.props.searchCriteria)
  }

  onSearch({ value }) {
    console.log('onSearch', value)
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" onChange={this.onSearch} />
      </React.Fragment>
    )
  }
}

export default SearchInput