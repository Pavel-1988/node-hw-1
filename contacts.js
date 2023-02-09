const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');
// const contactsPath = path.join(__dirname, "db/contacts.json");


const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data)
    return contacts
  } catch (error) {
    console.log(error)
  }
}


function getContactById(contactId) {
  
}

function removeContact(contactId) {
  
}

function addContact(name, email, phone) {
 
}

module.exports={listContacts, getContactById, removeContact, addContact }