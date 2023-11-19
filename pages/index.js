import Image from 'next/image';
import Script from 'next/script';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar';
import Profile from './components/profile';
import Header from './components/header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div>
        <Head>
          <title>Profile</title>
          <meta name='description' content='it is a profile page of TTT' />
          <meta name='keywords' content='ttt, tttprofile, tttwebsite' />
        </Head>
      </div>
      <main style={{backgroundColor:'black'}}>
        <Header/>
        <Profile/>
      </main>


    </div>
  )
}
