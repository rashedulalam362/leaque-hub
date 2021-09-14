import React, { useEffect ,useState} from 'react'
import LeaqueInfo from '../LeaqueInfo/LeaqueInfo';
import './Home.css'

function Home() {
  const[league,setLeague]=useState([]);
  const [search, setSearch]=useState('');
  useEffect (()=>{
      
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
    .then(res=>res.json())
    .then(data=>{
    
      setLeague(data.teams);
    })
    
  },[]);

  useEffect (()=>{
      
    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${search}`)
    .then(res=>res.json())
    .then(data=>{
    
      setLeague(data.teams);
    })
    
  },[search]);

  const handleSearch =(e) => {
    setSearch(e.target.value);
  }
  return (
   
    <div className="container ">
    
      <input type="text"  onChange={handleSearch} placeholder="Search Your Leaque" />
      

     <div className="row mt-5">
      {
        league.map?.(team => <LeaqueInfo team={team}></LeaqueInfo>)
      }

     </div>
     {search}
    </div>
  )
}

export default Home
