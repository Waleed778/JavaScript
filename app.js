const contacts = [{id: 1, name: "Waleed Baloch", phone: "+9245678909"}] // [{},{},{}]

const listAllContacts = () => {
    for(let element of contacts){
        console.log("-----------------------")
        console.log("Name: ", element.name)
        console.log("Phone: ", element.phone)
    }
}
const addNewContact = (body) => {
    contacts.push(body)
}

const deleteBook = (id) => {
    // for(let i = 0; i < contacts.length; i++){
    //     if(contacts[i].id === id){
    //         contacts.splice(i, 1)
    //         break;
    //     }
    // }
    const index = findBookByID(id)
    contacts.splice(index, 1)
}

const updateBook = (id, body) => {
    const index = findBookByID(id)
    contacts[index] = body;
}

const search = (name) => {
    for(element of contacts){
        if(element.name === name){
            console.log(element)
            return;
        }
    }
    console.log("Me => ",element)
    console.log("Not found")
}
const findBookByID = (id) => {
    return contacts.findIndex(e => e.id === id)
}
addNewContact({id: 3, name: "Durrah", phone: "-98765432"})
addNewContact({id: 4, name: "Javed Mhedad", phone: "-98765432"})
addNewContact({id: 5, name: "Wakar baloch", phone: "-98765432"})
deleteBook(1)
updateBook(2, {id: 2, name: "Maqbool", phone: "09876543"})
search('Wakar baloch44')
// listAllContacts()
