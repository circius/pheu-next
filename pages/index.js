import Layout from '../components/layout'
import { getPageData } from '../lib/pages'
import ReactMarkdown from 'react-markdown'

import styles from '../styles/Home.module.css'

export default function Home({ content }) {
  return (
    <Layout>
      <ReactMarkdown>{content.content}</ReactMarkdown>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const content = await getPageData('index')
  return {
    props: { content }
  }
}