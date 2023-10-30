import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";


function App() {
  const [items, setItems] = useState([]);
  

  const handleAddItems = (item) => {
    setItems(items => [...items, item] );
  }

  const handleDeleteItem = (id) =>{
setItems(items =>items.filter(item => item.id !== id))
  }

  const handleToggleItem = (id) => {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  }

  const handleClearList = () => {
    const confirmed = window.confirm("Are you sure to delete all items?");
    if (confirmed) setItems([]);
    
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems = {handleAddItems}/>
      <PackingList items = {items} onDeleteItem={handleDeleteItem} onToggleItem = {handleToggleItem} handleClearList = {handleClearList}/>
      <Stats items ={items} />
    </div>
  );
}

export default App;
