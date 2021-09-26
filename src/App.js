import React, {useState, useEffect} from 'react'
import axios from "axios";
import TableData from "./components/Table";
import Inputs from "./components/Inputs";


function App() {

  const [data, setData] = useState([])

    function getData() {
     axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const info = res.data
               setData(info)
        })
        .catch(err => console.log(err.message))

}
function onDeleteItem(id){
            setData(data.filter(dat=> dat.id !== id))
    }


  useEffect(getData, [setData])

  return (
      <div className='App' style={{margin: 20}}>
          <Inputs data = {data} setData = {setData} />
          <div>
              <select>
                  <option value="value1">Сортировка по Name</option>
                  <option value="value2">Сортировка по Username </option>
              </select>
          </div>
          {data.length !== 0
            ?  <TableData data = {data} onDeleteItem = {onDeleteItem}/>
            : <h1 style={{textAlign: 'center'}}>Данные отсутствуют</h1>
          }
      </div>


  )
}

export default App;
