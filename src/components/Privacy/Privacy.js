import React from 'react';

import { personalApps, privacyLastUpdated } from '../../constants/privacy';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Heading, List, ListItem, Text, Updated } from './PrivacyStyles';

const Privacy = () => (
  <Section id="privacy">
    <SectionDivider />
    <SectionTitle main>Privacy Policy</SectionTitle>
    <Updated>Last updated: {privacyLastUpdated}</Updated>

    <Text>
      This policy covers justinmiller.dev and every personal application I, Justin Miller, build and host. These
      applications are personal projects made for my own use. They are not offered to the public as a product or
      service, and nobody other than me has an account on them.
    </Text>

    <Heading>Information collected</Heading>
    <Text>
      My applications do not collect, store, sell, or share personal information belonging to anyone other than me.
      The only data they retain is my own:
    </Text>
    <List>
      <ListItem>Credentials and access tokens for my own accounts on the services an application connects to.</ListItem>
      <ListItem>Content I create or schedule through an application, such as posts, images, and settings.</ListItem>
    </List>

    <Heading>Third-party services</Heading>
    <Text>
      Some applications connect to third-party platforms through their official APIs. They do so only on behalf of
      my own account, only to do what I have asked of them, and in line with each platform&apos;s developer terms.
      Data received from those platforms is used solely to operate the application and is never sold or passed on
      to anyone else.
    </Text>

    <Heading>Applications covered</Heading>
    <Text>This policy applies to all of my personal applications, including:</Text>
    <List>
      {personalApps.map(({ id, title, description }) => (
        <ListItem key={id} id={id}>
          <strong>{title}</strong> &ndash; {description}
        </ListItem>
      ))}
    </List>

    <Heading>This website</Heading>
    <Text>
      justinmiller.dev is a static site. It has no accounts, forms, advertising, or tracking cookies. The hosting
      provider, Firebase Hosting, may log standard request details such as IP address and browser type to deliver
      and secure the site.
    </Text>

    <Heading>Data retention and deletion</Heading>
    <Text>
      Because only my own data is stored, there is no other person&apos;s data to access, correct, or delete. I can
      remove my data, and revoke an application&apos;s access to a connected service, at any time.
    </Text>

    <Heading>Changes</Heading>
    <Text>
      If the way an application handles data changes, this page will be updated before the change takes effect and
      the date above will be revised.
    </Text>

    <Heading>Contact</Heading>
    <Text>
      Questions about this policy can be sent to me through{' '}
      <a href="https://www.linkedin.com/in/indymiller/">LinkedIn</a> or{' '}
      <a href="https://github.com/millerjl1980">GitHub</a>.
    </Text>
  </Section>
);

export default Privacy;
