import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// export const OptionContainer = css`
// padding: 10px 15px;
// cursor: pointer;
// `
export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 70px;
margin-bottom: 25px;
position: relative;
`
export const LogoContainer = styled(Link)`
width: 70px;
height: 100%;
padding: 25px;
`

export const OptionsContainer = styled.div`
height: 100%;
width: 50%;
display: flex;
justify-content: flex-end;
align-items: center;
`

export const OptionLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`
