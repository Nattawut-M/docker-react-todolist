import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
`;

export const Header = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: ${(props) => (props.accent ? '#FF8496' : '#1FC4DA')};
  color: white;
  &:hover {
    background: ${(props) => (props.accent ? '#fd687e' : '#1aaec1')};
    font-weight: bolder;
  }
`;
