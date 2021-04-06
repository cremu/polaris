import Meta from '../components/Meta'

import Hero from '../components/Hero.js'
import Highlights from '../components/Highlights.js'
import ContactoCyan from '../components/ContactoCyan.js'
import Packs from '../components/Packs.js'

export default function Home() {
  return (
    <>
      <Meta title='Polaris | Home'/>
      < Hero />
      < Highlights />
      < Packs />
      < ContactoCyan />
    </>
  )
}
