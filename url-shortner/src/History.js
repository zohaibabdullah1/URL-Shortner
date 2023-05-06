import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const History = () => {
  const [links, setLinks] = useState([]);

useEffect(() => {
  const links = JSON.parse(localStorage.getItem('links'));
  if (links) {
   setLinks(links);
  }
}, []);
const copyUrl=(data)=>{
  console.log(data);
  navigator.clipboard.writeText(data);
}


  return (
    <>
    <Table striped>
    <thead>
      <tr>
        <th>#</th>
        <th>URL</th>
        <th>Short URL</th>
        <th>Expiry Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {links.map((link, key) => (
        <tr key={key}>
          <td>{key+1}</td>
          <td>{link.longUrl}</td>
          <td>{link.shortUrl}</td>
          <td>{link.expiry}</td>
          <td>
            <Button className='table_btn' variant="info" size='sm' onClick={()=>copyUrl(link.shortUrl)}><i className="material-icons icon">content_copy</i></Button>
                {/* {' '} */}
            <Button className='table_btn' variant="warning" size='sm'><i className="material-icons icon">create</i></Button>
                {/* {' '} */}
            <Button className='table_btn' variant="danger" size='sm'><i className="material-icons icon">delete_sweep</i></Button>
          </td>
      </tr>
      ))}
    </tbody>
  </Table>
    </>
  )
}
export default History;