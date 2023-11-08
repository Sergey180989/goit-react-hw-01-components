import React from 'react';
import 'modern-normalize';

import { Profile } from './Profile/Profile';
import user from '../components/data/user.json';

import { Statistics } from './Statistics/Statistics';
import stats from '../components/data/data.json';

import { Friends } from './Friends/Friends';
import friendList from '../components/data/friends.json';

import { Transactions } from './Transactions/TransactionHistory';
import transactions from '../components/data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={stats} title="Upload stats" />
      <Statistics stats={stats} />
      <Friends list={friendList} />
      <Transactions data={transactions} />
    </div>
  );
};
