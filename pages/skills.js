import Layout from '../components/layout'
import { getPageData } from '../lib/pages'
import ReactMarkdown from 'react-markdown'

/* import styles from '../styles/Skills.module.css' */

export default function Skills({ content }) {
  return (
    <Layout>
      <ReactMarkdown>{content.content}</ReactMarkdown>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const content = await getPageData('skills')
  return {
    props: { content }
  }
}