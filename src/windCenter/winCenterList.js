import React from 'react';
import {useSelector} from 'react-redux';
function WindCenterList(props) {



    let oknoD = useSelector((state)=>state.okno);
    let profile = useSelector((state)=>state.profile);
    let stvorkaD = useSelector((state)=>state.stvorka);
    let widthS = useSelector((state)=>state.windowWidth);
    let heightS = useSelector((state)=>state.windowHeight);
    let grid = useSelector((state) => state.gridRez);
    let tide = useSelector((state)=>state.tideRez);
    let setka = useSelector((state) => state.setka);
    let dismanting = useSelector((state) => state.dismanting);

    return (
        <div className = "win">
            <div className ="type">Тип окна: 
            <span className="TypeWin"> {oknoD.rez}</span>
            </div>
            <div className="profile">Профиль: 
            <span className="profileWin"> {profile.rez}</span>
            </div>
            <div className="sizes">Размер: 
            <span className="sizesWin"><span className="widthR"> {widthS.rez}</span> X <span className="heightR">{heightS.rez}</span> ({widthS.rez * heightS.rez / 1000000} m2)</span>
            </div>
            <div className="wind">Окно: 
            <span className="windWin"> {stvorkaD.rez === 'глухое'?'Глухое':stvorkaD.rez}</span>
            </div>
            <div className="podokonnik">Подоконник: 
                <span className="podokonnikWin">  {grid > 0? 'Да':'Нет'}</span><span id="yepod"></span>
            </div>
            <div className="otliv">Отлив: 
                <span className="otlivWin"> {tide > 0? 'Да':'Нет'}</span><span id="yeotl"></span>
            </div>
            <div className="setkaCall">Сетка: 
            <span className="setkaWin"> {(setka > 0)?'Да':'Нет'}</span><span id="yeset"></span>
            </div>
            <div className ="demont">Демонтаж-монтаж: 
            <span className="demontWin"> {(dismanting > 0)?'Да':'Нет'}</span><span id="yed"></span>
            </div>
        </div>
    );
}

export default WindCenterList;