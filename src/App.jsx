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
  return (
    <div className="app">
      <Logo />
      <Form onAddItems = {handleAddItems}/>
      <PackingList items = {items} onDeleteItem={handleDeleteItem}/>
      <Stats />
    </div>
  );
}

export default App;
