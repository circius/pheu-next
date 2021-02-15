import Layout from '../components/layout'
import { getPageData } from '../lib/pages'

/* import styles from '../styles/Skills.module.css' */

export default function Home({ content }) {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const content = await getPageData('skills')
  return {
    props: { content }
  }
}