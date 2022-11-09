import { ReactElement } from 'react';

import Input from '../components/forms/Input';
import Layout from '../components/layout/Layout';
import TitleComponent from '../components/TitleComponent';
import { useHelloQuery } from '../hooks/useHelloQuery';
import { WelcomeProvider } from '../hooks/useWelcome';
import { getHello } from '../services/getHello';
import { decrement, increment } from '../store/features/counterSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

import { NextPageWithLayout } from './_app';

export async function getServerSideProps() {
  const hello = await getHello();
  return {
    props: {
      hello,
    },
  };
}

const Home: NextPageWithLayout = (props) => {
  const { data } = useHelloQuery(props);
  const count = useAppSelector((state) => {
    return state.counter.value;
  });
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="home">
        <WelcomeProvider>
          <TitleComponent name={data.name} />
          <Input />
        </WelcomeProvider>
        <div className="flex items-center space-x-3 mt-12">
          <button
            onClick={() => dispatch(decrement())}
            className="bg-white shadow-md text-black p-3 w-28"
          >
            -
          </button>
          <span className="text-xs text-black">{count}</span>
          <button
            onClick={() => dispatch(increment())}
            className="bg-white shadow-md text-black p-3 w-28"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
