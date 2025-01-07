import styled from 'styled-components';

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
`;

const InputBox = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.10);
  border-radius: 6px;
  required: false;
`;

const Input = ({label, id, type, value, onChange, required, placeholder}) => {
    return (
        <InputGroup>
            <label>{label}</label>
            <InputBox id={id} type={type} value={value} onChange={onChange} required={required} placeholder={placeholder}/>
        </InputGroup>
    );
};

export default Input
