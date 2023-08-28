import Image from 'next/image'
import LoginForm from './LoginForm'

export default function Home() {

  return (

    <div className='bg-white-500 w-screen h-screen flex items-center'>
      <LoginForm />
    </div>
  )
}
