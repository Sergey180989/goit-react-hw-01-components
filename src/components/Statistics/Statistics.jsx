import React from 'react';

import { Container, List, StatLi, Title } from './StatisticsStyled';

export function Statistics({ stats, title }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(object => {
          return (
            <StatLi key={object.id}>
              <span>{object.label}</span>
              <span>{object.percentage}%</span>
            </StatLi>
          );
        })}
      </List>
    </Container>
  );
}
