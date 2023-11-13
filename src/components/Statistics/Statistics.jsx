import React from 'react';

import { Container, List, StatLi, Title } from './StatisticsStyled';

export function Statistics({ stats, title }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatLi key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </StatLi>
          );
        })}
      </List>
    </Container>
  );
}
