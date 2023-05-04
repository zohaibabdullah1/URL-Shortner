import React from 'react'
import Button from 'react-bootstrap/Button';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
// import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,

} from 'reactstrap';

const FormData = () => {
  return (
    <>
        <Form>
  <FormGroup className="position-relative">
    <Label for="exampleEmail">
    </Label>
    <Input valid type='url' placeholder='Enter Valid URL' />
    {/* <FormText>
      Example help text that remains unchanged.
    </FormText> */}
  </FormGroup>
  <FormGroup className="position-relative">
    <Label for="examplePassword">
    </Label>
    <Input invalid />
    {/* <FormText>
      Example help text that remains unchanged.
    </FormText> */}
  </FormGroup>
    <div className="d-grid gap-2">
<Button variant='primary' size='md' pt role='button'>Generate Short URL</Button>
    </div>
  
  
</Form>

        </>
  );
}
export default FormData
// export default HomeForm;