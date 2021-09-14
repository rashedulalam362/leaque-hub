import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './LeaqueDetails.css'
function LeaqueDetails() {
    const{idTeam}=useParams();
    const[teams, setTeams]=useState({})
    useEffect(()=>{
    const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setTeams(data.teams[0]);
    })
    },[idTeam])
    return (
        <div className="container ">
       
        <div className="img-container">
        <  img src={teams.strTeamBanner} alt=""/>
        </div>
        <div className="detail">
         <div>
         <h3>{teams.strLeague}</h3>
         <h4>Country:{teams.strCountry}</h4>
         <h4>Founded:{teams.intFormedYear}</h4>
         <h4>gender:{teams.strGender}</h4>
         </div>
        
         
        </div>
        
        <p className="paragraph">{teams.strDescriptionEN}</p>

            
       </div>
    )
}

export default LeaqueDetails
