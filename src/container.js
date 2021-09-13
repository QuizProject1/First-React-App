import React from "react"
let Container = (props)=>{

    return(

        <table className="table table-hover">
        <thead>
          <tr>
            
            <th>University </th>
            <th>Web Pages</th>

          </tr>
        </thead>
        <tbody>
        {props.name}
        </tbody>
    
      </table>

    )





}
export default Container;