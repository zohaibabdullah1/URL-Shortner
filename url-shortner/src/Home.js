import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
import {Form, FormGroup, Label, Input} from 'reactstrap';

const Home = () => {
  const [data, setData]=useState([]);
  const [formData, setFormData]=useState({
    id:'',
    longUrl:'',
    shortUrl:'',
    expiry:''
  });
  const inputHandle=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData,[name]:value});
  }
  function genId() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let counter = 0;
    while (counter < 8) {
      result += characters.charAt(Math.random() * characters.length);
      counter += 1;
    }
    return result;
}
  const submitForm=(e)=>{
    e.preventDefault();
    const id= genId();
        const save={...formData, id:id}
        setData([...data,save]);
        console.log(data);
  }

  return (
    <>
        <Form action='post'>
          <h2 className="display-6">Shorten your links, simplify your life</h2>
        <FormGroup className="position-relative">
          <Label for="url">Enter URL</Label>
          <Input type='url' placeholder='Enter Valid URL' name="longUrl" value={formData.longUrl} onChange={inputHandle} required/>
        </FormGroup>
        <FormGroup className="position-relative">
          <Label for="date">Expiry Date</Label>
          <Input type='date' name="expiry" value={formData.expiry} onChange={inputHandle} required/>
        </FormGroup>
          <div className="d-grid">
      <Button variant='primary' size='md' onClick={submitForm}>Generate Short URL</Button>
          </div>
      </Form>
      {/* <span className='shortUrl'>
      <Link to={data[data.length-1].shortUrl} target='_blank'>Short Url</Link>
      </span> */}
        </>
  );
}
export default Home;