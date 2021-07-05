import React, { useContext, useState } from 'react';
import { Container, Label, RedSquare } from './index.styles';
import { Context } from '../../../../store/context';
import { ActionTypes, Company } from '../../../../store/reducer';

interface CompanyProps {
  company: Company;
}

const Point: React.FC<CompanyProps> = ({ company }) => {
  const { dispatch } = useContext(Context);
  const [isDragging, setIsDragging] = useState(false);

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
    <>
      <Container
        style={{ bottom: `${company.ability}%`, left: `${company.vision}%`, opacity: company.checked ? '1' : '0.4' }}
        draggable
        onDrag={handleDrag}
        onDragOver={(e) => e.preventDefault()}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        <Label>{company.label}</Label>
      </Container>
      <RedSquare
        style={{
          visibility: `${isDragging ? 'visible' : 'hidden'}`,
          top: `${100 - company.ability}%`,
          right: `${100 - company.vision}%`,
        }}
      />
    </>
  );
};

export default Point;
