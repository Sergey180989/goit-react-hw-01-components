import { styled } from 'styled-components';

export const Container = styled.section`
  width: 600px;
  max-height: 300px;
  border: 2px blue solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  background-color: orange;
  border-radius: 10px;
`;

export const Title = styled.h2`
  font-size: 35px;
  margin: 50px auto;
  text-align: center;
  color: grey;
`;

export const List = styled.ul`
  margin-bottom: 10px;
  padding: 40px 35px;
  border-top: 3px solid blue;
  display: flex;
  justify-content: space-between;
  background-color: green;
`;

export const StatLi = styled.li`
  display: flex;
  gap: 10px;
  padding: 5px;
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  color: white;
  transition: 200ms ease;
  :last-child {
    color: red;
  }
  &:hover {
    scale: 1.05;
    cursor: pointer;
  }
`;
