import imageAbout from '../../Utilies/images/download.jpg';

import './style.css';


export default  function About(){

    return(

        <>
     

        <h1 style={{textAlign:"center"}}>About Us </h1>
<div style={{display:'flex', fontSize:25,}}>
       <img src={imageAbout} alt='' className='image-about'/>

         <p className='p-house' >

         Provides up-to-date and reliable information that makes finding the property of your dreams easy and fast. It offers details about residential and commercial properties as well as rental properties all over Palestine. Whether you've just started your search or are ready to make a purchase, properties are updated daily to ensure access to the latest and most accurate listings.
         </p>
</div>
          

       

        </>

    )

    }