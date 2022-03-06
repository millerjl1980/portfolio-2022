import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaSalesforce } from "react-icons/fa";

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:indymiller@gmail.com'>indymiller@gmail.com</LinkItem>
        </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
         <Slogan>Insert Slogan Here</Slogan>
       </CompanyContainer>
       <SocialIcons href='https://github.com/millerjl1980'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/indymiller/'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://trailblazer.me/id/indymiller317'>
        <FaSalesforce size='3rem'/>
      </SocialIcons>
     </SocialIconsContainer>

   </FooterWrapper>
  );
};

export default Footer;
