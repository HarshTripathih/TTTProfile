import Head from 'next/head';

import HomeSection from './components/homesection';

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
        <HomeSection/>
      </main>
    </div>
  )
}
