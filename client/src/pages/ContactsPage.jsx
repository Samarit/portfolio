import Form from "../components/Form";
import '../css/pages/ContactsPage.sass'
import contacts from '../data/contacts.js'
import IconLink from "../components/IconLink";

export default function ContactsPage( {id} ) {

  return (
    <div className={`page ${id}`} id={id}>
      <h1 className="page-title">Contacts</h1>

      <ul className="contact-links-container">

        {contacts.map( (contact) => (
          <li key={contact.index} >
            <IconLink id={contact.id} url={contact.url} />
          </li>
        ))}

      </ul>

      <Form />

    </div>
  )
}