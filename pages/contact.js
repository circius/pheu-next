import Layout from '../components/layout'
import { getPageData } from '../lib/pages'
import ReactMarkdown from 'react-markdown'

/* import styles from '../styles/Contact.module.css' */

export default function Contact({ content }) {
  return (
    <Layout>
      <ReactMarkdown>{content.content}</ReactMarkdown>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const content = await getPageData('contact')
  return {
    props: { content }
  }
}