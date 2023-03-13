import React from 'react';
import { useSelector } from 'react-redux';

function Rezult(props) {



  let profile = useSelector((state) => state.profile);
  let windowWidth = useSelector((state) => state.windowWidth);

  let price = Number(props.priceRezult);
  let grid = Number(props.gridRez);
  let tide = Number(props.tideRez);
  let setka = Number(props.setka);
  let dismanting = Number(props.dismanting);

  price = price + (price / 100 * 20);
  if (profile.options === '4') {
    price = price + (price / 100 * 30);
  }
  grid = (Number(windowWidth.rez) / 1000) * grid;
  tide = (Number(windowWidth.rez) / 1000) * tide;
  let summa = price + grid + tide + setka + dismanting;
  summa = summa.toFixed(1);
  return (
    <div>

      <div className="container result">
        <div>
          <div className='row'>
            <div className='col-sm'>
              <div className=' col-sm fw-700'>Окно</div>
              <div className=' col-sm'>{price.toFixed(1) !== 'NaN' ? price.toFixed(1) : 0} ye.</div>
            </div>
            <div className='col-sm'>
              <div className=' col-sm fw-700'>Подоконник</div>
              <div className=' col-sm'>{grid.toFixed(1)} ye.</div>
            </div>
            <div className='col-sm'>
              <div className=' col-sm fw-700'>Отлив</div>
              <div className=' col-sm'>{tide.toFixed(1)} ye.</div>
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

      <div className="rezultCall fs-2 row text-center col-sm-3 mt-3 p-0">
        <div className='col-sm'>Итого:</div>
        <div className="text-success col-sm">{summa !== 'NaN' ? summa : 0} ye.</div>

      </div>

    </div>

  );
}

export default Rezult;