import styled from 'styled-components';

export default styled.div`
  width: ${props => props.percent}%;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.25), inset 0 -1px 0 rgba(0,0,0,.05);
  border-radius: 1px;
  background: #fb0;
  background: -webkit-linear-gradient(top,#d4d2c9 ,#d4d2c9);
  background: linear-gradient(to bottom,#d4d2c9 ,#d4d2c9);
  background-color: #d4d2c9;
`