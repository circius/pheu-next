import Layout from '../components/layout'
import { getAllPages } from '../lib/pages'
import ReactMarkdown from 'react-markdown'

/* import styles from '../styles/Projects.module.css' */

export default function Projects({ projects }) {
  return (
    <Layout>
      {projects.map(
        project => <ReactMarkdown>{project.content}</ReactMarkdown>
      )}

    </Layout>
  )
}

export const getStaticProps = async () => {
  const projects = await getAllPages('projects')
  return {
    props: { projects }
  }
}