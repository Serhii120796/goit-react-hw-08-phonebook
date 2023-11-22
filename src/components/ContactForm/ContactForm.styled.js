import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Main = styled.main`
max-width: 400px;
  margin: 0 auto;
  background-color: ${p => p.theme.colors.white};
`

export const FormTitle = styled.h1`
text-align: center;
`
export const FormWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${p => p.theme.spasing(3)};
  margin-bottom: ${p => p.theme.spasing(5)};
  max-width: 400px;
  margin: 0 auto;
`;

export const Label = styled.label`
  width: 100%;
`;

export const InputTitle = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.spasing(3)};
  font-weight: ${p => p.theme.weight.accent};
`;

export const FieldWraper = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.spasing(5)};
`;

export const StyleField = styled(Field)`
  width: 100%;
  display: block;
  background-color: inherit;
  border: ${p => p.theme.borders.gray};
  border-radius: ${p => p.theme.spasing(1)};
`;

export const StyleErrorMessage = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
`;
