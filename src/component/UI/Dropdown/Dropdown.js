import React from 'react';
import styled from 'styled-components';

const StyledDropdown = styled.ul`
    position: absolute;
    right: 0;
    top: 0;
    background-color: white;
    overflow: hidden;
    padding-top: 4rem;
    z-index: 40;
    max-height: 0;
    width: 6rem;
    transition: all 0.2s ease-in;
    border-radius: 10px;

    &.toggle {
        max-height: 20rem;
    }

    & li {
        height: 2rem;
        
    }

    & button {
        cursor: pointer;
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
    }

    & button:hover {
        background: rgba(0, 0, 0, 0.3);
        color: white;
    }

`

const dropdown = props => {
    return (
        <StyledDropdown className={props.toggleDropdown ? 'toggle' : null}>
            <li><button onClick={props.profileChangeClicked} type='button'>profile</button></li>
            <li><button type='button'>quiz</button></li>
            <li><button onClick={props.signOutClicked} type='button'>sign-out</button></li>
        </StyledDropdown>
    );
}

export default dropdown;