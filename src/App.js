import React from 'react';
import NavBar from './nav.js'
import Container from "./container.js"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
     isLoaded:false,
     items:[],
     data:[],
     input:""
    }
  }
  componentDidMount(){
    fetch("http://universities.hipolabs.com/search?country=United+Kingdom")
      .then(res=>res.json())
      .then(json=>{
        this.setState({
          isLoaded:true,
          items:json,
          data:json        
        })
      })

  }
  
  handlechange=(e)=>{
       let d=[...this.state.data]
      // e.preventDefault()
      this.setState({
    items:d.filter(e => e.name.toLowerCase().includes(this.state.input.toLowerCase())),
    input:e.target.value

      })
      
  }
  render(){
    const unversitiesName=this.state.items.map((e,key)=><tr key={key}><td>{e.name}</td><td><a href={e.web_pages[0]} >{e.web_pages[0]}</a></td></tr>)
    console.log(this.state.input)
return (
  <div>
    <NavBar change={this.handlechange} input={this.state.input}/>
    <Container  name={unversitiesName}/>
      </div>
)

  }


}
export default App
