import styled from 'styled-components';

interface iTagPros {
  color: string,
}

export const Container = styled.li`
  position: relative;
  background: ${props => props.theme.colors.tertiary};
  list-style: none;

  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  transition: all 350ms ease;

  &:hover {
    opacity: .8;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 15px;

    span {
      font-weight: 700;
      font-size: 18px;
    }
  }
`;

export const Tag = styled.div<iTagPros>`
  background: ${props => props.color};
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0%, -50%);
  width: 5px;
  height: 60%;
`;