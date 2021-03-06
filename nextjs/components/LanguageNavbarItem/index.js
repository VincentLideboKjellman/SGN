import Link from 'next/link';
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Flag from '../SVGs/Flag';

const StyledLanguageNavbarItem = styled.li`
  padding: 0.6rem 0;
  margin: 0.4rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 1rem;

  .isActive {
    background: rgba(0, 0, 0, 0.75);
    color: white;
    text-decoration: underline;
  }

  a {
    color: white !important;
    padding: 0 1rem;
    text-decoration: underline !important;
  }

  div {
    width: 100%;
    height: 100%;
  }

  img {
    width: 20%;
    height: 20%;
  }
`;

const LanguageNavbarItem = props => {
  return (
    <StyledLanguageNavbarItem
      onClick={props.onClick}
      className={props.className}
      style={props.style}
    >
      {props.text}
      <img src={props.src} alt="" />
    </StyledLanguageNavbarItem>
  );
};

LanguageNavbarItem.propTypes = {
  text: PropTypes.string
};

export default LanguageNavbarItem;
