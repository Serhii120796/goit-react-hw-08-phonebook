import styled from 'styled-components';

export const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const InputTitle = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.spasing(3)};
  font-weight: ${p => p.theme.weight.accent};
`;

export const StyleField = styled.input`
  width: 100%;
  display: block;
  background-color: inherit;
  border: ${p => p.theme.borders.gray};
  border-radius: ${p => p.theme.spasing(1)};
`;