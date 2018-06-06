import React, {Component} from "react";  

//*****function based component *********/

// const SearchBar = () => {
//   return <input />;
// }


//****class based component ********/

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = { term: 'Starting value'};
  }
  render(){
    return(
      //  <input  onChange={event => console.log(event.target.value)} />   //create new Input element and set  onChange property with value  this.onInputChange.so we passed evenhandler to input element
     <div className="search-bar">
      <input
      value = {this.state.term}
      //whenever input will change it will call onInputChange with new value
      onChange={event => this.onInputChange( event.target.value)} /> 
      {/* Value of the  input: {this.state.term}                  */}    
     </div>  
    );
  }

  onInputChange(term){

    this.setState({term}) //set state with term
    this.props.onSearchTermChange(term);  //calling callback from App
  }
}

export default SearchBar;