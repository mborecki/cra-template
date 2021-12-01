import styled from "styled-components";
import gifSrc from '../assets/ajax-loader.gif';

const Loader = styled.div`
    background: url(${gifSrc}) 50% 50% no-repeat;
    background-size: contain;

    max-width: 128px;
    width: 100%;
    margin: 2rem auto;
    min-height: 50vh;
`;

export default Loader;
