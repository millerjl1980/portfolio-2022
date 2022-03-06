import Link from 'next/link';
import React from 'react';
import { AiFillCloud, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaSalesforce } from "react-icons/fa";
import { DiCode } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, TitleSpan, TitleLink } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href={"/"}>
        <TitleLink>
          <DiCode size="3rem" />
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
          <NavLink>About Me</NavLink>
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
        <FaSalesforce size='3rem'/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
