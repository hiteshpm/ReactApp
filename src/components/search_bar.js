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
     <div>
      <input  
      value = {this.state.term}
      onChange={event => this.setState({ term: event.target.value})} /> 
      {/* Value of the  input: {this.state.term}                  */}    
     </div>  
    );
  }

  // onInputChange(event){

  //   console.log(event.target.value);
  //   //console.log(event);
  // }
}

export default SearchBar;