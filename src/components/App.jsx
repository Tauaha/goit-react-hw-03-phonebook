import { Component } from 'react';
import React from 'react';
import { nanoid } from 'nanoid'

import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './Filter/Filter';


export default class App extends Component {

  state = {
    contacts: [ ],
    filter: '',
  }
componentDidMount(){
  const localData = localStorage.getItem('contacts')
  if(localData){
    this.setState({contacts: JSON.parse(localData)})
  }
}

  componentDidUpdate(prevProps, prevState){
    if(prevState.contacts.length !== this.state.contacts.length){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
    console.log('prop' , prevProps)
    console.log('prevState',prevState)
    console.log('newState',this.state)
      }
   formSubmitHandler =data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    };
    const {contacts} = this.state;
const chekContact = contacts.some(({name}) => name === data.name)
if(chekContact){
  return(
    alert(`${data.name} is already in contacts.`)
  )
}
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
      
    }
    ));
  //  localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
   }
  
 
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts=()=>{
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  }

  onDelete=(id)=>{
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    })); 

 }
  render() {
   const {filter} = this.state;
   const visibleContact = this.filterContacts();

    
    return (<div style={{margin:"20px"}}>
       <h1>Phonebook</h1>
  <ContactsForm onSubmit={this.formSubmitHandler}/>
       <h2>Contacts</h2>
  <ContactFilter value={filter}  onChange={this.changeFilter}/>
 {visibleContact.length > 0 && ( <ContactList 
  visibleContact={visibleContact} 
  onDelete={this.onDelete} />)}
    </div>
    
   )}}