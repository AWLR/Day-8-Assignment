import React, { useEffect, useState } from 'react'
import './App.css'

function FetchData() {

  const [records, setRecords] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(err => console.log(err))
  }, [])


  return (
    <div>
      <table class="table">
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PHONE</th>
          <th>ADDRESS</th>
          <th>LATITUDE</th>
          <th>LONGTITUDE</th>
          <th>WEBSITE</th>

        </tr>

        {records.map((list) => (
          <tbody>
            <tr>
              <td>{list.id}</td>
              <td>{list.name}</td>
              <td>{list.email}</td>
              <td>{list.phone}</td>
              <td>{list.address.street} , {list.address.suite} , {list.address.city} , {list.address.zipcode}</td>
              <td>{list.address.geo.lat}</td>
              <td>{list.address.geo.lng}</td>
              <td>{list.website}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

export default FetchData