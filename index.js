const names = ["Roby Afrizal Palmendha", "Dian Puspita Sari", "Muhammad Iqbal"];

const showNames = nama => {
  for (let i = 0; i < nama.length; i++) {
    const named = names[i];
    console.log(`[${i + 1}] - ${named}`);
  }
};
showNames(names);
console.log("---------- Next Sample ----------");

const filterNames = (names, minimumLength) => {
  let newNames = [];
  for (let index = 0; index < names.length; index++) {
    if (names[index].length >= minimumLength) {
      newNames.push(names[index]);
    }
  }
  return newNames;
};
const filteredNames = filterNames(names, 16);
showNames(filteredNames);

console.log("---------- Next Sample ----------");

const myContacts = [
  {
    id: 1,
    name: "Roby Afrizal Palmendha",
    phone: "+1 111 101010",
    email: "roby@afrizal.org",
    favorite: true,
    rating: 9,
    tags: ["popular", "cool"]
  },
  {
    id: 2,
    name: "Dian Puspita Sari",
    phone: "+62 812 242424",
    email: "dian@puspita.com"
  },
  {
    id: 3,
    name: "Muhammad Iqbal",
    phone: "+63 813 363636",
    email: "muhammad@iqbal"
  }
];
const showContacts = contact => {
  for (let a = 0; a < contact.length; a++) {
    const contacts = contact[a];
    console.log(
      `[${contacts.id} - ${contacts.name} : ${contacts.phone} (${contacts.email})]`
    );
  }
};
showContacts(myContacts);
console.log("---------- Next Sample ----------");

const filterContacts = (Contact, minimumLength) => {
  let newContacts = [];
  for (let b = 0; b < Contact.length; b++) {
    const Contacts = Contact[b];
    if (Contacts.name.length >= minimumLength) {
      newContacts.push(Contacts);
    }
  }
  return newContacts;
};
showContacts(filterContacts(myContacts, 16));
