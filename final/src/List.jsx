import ListItems from "./ListItems";
const List = ({items}) => {
  console.log(items);
  return (
    <ul>
      {items.map(item => (
        <ListItems key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default List