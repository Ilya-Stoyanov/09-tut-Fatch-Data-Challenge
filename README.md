# React

React для начинающих

## React json-server

## Installation

```bash
npm install
```

## Start project

```bash
npm start
```

## Start API_URL and useState
```bash
First add API_URL
const API_URL = "https://jsonplaceholder.typicode.com";
Add useState 
const [reqType, setReqType] = useState("posts")
const [items, setItems] = useState([]);

```

## Start useEffect
```bash

  useEffect( () => {

    const fetchItems = async () => {
      try{
        const response = await fetch(`${API_URL}${reqType}`)
        const data = await response.json()
        setItems(data)
      } catch(err){
        console.log(err);
      }
    }

    fetchItems()

  }, [reqType])
```

## Start component List ListItems
```bash
const List = ({ items }) => {
  return (
    <ul>
        {items.map( item => (
            <ListItems key={item.id} item={item} />
        ))}
    </ul>
  )
  
}

const ListItems = ({item}) => {

  return (
    <li>
        {JSON.stringify(item)}
    </li>
  )
}

```
## It was first step 

## Preparing Form vs button 
### we have 3 btn and users posts comments
```bash
function Form({reqType, setReqType}) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Button 
                buttonText="users"
                reqType={reqType}
                setReqType={setReqType}
            />
            <Button
                buttonText="posts"
                reqType={reqType}
                setReqType={setReqType}
            />
            <Button 
                buttonText="comments"
                reqType={reqType}
                setReqType={setReqType}
            />
        </form>
    )
}


```

## Button component
```bash
const Button = ({buttonText, reqType, setReqType}) => {
  return (
    <button 
      className={buttonText === reqType ? "selected" : null}
      type="button"
      onClick={ () => setReqType(buttonText)}
    >
      {buttonText}
    </button>
  )
}

```

## App js add component Table
```bash
<div className="table-container">
    <table>
      <tbody>
        {items.map( item => (
          <Row key={item.id} item={Object.values(item)} />
        ))}
      </tbody>
    </table>
</div>
```

## Add component Row
```bash
<tr>
  {item.map((data, index) => {
    const string = JSON.stringify(data)
    // console.log(`${data} ${index}`);
    // console.log(data+index);
    return (
      <Cell key={data+index}>
        {string}
      </Cell>
    )
  })}
</tr>

```

## Add component Cell
```bash
return (
  <td>
      {children}
  </td>
)

```

## Add row title
```bash
if (items.length === 0) return null;
const first = Object.keys(items[0])

<thead>
  <Row item={first} />
</thead>
  
```

## Add fetchError

```bash
const [fetchError, setFetchError] = useState(null)

try {
  const response = await fetch(`${API_URL}/${reqType}`)
  if(!response.ok) throw Error("Did not receive data API. Please try again later")
  const data = await response.json()
  setItems(data)
  setFetchError(null)
} catch (error) {
  setFetchError(error.message)
}

/* Add to main tag */
{fetchError && <p className="error">{`Error: ${fetchError}`}</p> }
  {!fetchError &&  <>
    <Form 
        reqType={reqType}
        setReqType={setReqType}
    />
    <Table items={items}/>
  </>}
```
## Add Loading...
```bash
const [isLoading, setIsLoading] = useState(true)

/* after catch add finally */
finally{
  setIsLoading(false)
}

setTimeout(() => {
  (async () => fetchItems())()
}, 2000);

/* Add to main tag */

{isLoading && <p className='loading'>Loading...</p>}

{!fetchError && !isLoading && <>
  <Form 
      reqType={reqType}
      setReqType={setReqType}
  />
  <Table items={items}/>
</>}

```

## Больше уроков

[Уроки по React](https://www.youtube.com/playlist?list=PLHyIl59J60-V7-9nam_uikG3XAydd0dYT)
