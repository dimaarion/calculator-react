import React from 'react';
import WindCenter from '../windCenter/WindCenter';
import WindCenterList from '../windCenter/winCenterList';

export default function Colleft() {
  return (
    <div className="col-sm-3 col-left" >
      <WindCenter />
      <WindCenterList />
    </div>
  );
}



