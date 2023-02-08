import styled from "styled-components";

export const Container = styled.div<{ color: string; isBright: boolean }>`
  background-color: ${(props) => props.color};
  color: ${(props) => (props.isBright ? "#101233" : "#F3F4F8")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 1rem;
`;

export const Label = styled.p`
  margin: 0.1rem;
  font-weight: 500;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    display: none;
  } ;
`;
