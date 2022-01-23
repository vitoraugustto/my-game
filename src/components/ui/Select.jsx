import styled from "styled-components";

const StyledSelect = styled.select`
  display: block;
  padding: 10px 2px;
  color: white;
  background-color: #202020;
  font-size: 20px;
  text-align: center;
  border: none;
  outline: none;
`;

export default function Select({ children, ...props }) {
  console.log(props);
  return (
    <StyledSelect
      style={{ width: props.width }}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    >
      {children}
    </StyledSelect>
  );
}
