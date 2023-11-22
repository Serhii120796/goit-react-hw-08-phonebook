import styled from 'styled-components';

export const Header = styled.header``;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #2a363b;
  max-width: 400px;
  margin: 0 auto 20px;
  background-color: ${p => p.theme.colors.white};
`;
