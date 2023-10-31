import Row from "./Row"
const Table = ({items}) => {
  if (items.length === 0) return null;
  // console.log(items);
  const first = Object.keys(items[0])
  // console.log(first);
  return (
    <div className="table-container">
      <table>
        <thead>
          <Row item={first} />
        </thead>
        <tbody>
          {items.map( item => (
            <Row key={item.id} item={Object.values(item)} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table