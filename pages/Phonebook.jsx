import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";

export const Phonebook = () => {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm />
            <h2>Contacts</h2>
            <Filter/>
            <ContactList /> 
      </div>
    );
}