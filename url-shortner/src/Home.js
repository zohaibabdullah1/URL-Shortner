import React from 'react'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const HomeForm = () => {
  return (
    <div className='HomeForm'>
    <Form>
      <h2>URL Shortener</h2>
      <FloatingLabel label="Paste URL Here" className="mb-3">
        <Form.Control type="Text" placeholder="Paste URL Here" />
      </FloatingLabel>
      <FloatingLabel label="Expiry Date" className='mb-3'>
        <Form.Control type="date" placeholder="Password" />
      </FloatingLabel>
      <Button className='FormBtn' variant="success">Shorten</Button>
      </Form>
    </div>
  );
}
export default HomeForm;