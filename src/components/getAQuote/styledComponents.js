import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContentGetaQuote = styled.div`
  background: red;
  padding: 1em;
`;
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  ${breakpoint('tablet')`
    width: 650px;
  `}
  ${breakpoint('desktop')`
    width: 991px;
  `}
`;
export const QuoteTop = styled.div`
  background: blue;
  padding: 1em .5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
  }
`;

export const QuoteBottom = styled.div`
  background: green;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;
