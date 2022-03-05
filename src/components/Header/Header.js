import Link from 'next/link';
import React from 'react';
import { AiFillCloud, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import styled from 'styled-components';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, TitleSpan, TitleLink } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href={"/"}>
        <TitleLink>
          <DiCssdeck size="3rem" />
           <TitleSpan>justin miller</TitleSpan>
          </TitleLink>
        </Link>
    </Div1>
    <Div2>
      <li>
        <Link href={'#projects'}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href={'#tech'}>
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href={'#about'}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/millerjl1980'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/indymiller/'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://trailblazer.me/id/indymiller317'>
        <AiFillCloud size='3rem'/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
