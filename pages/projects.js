import Layout from '../components/layout'
import { getAllPages } from '../lib/pages'
import Project from '../components/project'

/* import styles from '../styles/Projects.module.css' */

export default function Projects({ projects }) {
  return (
    <Layout>
      <div>
        {projects.map(
          project => <Project
            key={project.id}
            {...project}
          />
        )}
      </div>
      <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
      }
      `}</style>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const projects = await getAllPages('projects')
  return {
    props: { projects }
  }
}