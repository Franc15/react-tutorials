import List from "./List"
import {useState} from 'react'

function App() {

  const [searchText, setSearchText] = useState('')
  

  return (
    <div className='container'>
      <div className='form-control'>      
        <input type='text' value={searchText} placeholder='Enter Profession..' onChange={(e) => setSearchText(e.target.value)} />
      </div>
        <List searchText={searchText} />
    </div>
  )
}

export default App
