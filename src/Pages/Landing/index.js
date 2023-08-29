
import React, { useEffect, useState } from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid'; 
// import BedIcon from '@mui/icons-material/Bed';
// import RoomIcon from '@mui/icons-material/Room';
// import BathtubIcon from '@mui/icons-material/Bathtub';
// import Divider from '@mui/material/Divider';
// import { Link } from 'react-router-dom';
// import { Details_PAGE } from '../../Utilies/pathRoute';
import CardContainer from '../../Component/CardContainer';
import './style.css'
import HeroApp from '../../Component/HeroApp'


const Landing = ()=> {
 
    const [house, setHouse] = useState([]);
    const getHouse = async () => {
        const response = await fetch("https://my-json-server.typicode.com/GadaAhmed/mockread-api/houses");
        const FinalData = await response.json();
        setHouse(FinalData)
    }

    


    useEffect(() => {
    getHouse();
   
     }, []
      )

    return <>

    <HeroApp/>
   <h2 style={{
    color:'#120229',
    marginLeft:10,
    textDecoration:'underline'

   }}>
  Added House</h2>
   <section className='card-grid'>
   <CardContainer houses={house}/>
   </section>
  

</>
   
  }
export default Landing;

