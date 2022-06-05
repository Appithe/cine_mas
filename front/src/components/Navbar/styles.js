import styled from 'styled-components';

export const Navbar = styled.nav`
    border: solid 1px;
    background: transparent;
    padding: 1em;

    display: flex;
    flex-direction: row;
    align-items: center;

    background: rgba( 180, 180, 180, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 3.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

`;

export const Brand = styled.span`
    font-size: 2em;
    color: black;
`;

export const Navs = styled.ul`
    display: flex;
    flex-direction: row;

    padding-inline: 2em;
`;

export const NavLink = styled.li`
    margin-inline: 1rem;
    font-size: 1.35em;
    text-decoration: ${props => props.active ? 'underline' : 'none'};
    color: ${props => props.active ? 'palevioletred' : 'blue'};

    &:hover {
        color: palevioletred;
    }

    &:focus {
        text-decoration: underline;
        color: palevioletred;
    }

`;