import styled from 'styled-components';

export const MovieCard = styled.div`
  background-color: #373b69;
  border-radius: 3px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  width: 220px;
  margin: 1rem;
  overflow: hidden;
  position: relative;
`;

export const MovieImage = styled.img`
  width: 100%;
`;

export const MovieTitle = styled.h3`
  margin: 0;
`;

export const MovieYear = styled.span`
  background-color: #22254b;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-weight: bold;
`;

export const MovieInfo = styled.div`
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 1rem;
  letter-spacing: 0.5px;
`;
