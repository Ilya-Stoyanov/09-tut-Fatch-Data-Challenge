import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Table from './Table'; 

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";
  
  const [reqType, setReqType] = useState("posts")
  const [items, setItems] = useState([]);

  useEffect( () => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/${reqType}`)
        const data = await response.json()
        // console.log(data); // our array
        setItems(data)
      } catch (error) {
        console.log(error);
      }
  
    }
    fetchItems()
  }, [reqType])
  

  return (
    <div className="App">
       <Header/>
       <main>
        <Form 
          reqType={reqType}
          setReqType={setReqType}
        />
      <Table items={items}/>
       </main>
      <Footer />
    </div>
  );
}

export default App;
