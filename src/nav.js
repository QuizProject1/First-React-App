
import React from 'react'
let NavBar= (props)=>{

    return (

        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">WebSiteName</a>
          </div>
          <form className="navbar-form navbar-left" >
            <div className="input-group">
              <input value={props.input}  className="form-control" placeholder="Search" name="search" onChange={props.change}/>
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>


    )

}
export default NavBar;