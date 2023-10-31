import Cell from "./Cell"
const Row = ({item}) => {
  // console.log(item);
  return (
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
  )
}

export default Row