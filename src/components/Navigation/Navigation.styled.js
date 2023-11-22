import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px 0;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: #e84a5f;
  }

  &+& {
    margin-left: 12px;
  }
`;
