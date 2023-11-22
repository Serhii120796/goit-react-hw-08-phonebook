import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const FormTitle = styled.h1`
  text-align: center;
  padding: 0;
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
  border: ${p => p.theme.borders.gray};
  border-radius: ${p => p.theme.spasing(1)};
`;

export const StyleErrorMessage = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
`;
