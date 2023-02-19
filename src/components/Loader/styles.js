import styled from 'styled-components';
import { Loader2 } from 'tabler-icons-react';

export const Wrapper = styled(Loader2)`
  animation: ${({ theme }) => theme.mixins.loader} 2s linear infinite;
`;
