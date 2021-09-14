import React from 'react'
import { Link } from 'react-router-dom'

function LeaqueInfo(props) {
    const{strTeamBadge,strTeam,idTeam}=props.team
    return (
<div className="col-md-4 my-3">     
 <div class="card d-flex justify-content-center align-items-center my-2">
  <img src={strTeamBadge} class="img-fluid " style={{width: '100px', height: '100px'}} alt="..."/>
  <div class="card-body ">
      
    
    <h5 class="card-title">{strTeam}</h5>
     <Link to={`/team/${idTeam}`}>View Details</Link> 
  </div>
</div>
 </div>
    )
}

export default LeaqueInfo
