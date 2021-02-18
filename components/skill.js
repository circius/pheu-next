import Markdown from './markdown'
import Fleuron from './fleuron'

const Skill = ({ title, content }) => {
  return (
    <article>
      <h1>{title}</h1>
      <Markdown className="skill">
        {content}
      </Markdown>
      <Fleuron />
    </article>
  )
}

export default Skill