import styled from 'styled-components';

function handleFontWeight(w) {
  //   console.log(w);
  switch (w) {
    case 'bolder':
      return 'font-weight: bolder';

    case 'bold':
      return 'font-weight: bold';

    case 'lighter':
      return 'font-weight: lighter';

    case 'light':
      return 'font-weight: light';

    default:
      console.log(!!w ? `font-weight: ${w}` : 'font-weight: normal');
      return !!w ? `font-weight: ${w}` : 'font-weight: normal';
  }
}

export const theme = {
  primary: '#1FC4DA',
  secondary: '#82EFEA',
  light: '#EAEBED',
  accent: {
    light: '#FF8496',
    dark: '#df3851',
  },
};

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
  color: ${(props) => props.color | '#202020'};
  &:hover {
    background: ${(props) => (props.accent ? '#fd687e' : '#1aaec1')};
    font-weight: bolder;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.color || '#202020'};
  text-align: ${(props) => props.align || 'left'};
  ${(props) => props.fw && handleFontWeight(props.fw)};
`;
