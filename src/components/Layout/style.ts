import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas: 
  'ASIDE MAINHEADER'
  'ASIDE CONTENT';

  height: 100vh;
`;
