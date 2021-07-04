import React from 'react';
import { Container, TableHeader, TableCell, Button } from './index.styles';

const Table: React.FC = () => {
  return (
    <Container>
      <Button>Add</Button>
      <table>
        <thead>
          <tr>
            <TableHeader width='16rem'>Label</TableHeader>
            <TableHeader>Vision</TableHeader>
            <TableHeader>Ability</TableHeader>
            <TableHeader>Delete</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>IBM</TableCell>
            <TableCell>asdasd</TableCell>
            <TableCell>asdasd</TableCell>
            <TableCell hasButton>
              <Button fluid>Delete</Button>
            </TableCell>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default Table;
