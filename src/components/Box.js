import styled from 'styled-components';

const Box = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background-color: ${props => props.color};
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    position: ${props => props.position};
`;

export default Box;
