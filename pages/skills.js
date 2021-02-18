import Layout from '../components/layout'
import { getPageData } from '../lib/pages'
import Markdown from '../components/markdown'


export default function Skills({ content }) {

  return (
    <Layout>
      <article>
        <Markdown className="skills">{content.content}</Markdown>
      </article>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const content = await getPageData('skills')
  return {
    props: { content }
  }
}