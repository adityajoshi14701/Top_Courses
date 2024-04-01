import Filter from './controller/Filter'
import Navbar from './controller/Navbar'
import Cards from './controller/Cards'
import { filterData,apiUrl } from './data';
import { useEffect, useState } from 'react';
import Spinner from './controller/Spinner'
function App() {

  const [courses,setCourses] = useState(null);
  const [loading,setLoading]=useState(true);

async function fetchData(){
  setLoading(true);
  try {
    let res = await fetch(apiUrl);
    let data = await res.json();
   console.log(data.data)
    setCourses(data.data)
    console.log(courses); 
  } catch (error) {
    console.log('data could not be fetched ')
  }
  setLoading(false);
}

useEffect(()=>{
  fetchData();
},[]);


  return (
    <div className="App">
     <Navbar/>
     <Filter filterData={filterData}/>
     {
            loading ? (
              <Spinner />
            ) : (
              <Cards courses ={courses}/>
            )
          }
    </div>
  );
}

export default App;
