import React, { useContext } from 'react';
import { Container, AxisLabel, InnerAxis, AreaLabel } from './index.styles';
import Point from './components/Point';
import { Context } from '../../store/context';

const Chart: React.FC = () => {
  const { state } = useContext(Context);

  return (
    <Container>
      <AxisLabel axis='x'>Completeness of vision &#8594;</AxisLabel>
      <AxisLabel axis='y'>Ability to execute &#8594;</AxisLabel>
      <InnerAxis orientation='horizontal' />
      <InnerAxis orientation='vertical' />
      <AreaLabel area='top-left'>Challengers</AreaLabel>
      <AreaLabel area='top-right'>Leaders</AreaLabel>
      <AreaLabel area='bottom-left'>Niche Players</AreaLabel>
      <AreaLabel area='bottom-right'>Visionaries</AreaLabel>
      {state.map((company) => (
        <Point key={company.id} company={company} />
      ))}
    </Container>
  );
};

export default Chart;
