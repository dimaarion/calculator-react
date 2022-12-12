import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function IconWind() {

    let oknoS = useSelector((state)=>state.okno);
    let oknoD = useDispatch();
    let bgcolor = { backgroundColor: 'rgb(0, 128, 0)', transition: 1 + 's' };
    let bgcolor1, bgcolor2, bgcolor3;
    if (oknoS.rez === 'Одностворчатое окно') {
        bgcolor1 = bgcolor;
    } else if (oknoS.rez === 'Двустворчатое окно') {
        bgcolor2 = bgcolor;
    } else if (oknoS.rez === 'Трехстворчатое окно') {
        bgcolor3 = bgcolor;
    }

    return (
        <div>
            <table className="table-right">
                <tbody>
                    <tr className="tr-right">
                        <td className="td-right-1 text-center" style={bgcolor1}>
                            <img onClick={()=>oknoD({ type: "OKNO", payload: 'Одностворчатое окно' })}  src="/img/winOdGl.png" id="img-gl" className="img-right" style={{ cursor: 'pointer' }} alt = 'Одностворчатое окно'/>
                        </td>
                        <td className="td-right-2 text-center" style={bgcolor2}>
                            <img onClick={()=>oknoD({ type: "OKNO", payload: 'Двустворчатое окно' })} src="/img/winDvPov.png" id="img-dv" className="img-right" style={{ cursor: 'pointer' }} alt = 'Двустворчатое окно'/>
                        </td>
                        <td className="td-right-3 text-center" style={bgcolor3}>
                            <img onClick={()=>oknoD({ type: "OKNO", payload: 'Трехстворчатое окно' })} src="/img/winTrPov.png" id="img-tr" className="img-right" style={{ cursor: 'pointer' }} alt = 'Трехстворчатое окно'/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default IconWind;