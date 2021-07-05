import React, { useEffect, useContext } from 'react';
import TableItem from './components/TableItem';
import { Container, TableHeader } from './index.styles';
import { Button } from '../../shared/Button';
import { Context } from '../../store/context';
import { ActionTypes } from '../../store/reducer';

const Table: React.FC = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('companies', JSON.stringify(state));
    }, 300);

    return () => clearTimeout(timer);
  }, [state]);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const newCompany = {
      id: Date.now(),
      label: 'New',
      vision: 50,
      ability: 50,
    };

    dispatch({ type: ActionTypes.addCompany, payload: newCompany });
  };

  return (
    <Container>
      <Button onClick={handleAdd}>Add</Button>
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
          {state.map((company) => (
            <TableItem key={company.id} company={company} />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Table;
