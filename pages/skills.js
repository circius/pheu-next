import Layout from '../components/layout'
import { getAllPages } from '../lib/pages'
import Skill from '../components/skill'

export default function Skills({ skills }) {
  return (
    <Layout>
      <div>
        {skills.map(
          skill => <Skill
            key={skill.id}
            {...skill}
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
  const skills = await getAllPages('skills')
  const sorted = skills.sort((a, b) => a.order - b.order)
  return {
    props: { skills: sorted }
  }
}