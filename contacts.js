const fs = require('fs').promises;
const path = require('path');
const { v4 } = require('uuid');

const contactsPath = path.resolve('./db/contacts.json');



const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data)
    return contacts
  } catch (error) {
    console.error(error)
  }
}

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const contactById = contacts.find(contact => contact.id === contactId);
    return contactById ? contactById : null;
  } catch (error) {
    console.error(error);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const contacts = await listContacts();
    const newContact = { id: v4(), name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact
  } catch (error) {
    console.error(error);
  }
}

const removeContact = async (contactId) =>{
   try {
     const contacts = await listContacts();
     const index = contacts.findIndex(contact => contact.id === contactId);
     const removedContact = contacts[index];
     if (index !== -1) {
      contacts.splice(index, 1);
      await fs.writeFile(contactsPath, JSON.stringify(contacts));
     };
     
     return removedContact ? removedContact : null

  } catch (error) {
    console.error(error);
  }
}
module.exports = { listContacts, getContactById, removeContact, addContact }
