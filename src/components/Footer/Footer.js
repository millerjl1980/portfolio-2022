import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaSalesforce } from "react-icons/fa";

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, PrivacyLink, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>

     <SocialIconsContainer>
       <CompanyContainer>
         <Slogan>Thoughtful, disciplined, and detail-oriented software developer who enjoys identifying problems, and finds solving them rewarding.</Slogan>
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

     <Link href='/privacy'>
       <PrivacyLink>Privacy Policy</PrivacyLink>
     </Link>

   </FooterWrapper>
  );
};

export default Footer;
