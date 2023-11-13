import {
  FriendsItem,
  StatusCircleOnLine,
  StatusCircleOffLine,
} from './FriendsStyled';

export const FriendsListItem = ({ isOnline, avatar, name }) => (
  <FriendsItem>
    {isOnline ? <StatusCircleOnLine /> : <StatusCircleOffLine />}

    <img src={avatar} alt={name} width={50} />
    <p>{name}</p>
  </FriendsItem>
);
