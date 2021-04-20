import Header from "./Header"
import Footer from "./Footer"
import Createnote from "./Createnote"
import Note from "./Note"
import { useState } from "react"
function App() {
  const [addItem, setAddItem] = useState([])

  const addNote = (note) => {
    setAddItem((prev) => {
      console.log(...prev, note)
      return [...prev, note]
    })
    console.log(note)
  }

  const onDelete = (id) => {
    setAddItem((oldValue) => {
      return oldValue.filter((arrElement, index) => { return index !== id });
    })
  }

  return (
    <>
      <Header />
      <Footer />
      <Createnote passNote={addNote} />
      {addItem.map((val, index) => {
        return <Note id={index} key={index} title={val.title} content={val.content} deleteItem={onDelete} />
      })}
    </>
  );
}

export default App;
