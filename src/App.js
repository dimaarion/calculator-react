import React, { useEffect, useState } from 'react';
import Colleft from './colLeft/Colleft';
import ColRight from './colRight/ColRight';
import Rezult from './rezult/Rezult';
import { useSelector } from 'react-redux';


export default function App(props) {
  const [price, setPrice] = useState(0)

  let pr = useSelector((state)=>state._priceRez);
  let gridRez = useSelector((state)=>state.gridRez);
  let tideRez = useSelector((state)=>state.tideRez);
  let setka = useSelector((state)=>state.setka);
  let dismanting = useSelector((state)=>state.dismanting);


 useEffect(()=>{
  pr.map((x)=>setPrice(x.znacenie))
},[pr])


  return (
    <div className="App container-fluid">  
      <div className = "container"> 
        <div className="row row-left-call">
          <Colleft />
          <ColRight getdopp={props.getdopp} /> 
         
        </div>
        <Rezult setka = {setka} dismanting = {dismanting} tideRez={tideRez} priceRezult={price} gridRez={gridRez} />

      </div>
    </div>
  );
}





 
