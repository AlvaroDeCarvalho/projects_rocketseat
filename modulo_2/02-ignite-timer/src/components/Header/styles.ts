import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme['gray-800']};

  nav {
    display: flex;
    gap: 1rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme['gray-100']};

      border-bottom: 3px solid transparent;
      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme['green-500']};
      }
      &.active {
        color: ${({ theme }) => theme['green-500']};
      }
    }
  }
`