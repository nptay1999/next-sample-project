import type { NextPage } from 'next'
import { Toaster } from 'react-hot-toast';
import Button from '../components/forms/Button'
import Input from '../components/forms/Input'
import TitleComponent from '../components/TitleComponent'
import { WelcomeProvider } from '../hooks/useWelcome'
import { decrement, increment } from '../store/features/counterSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const Home: NextPage = () => {
  const count = useAppSelector((state) => { return state.counter.value })
  const dispatch = useAppDispatch();
  return (
    <>
      <Toaster />
      <div className="home">
        <WelcomeProvider>
          <TitleComponent />
          <Input />
          <Button />
        </WelcomeProvider>
        <div className="flex items-center space-x-3 mt-12">
          <button onClick={() => dispatch(decrement())} className="bg-white shadow-md text-black p-3 w-28">-</button>
          <span className="text-xs text-black">{count}</span>
          <button onClick={() => dispatch(increment())} className="bg-white shadow-md text-black p-3 w-28">+</button>
        </div>
      </div>
    </>
  )
}

export default Home
