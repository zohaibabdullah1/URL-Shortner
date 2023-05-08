import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Input } from 'reactstrap';
import { toast } from 'react-toastify';
// import Table from 'react-bootstrap/Table';
import 'react-toastify/dist/ReactToastify.css';

import 'react-toastify/dist/ReactToastify.css';

const History = () => {
  const [links, setLinks] = useState([]);
  const [isInputActive, setIsInputActive] = useState(false);
  const [date,setDate]=useState('');

useEffect(() => {
  const links = JSON.parse(localStorage.getItem('links'));
  if (links) {
   setLinks(links);
  }
}, [links]);
const inputActive = () => {
  setIsInputActive(!isInputActive);
};
//Update Expiry date
const handleUpdate=(id)=>{
  const newExpiry = links.map(item => {
    if (item.id === id) {
      return {
        ...item,
        expiry: date
      };
    } else {
      return item;
    }
  });
  localStorage.setItem('links', JSON.stringify(newExpiry));
  setIsInputActive(!isInputActive);
}
//Delete Method
const handleDelete= (id) => {
  const newLink = links.filter((item) => item.id !== id);
  setLinks(newLink);
  localStorage.setItem('links', JSON.stringify(newLink));
};
//Copy Url Method
const copyUrl=(data)=>{
  navigator.clipboard.writeText(data);
  toast.success('URL copied to clipboard!', {
    // position: 'top-center',
    autoClose: 2000,
  });
}

  return (
    <>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>URL</th>
        <th>Short URL</th>
        <th>Expiry Date</th>
        <th>Edit</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
  {links.map((link, key) => (
    <tr key={key}>
      <td>{key + 1}</td>
      <td>{link.longUrl}</td>
      <td>{link.shortUrl}</td>
      <td>
        <Input
          type="date"
          className="text-center"
          name="shortUrl"
          value={link.expiry}
          onChange={(e) => setDate(e.target.value)}
          disabled={!isInputActive}
        />
        {link.expiry && (
          <i
            className={`material-icons icon ${
              new Date(link.expiry) < new Date() ? "text-danger" : "text-success"
            }`}
          >
            {new Date(link.expiry) < new Date() ? "error_outline" : "done"}
          </i>
        )}
      </td>
      <td>
        <Button className="table_btn" variant="warning" size="sm" onClick={inputActive}>
          <i className="material-icons icon">create</i>
        </Button>
        <Button
          className="table_btn"
          variant="success"
          size="sm"
          onClick={() => handleUpdate(link.id)}
        >
          <i className="material-icons icon">save</i>
        </Button>
      </td>
      <td>
        <Button
          className="table_btn"
          variant="info"
          size="sm"
          onClick={() => copyUrl(link.shortUrl)}
        >
          <i className="material-icons icon">content_copy</i>
        </Button>
        <Button
          className="table_btn"
          variant="danger"
          size="sm"
          onClick={() => handleDelete(link.id)}
        >
          <i className="material-icons icon">delete_sweep</i>
        </Button>
      </td>
    </tr>
  ))}
</tbody>

  </Table>
    </>
  )
}
export default History;