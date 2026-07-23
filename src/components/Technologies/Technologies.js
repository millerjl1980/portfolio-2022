import React from 'react';
import { VscAzure } from "react-icons/vsc";
import { FaSalesforce } from "react-icons/fa";
import { DiDjango, DiFirebase, DiNodejs, DiPostgresql, DiReact, DiZend } from 'react-icons/di';
import { IconName, SiDjango, SiNodedotjs, SiPython, SiReact } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ListIconContainer } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section  id='tech'>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      Tech Stack Description
    </SectionText>
    <List>
      <ListItem>
        <ListIconContainer>
          <SiReact size='3rem' />
          <SiDjango size='3rem' />
        </ListIconContainer>
        
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js and Django
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListIconContainer>
          <SiNodedotjs size='3rem' />
          <SiPython size='3rem' />
        </ListIconContainer>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js and Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListIconContainer>
          <VscAzure size='3rem' />
          <FaSalesforce size='3rem' />
        </ListIconContainer>
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Azure and Salesforce
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
