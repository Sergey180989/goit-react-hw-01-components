import React from 'react';
import 'modern-normalize';

import { Profile } from './Profile/Profile';
import user from '../data/user.json';

import { Statistics } from './Statistics/Statistics';
import stats from '../data/data.json';

import { FriendList } from './FriendList/FriendsList';
import friends from '../data/friends.json';

import { Transactions } from './Transactions/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stats} title="Upload stats" />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <Transactions data={transactions} />
    </div>
  );
};
