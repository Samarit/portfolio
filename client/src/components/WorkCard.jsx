import IconLink from "./IconLink"

const _iconOnCLick = (e) => {
  e.stopPropagation()
}

export default function WorkCard( {work} ) {

  const { id, title, text, url, urlGit} = work

  return (
    <li className="card work" id={id} >
      
      <p className="work-title">{title}</p> 
      <span className="work-text">{text}</span>

      <div className="work-links">
        {/* if urls not passed then dont display IconLink */}
        { urlGit && <IconLink id={'github'} url={urlGit} onClick={_iconOnCLick}/> }
        { url && <IconLink id={'external'} url={url} onClick={_iconOnCLick}/> }
      </div>  
    </li>
  )
}