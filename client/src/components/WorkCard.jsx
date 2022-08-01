import IconLink from "./IconLink"

const _iconOnCLick = (e) => {
  e.stopPropagation()
}

export default function WorkCard( {work} ) {

  const { id, title, text, url, urlGit} = work

  return (
    <li className="card work" id={id} >
      
      { <p>{title}</p> }
      { <span>{text}</span> }

      <div className="work-links">
        <IconLink id={'github'} url={urlGit} onClick={_iconOnCLick}/>
        {/* if external url not passed then dont display external IconLink */}
        { url && <IconLink id={'external'} url={url} onClick={_iconOnCLick}/> }
      </div>  
    </li>
  )
}