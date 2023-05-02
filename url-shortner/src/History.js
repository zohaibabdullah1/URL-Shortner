import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const History = () => {
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
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>
          <Button variant="info">Copy</Button>
            {' '}
          <Button variant="warning">Edit</Button>
            {' '}
          <Button variant="danger">Delete</Button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>
          <Button variant="info">Copy</Button>
            {' '}
          <Button variant="warning">Edit</Button>
            {' '}
          <Button variant="danger">Delete</Button>
        </td>
      </tr>
    </tbody>
  </Table>
    </>
  )
}
export default History;