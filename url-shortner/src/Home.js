import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  const [data, setData]=useState(() => {
    return JSON.parse(localStorage.getItem('links')) || []
  });
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
    setUrlError('')
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
    const short= `https://cuttly/${id}`;
    if (!isUrlValid(formData.longUrl))
    {
      setUrlError('Please enter a valid URL');
      return;
    }
        const save={...formData, id:id, shortUrl:short}
        setData([...data,save]);
  }
  const isUrlValid = (url) => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
  }
  const copyUrl=()=>{
    const shortLink=data[data.length-1].shortUrl;
    navigator.clipboard.writeText(shortLink);
    toast.success('URL copied to clipboard!', {
    autoClose: 2000,
    });

  }
  const [urlError, setUrlError] = useState('');
  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(data));
  }, [data]);

  return (
    <>
        <Form action='post'>
        <h2 className="display-6">Shorten your links, simplify your life</h2>
        <FormGroup className="position-relative">
          <Label for="url">Enter URL</Label>
          <Input type='url' placeholder='Enter Valid URL' name="longUrl" value={formData.longUrl} onChange={inputHandle} required/>

          {urlError && (<div className='text-danger'>{urlError}</div>)}
        </FormGroup>
        <FormGroup className="position-relative">
          <Label for="date">Expiry Date</Label>
          <Input type='date' name="expiry" value={formData.expiry} onChange={inputHandle} required/>
        </FormGroup>
          <div className="d-grid">
      <Button variant='primary' size='md' onClick={submitForm}>Generate Short URL</Button>
          </div>
      </Form>
      <Form>
        <h4 className="display-6 text-center">Copy Your Last Short URL</h4>
      <FormGroup className="position-relative shortUrl_copy">
        <Input type='text' name="shortUrl" value={data[data.length-1].shortUrl} disabled/>
        <Button variant='info' onClick={copyUrl}><i className="material-icons icon">content_copy</i></Button>
      </FormGroup>
      </Form>
    </>
  );
}
export default Home;
