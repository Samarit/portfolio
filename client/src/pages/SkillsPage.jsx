import skills from '../data/skills'
import SkillCard from '../components/SkillCard'
import '../css/pages/SkillsPage.sass'
import Page from '../components/Page'


export default function SkillsPage( {id} ) {
  return (
    <Page id={id}>
      
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

    </Page>
  )
}