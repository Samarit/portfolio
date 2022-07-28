import IconLink from "./IconLink"

const _iconOnCLick = (e) => {
  e.stopPropagation()
}

export default function WorkCard( {id, url, urlGit, children} ) {

  return (
    <li className="card work" id={id} >
      
      { <p>{children.title}</p> }
      { <span>{children.text}</span> }

      <div className="work-links">
        <IconLink id={'github'} url={urlGit} onClick={_iconOnCLick}/>
        {/* if external url not passed then dont display external IconLink */}
        { url && <IconLink id={'external'} url={url} onClick={_iconOnCLick}/> }
      </div>  
    </li>
  )
}