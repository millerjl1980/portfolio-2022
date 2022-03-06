import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center>
        Justin Miller, <br/>
        Software Developer
      </SectionTitle>
      <SectionText>
          Thoughtful, disciplined, and detail-oriented software developer who enjoys identifying problems, and finds solving them rewarding.
      </SectionText>
      <Button onClick={()=> (window.location = 'https://www.linkedin.com/in/indymiller/')}>Learn More</Button>
    </LeftSection>

  </Section>

);

export default Hero;