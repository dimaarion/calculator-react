import React from 'react';


function Rezult(props) {






  let price = Number(props.priceRezult);
  let grid = Number(props.gridRez);
  let tide = Number(props.tideRez);
  let setka = Number(props.setka);
  let dismanting = Number(props.dismanting);

  let summa = price + grid + tide + setka + dismanting;
  summa = summa.toFixed(1);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className='text-center' scope="col">Окно</th>
            <th className='text-center' scope="col">Подоконник</th>
            <th className='text-center' scope="col">Отлив</th>
            <th className='text-center' scope="col">Сетка</th>
            <th className='text-center' scope="col">Демонтаж-монтаж</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-center'>{price} ye.</td>
            <td className='text-center'>{grid} ye.</td>
            <td className='text-center'>{tide} ye.</td>
            <td className='text-center'>{setka} ye.</td>
            <td className='text-center'>{dismanting} ye.</td>
          </tr>
        </tbody>
      </table>

      <div className="rezultCall fs-2 row text-center ">
        <div className=" mt-3 text-success col-sm">{summa} ye.</div>
        <div className='col-sm'>
          <button type="button" className="mt-3 btn btn-success" data-type = "calculator" data-name = "Отправить заявку"  data-bs-toggle="modal" data-bs-target="#mainModal">
            Отправить заявку
          </button></div>
      </div>
      
    </div>

  );
}

export default Rezult;