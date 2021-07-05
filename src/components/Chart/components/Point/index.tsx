import React, { useContext } from 'react';
import { Container, Label } from './index.styles';
import { Context } from '../../../../store/context';
import { ActionTypes, Company } from '../../../../store/reducer';

interface CompanyProps {
  company: Company;
}

const Point: React.FC<CompanyProps> = ({ company }) => {
  const { dispatch } = useContext(Context);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    const parent = (e.target as HTMLDivElement).parentElement!.getBoundingClientRect();

    const updatedCompany = {
      ...company,
      ability: -((e.clientY - parent.y - 500) / 5).toFixed(2),
      vision: +((e.clientX - parent.x) / 5).toFixed(2),
    };
    dispatch({ type: ActionTypes.updateCompany, payload: updatedCompany });
  };

  return (
    <Container
      style={{ bottom: `${company.ability}%`, left: `${company.vision}%` }}
      draggable
      onDrag={handleDrag}
      onDragOver={(e) => e.preventDefault()}
    >
      <Label>{company.label}</Label>
    </Container>
  );
};

export default Point;
