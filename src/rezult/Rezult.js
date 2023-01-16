import React from 'react';


function Rezult(props) {






  let price = Number(props.priceRezult);
  let grid = Number(props.gridRez);
  let tide = Number(props.tideRez);
  let setka = Number(props.setka);
  let dismanting = Number(props.dismanting);

  price = price + (price / 100 * 10);

  let summa = price + grid + tide + setka + dismanting;
  summa = summa.toFixed(1);
  return (
    <div>

      <div className="container result">
        <div>
          <div className='row'>
            <div className='col-sm'>
              <div className=' col-sm fw-700'>Окно</div>
              <div className=' col-sm'>{price.toFixed(1)} ye.</div>
            </div>
            <div className='col-sm'>
              <div className=' col-sm fw-700'>Подоконник</div>
              <div className=' col-sm'>{grid} ye.</div>
            </div>
            <div className='col-sm'>
              <div className=' col-sm fw-700'>Отлив</div>
              <div className=' col-sm'>{tide} ye.</div>
            </div>
            <div className='col-sm'>
              <div className=' col-sm fw-700'>Сетка</div>
              <div className=' col-sm'>{setka} ye.</div>
            </div>
            <div className='col-sm'>
              <div className=' col-sm fw-700'>Демонтаж-монтаж</div>
              <div className=' col-sm'>{dismanting} ye.</div>
            </div>

          </div>
        </div>
      </div>

      <div className="rezultCall fs-2 row text-center col-sm ">
        <div className=" mt-3 text-success col-sm">{summa} ye.</div>
        <div className='col-sm'>
          <button type="button" className="mt-3 btn btn-success" data-type="calculator" data-name="Отправить заявку" data-bs-toggle="modal" data-bs-target="#mainModal">
            Отправить заявку
          </button></div>
      </div>

    </div>

  );
}

export default Rezult;