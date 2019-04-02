import React from 'react';
import styled from 'styled-components';
import NavbarItem from '../NavbarItem';

const StyledFooter = styled.footer`
  width: 100%;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 16px;
    list-style: none;
  }

  li {
    padding: 0.6rem;
    margin: 0.4rem;
  }

  a {
    font-weight: bold;
  }
`;


const Footer = () => {
    return (
        <StyledFooter>
          <ul>
            <NavbarItem style={{background: "var(--primary-red)"}} text="Info"></NavbarItem>
            <NavbarItem style={{background: "var(--primary-pink)"}} text="Aktivitet"></NavbarItem>
            <NavbarItem style={{background: "var(--primary-blue)"}} text="Projekt"></NavbarItem>
            <NavbarItem style={{background: "var(--primary-purple)"}} text="Socialt"></NavbarItem>
            <NavbarItem style={{background: "var(--primary-green)"}} text="Bidra"></NavbarItem>
            <NavbarItem style={{background: "var(--primary-yellow)"}} text="Kontakt"></NavbarItem>
          </ul>
          {/* <p>this is the footer </p> */}
        </StyledFooter>
    );
};

export default Footer;
