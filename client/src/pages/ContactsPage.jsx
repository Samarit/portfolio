import Form from "../components/Form";
import '../css/pages/ContactsPage.sass'
import contacts from '../data/contacts.js'
import IconLink from "../components/IconLink";
import Page from "../components/Page";

export default function ContactsPage( {id} ) {

  return (
    <Page id={id}>

      <ul className="contact-links-container">
        {contacts.map( (contact) => (
          <li key={contact.index} >
            <IconLink id={contact.id} url={contact.url} />
          </li>
        ))}
      </ul>

      <Form />
      
    </Page>
  )
}