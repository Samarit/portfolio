import Form from "../components/Form";
import '../css/pages/ContactsPage.sass'
import contacts from '../contacts.js'
import ContactLink from "../components/ContactLink";

export default function ContactsPage() {

  return (
    <div className="page contacts">
      <h1 className="page-title">Contacts</h1>

      <ul className="contact-links-container">

        {contacts.map( (contact) => (
          <li key={contact.index} >
            <ContactLink id={contact.id} url={contact.url} />
          </li>
        ))}

      </ul>

      <Form />

    </div>
  )
}