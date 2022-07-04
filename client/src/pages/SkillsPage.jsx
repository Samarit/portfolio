import skills from '../skills'
import SkillCard from '../components/SkillCard'

export default function SkillsPage() {

  return (
    <div className="page">
      <h1 className="page-title">Skills</h1>
      <ul className="cards-container">
        { skills.map( ( skill) => {
          return (
          <SkillCard skill={skill} />
          )})}
      </ul>
    </div>
  )
}