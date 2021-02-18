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
      <style jsx>{`
      article {
        display: flex;
        flex-direction: column;
      }
    `}</style>
    </article>

  )
}

export default Skill