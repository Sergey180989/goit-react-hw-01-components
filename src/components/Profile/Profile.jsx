import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  Description,
  StatisticItem,
  StatisticList,
  StatisticName,
  UserInfo,
  UserName,
} from './ProfileStyled';

export function Profile({ user }) {
  const { username, tag, location, avatar, stats } = user;
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <StatisticList>
        <StatisticItem>
          <StatisticName>Followers</StatisticName>
          <span>{stats.followers}</span>
        </StatisticItem>
        <StatisticItem>
          <StatisticName>Views</StatisticName>
          <span>{stats.views}</span>
        </StatisticItem>
        <StatisticItem>
          <StatisticName>Likes</StatisticName>
          <span>{stats.likes}</span>
        </StatisticItem>
      </StatisticList>
    </Card>
  );
}
