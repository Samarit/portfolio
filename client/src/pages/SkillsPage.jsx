import skills from '../skills'
import SkillCard from '../components/SkillCard'
import '../css/pages/SkillsPage.sass'


export default function SkillsPage() {
  return (
    <div className="page skills">
      <h1 className="page-title">Skills</h1>

      <div className='skills-container hardskills' >
        <h3 className='skills-title'>Hard skills</h3>
        <ul className="cards-container">

            { skills.map( (skill) => {
              return <SkillCard skill={skill} key={skill.index} />
            })}
            
        </ul>
      </div>

      <div className='skills-container softskills'>
        <h3 className='skills-title'>Soft skills</h3>
      </div>
    </div>
  )
}