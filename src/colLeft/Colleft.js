import React from 'react';
import WindCenter from '../windCenter/WindCenter';
import WindCenterList from '../windCenter/winCenterList';

export default function Colleft() {
  return (
    <div className="col-sm  col-left-call">
      <WindCenter />
      <WindCenterList />
    </div>
  );
}



