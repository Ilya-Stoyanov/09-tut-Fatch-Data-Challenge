import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Table from './Table'; 

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";
  
  const [reqType, setReqType] = useState("posts")
  const [items, setItems] = useState([]);

  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/${reqType}`)
        if(!response.ok) throw Error("Did not receive data API. Please try again later")
        const data = await response.json()
        // console.log(data); // our array
        setItems(data)
        setFetchError(null)
      } catch (error) {
        setFetchError(error.message)
      } finally{
        setIsLoading(false)
      }
  
    }
    setTimeout(() => {
      (async () => fetchItems())()
    }, 1000);
  }, [reqType])
  

  return (
    <div className="App">
       <Header/>
       <main>
       {isLoading && <p className='loading'>Loading...</p>}
       {fetchError && <p className="error">{`Error: ${fetchError}`}</p> }
       {!fetchError && !isLoading && <>
          <Form 
              reqType={reqType}
              setReqType={setReqType}
          />
          <Table items={items}/>
        </>}
       </main>
      <Footer />
    </div>
  );
}

export default App;
