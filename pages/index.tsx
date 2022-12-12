import { ReactElement } from 'react';

import InputRich from '../components/forms/InputRich';
import Uploader from '../components/forms/Uploader';
import Layout from '../components/layout/Layout';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="mx-auto md:container px-4 py-10">
        <InputRich />
      </div>
      <div className="my-4 mx-auto container">
        <Uploader multiple />
      </div>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
