import Head from 'next/head'
import Hero from '../components/Hero'
import Shop from '../components/Shop'
import Statics from '../components/Statics'
import Testimonials from '../components/Testimonials'
import Tshirt from './tonic'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Organic cure</title>
        <link rel="icon" href="/favicon.ico"></link>
        <meta name="description" content="Hunting_Store" />
      </Head>

      <Hero />
      <Shop />
      {/* <Tshirt /> */}
      <Statics />
      {/* <Testimonials /> */}


    </div>
  )
}
