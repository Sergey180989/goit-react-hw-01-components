import { FriendsListItem } from './FriendsListItem.jsx';
import { FriendsList } from './FriendsStyled.js';

export const FriendList = ({ friends }) => (
  <FriendsList>
    {friends.map(({ id, name, avatar, isOnline }) => (
      <FriendsListItem
        key={id}
        name={name}
        avatar={avatar}
        isOnline={isOnline}
      />
    ))}
  </FriendsList>
);
