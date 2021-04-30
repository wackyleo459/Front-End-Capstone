import Styled from 'styled-components';

export default Styled.div`
  width: ${props => props.percent * 2}%;
  height: 30px;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.25), inset 0 -1px 0 rgba(0,0,0,.05);
  border-radius: 10px;
  display: invert;
  background: #fb0;
  background: -webkit-linear-gradient(top,#050505,#050505);
  background: linear-gradient(to bottom,#050505,#050505);
  background-color: #050505;

`