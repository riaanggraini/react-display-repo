import React, {Component} from 'react';

export default class SearchBar extends Component {
    state = {
        name: '',
      };
    handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
    handleSubmit = e => {
        e.preventDefault();
        console.log(e)
          this.props.searchRepos(this.state);
          this.handleReset();
      };
    render() {
      return(
        <form onSubmit={this.handleSubmit}>
        <input 
        type="search" 
        id="search" 
        name="q"
        placeholder="enter the username here"
        onChange={this.handleInputChange}
         />
         <button type="submit">Submit</button>
       </form>

         
      )
    }
  }