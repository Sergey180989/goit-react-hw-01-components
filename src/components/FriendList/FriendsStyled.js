import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`;

export const FriendsItem = styled.li`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  width: 500px;
  transition: 250ms ease;
  box-shadow: 2px 2px 3px 1px lightgrey;

  align-items: center;
  border: 1px solid gray;
  min-width: 150px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover {
    scale: 1.02;
    box-shadow: 4px 4px 5px 1px lightgrey;
  }
`;

export const StatusCircle = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ $isOnline }) => ($isOnline ? 'green' : 'red')};
`;
