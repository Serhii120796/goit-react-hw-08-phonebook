import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  height: 95%;
  padding: ${p => p.theme.spasing(5)};
  border-radius: ${p => p.theme.spasing(3)};
  background-color: ${p => p.theme.colors.white};
`;