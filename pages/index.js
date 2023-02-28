import Head from 'next/head'
import Hero from '../components/Hero'
import Shop from '../components/Shop'
import Statics from '../components/Statics'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hunting_Store</title>
        <meta name="description" content="Hunting_Store" />
      </Head>
      
      <Hero/>
      <Shop/>
      <Statics/>
      <Testimonials/>
      <Team/>

      
    </div>
  )
}
