import { FriendsItem, StatusCircle } from './FriendsStyled';

export const FriendsListItem = ({ isOnline, avatar, name }) => (
  <FriendsItem>
    <StatusCircle $isOnline={isOnline} />

    <img src={avatar} alt={name} width={50} />
    <p>{name}</p>
  </FriendsItem>
);
