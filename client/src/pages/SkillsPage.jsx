import skills from '../skills'
import SkillCard from '../components/SkillCard'
import '../css/pages/SkillsPage.sass'


export default function SkillsPage() {
  return (
    <div className="page skills">
      <h1 className="page-title">Skills</h1>
      <ul className="cards-container">
          { skills.map( (skill) => {
            return <SkillCard skill={skill} key={skill.index}/>
          } ) }
      </ul>
    </div>
  )
}