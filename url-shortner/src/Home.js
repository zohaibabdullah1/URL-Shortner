import React from 'react'
import Button from 'react-bootstrap/Button';
import {Form, FormGroup, Label, Input} from 'reactstrap';

const Home = () => {
  return (
    <>
  <Form>
  <h2 className="display-6 mt-5">Enter URL</h2>
  <FormGroup className="position-relative">
    <Label for="url">Enter URL</Label>
    <Input type='url' placeholder='Enter Valid URL' />
  </FormGroup>
  <FormGroup className="position-relative">
    <Label for="date">Expiry Date</Label>
    <Input type='date' />
  </FormGroup>
    <div className="d-grid">
<Button variant='primary' size='md' pt role='button'>Generate Short URL</Button>
    </div>
</Form>

        </>
  );
}
export default Home;