import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Model = styled.div`
  display: inline-block;
  margin-top: 60px;
  border-radius: 5px;
  background: #ffffff;
  width: 40%;
`;

export const ModelHeading = styled.div`
  border-bottom: 1px solid #dddddd;
  padding: 20px 20px 20px;
`;

export const ModelBody = styled.div`
  border-bottom: 1px solid #dddddd;
  padding: 20px 20px 20px;
  font-weight: 400;
`;

export const ModelFooter = styled.div`
  padding: 20px 20px 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
