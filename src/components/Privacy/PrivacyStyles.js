import styled from 'styled-components';

export const Updated = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.5);
  padding-bottom: 3.2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    padding-bottom: 16px;
  }
`;

export const Heading = styled.h3`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: ${(props) => props.theme.colors.accent1};
  padding: 3.2rem 0 1.2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
    padding: 2rem 0 0.8rem;
  }
`;

export const Text = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  padding-bottom: 1.2rem;

  a {
    color: #fff;
    text-decoration: underline;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const List = styled.ul`
  max-width: 800px;
  padding: 0 0 1.2rem 2.4rem;
`;

export const ListItem = styled.li`
  list-style: disc;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

  strong {
    font-weight: 600;
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
