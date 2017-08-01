import styled from 'styled-components';

const Box = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background-color: ${props => props.color};
`;


export default Box;