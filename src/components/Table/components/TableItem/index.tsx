import React, { useContext } from 'react';
import { TableCell } from './index.styles';
import { Button } from '../../../../shared/Button';
import { Company, ActionTypes } from '../../../../store/reducer';
import { Context } from '../../../../store/context';

interface TableItemProps {
  company: Company;
}

const TableItem: React.FC<TableItemProps> = ({ company }) => {
  const { dispatch } = useContext(Context);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    e.preventDefault();

    dispatch({ type: ActionTypes.deleteCompany, payload: id });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ActionTypes.updateCompany, payload: { ...company, [e.target.name]: e.target.value } });
  };

  return (
    <tr>
      <TableCell>
        <input type='text' name='label' value={company.label} onChange={handleChange} />
      </TableCell>
      <TableCell>
        <input type='number' max='100' min='0' name='vision' value={company.vision} onChange={handleChange} />
      </TableCell>
      <TableCell>
        <input type='number' max='100' min='0' name='ability' value={company.ability} onChange={handleChange} />
      </TableCell>
      <TableCell hasButton>
        <Button fluid onClick={(e) => handleDelete(e, company.id)}>
          Delete
        </Button>
      </TableCell>
    </tr>
  );
};

export default TableItem;
