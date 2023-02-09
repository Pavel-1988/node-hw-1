const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts"); // беремо усі функции з файлу contacts.js


const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();


const invokeAction = async ({ action,id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts)
      break;

    // case "get":
    //   // ... id
    //   break;

    // case "add":
    //   // ... name email phone
    //   break;

    // case "remove":
    //   // ... id
    //   break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);