import Head from 'next/head';

import Privacy from '../components/Privacy/Privacy';
import { Layout } from '../layout/Layout';

const PrivacyPage = () => {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy | Justin Miller</title>
        <meta
          name="description"
          content="Privacy policy for justinmiller.dev and the personal applications built and hosted by Justin Miller."
        />
      </Head>
      <Privacy />
    </Layout>
  );
};

export default PrivacyPage;
