import React from 'react';
import { Container, AxisLabel, InnerAxis, AreaLabel, Point, PointLabel } from './index.styles';

const Chart: React.FC = () => {
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
      <Point top={50} left={50}>
        <PointLabel>Microsoft</PointLabel>
      </Point>
    </Container>
  );
};

export default Chart;
