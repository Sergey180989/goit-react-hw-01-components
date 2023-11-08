import { styled } from 'styled-components';

export const FriendList = styled.ul`
  margin: 50px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FriendItem = styled.li`
  margin: 0 auto 25px;
  display: flex;
  background: yellow;
  align-items: center;
  gap: 15px;
  width: 200px;
  outline: 2px solid gray;
  border-radius: 10px;
  transition: 200ms ease;
  &:hover {
    scale: 1.05;
  }
`;

export const Status = styled.span`
  padding: 5px;
`;

export const Avatar = styled.img``;

export const Name = styled.p`
  font-size: 20px;
  display: inline-block;
`;

export const Online = styled.span`
  background: green;
  display: inline-block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
`;

export const Offline = styled.span`
  background: grey;
  display: inline-block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
`;
