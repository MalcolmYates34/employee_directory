import React from "react"

function Table (props){
    console.log(props.employeeList)
return (<table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Email</th>
    <th scope="col">Phone Number</th>
    <th scope="col">Photo</th>
  </tr>
</thead>
<tbody>
    {props.employeeList.length > 0 ?
     props.employeeList.map(employee => {
        return (
            <tr>
            <th scope="row">1</th>
        <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td><img src={employee.picture.thumbnail}></img></td>
          </tr>
        
        )
    }):(
  <tr>
  <th scope="row">1</th>
  <td>Mark</td>
  <td>Otto</td>
  <td>@mdo</td>
  <td>@mdo</td>
  <td>@mdo</td>
</tr>

    ) }
  
</tbody>
</table>)
}
export default Table