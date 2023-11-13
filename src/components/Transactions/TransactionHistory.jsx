import React from 'react';

import {
  HeadCell,
  HeadRow,
  TableData,
  TableRow,
  TransTable,
} from './TransactionsStyled';

export function Transactions({ data }) {
  return (
    <TransTable>
      <thead>
        <HeadRow>
          <HeadCell>Type</HeadCell>
          <HeadCell>Amount</HeadCell>
          <HeadCell>Currency</HeadCell>
        </HeadRow>
      </thead>

      <tbody>
        {data.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableRow>
        ))}
      </tbody>
    </TransTable>
  );
}
