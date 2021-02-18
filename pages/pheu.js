import Layout from '../components/layout'
import Image from "next/image"

const Pheu = () => {
  const pheuImg = "/images/pheu.png"
  return (
    <Layout>
      <figure>
        <Image
          src={pheuImg}
          width="661"
          height="447"
          layout="responsive"
          alt="PHEU: usage example "
        />
        <figcaption>
          PHEU: usage example (Ann Carson's <i>Electra</i>, in her <i>An Oresteia</i>, p.131, Faber and Faber, London, 2009)
        </figcaption>
      </figure>
    </Layout>
  )
}
export default Pheu