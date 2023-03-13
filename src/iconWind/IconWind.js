import React from 'react';
import {useSelector} from 'react-redux';

function IconWind() {

    let oknoD = useSelector((state)=>state.okno);

    let bgcolor = { backgroundColor: 'rgb(0, 128, 0)', transition: 1 + 's' };
    let bgcolor1, bgcolor2, bgcolor3;
    if (oknoD.rez === 'Одностворчатое окно') {
        bgcolor1 = bgcolor;
    } else if (oknoD.rez === 'Двустворчатое окно') {
        bgcolor2 = bgcolor;
    } else if (oknoD.rez === 'Трехстворчатое окно') {
        bgcolor3 = bgcolor;
    }

    return (
        <div>
            <table className="table-right">
                <tbody>
                    <tr className="tr-right">
                        <td className="td-right-1 text-center" style={bgcolor1}>
                            <img  src="/storage/img/winOdGl.png" id="img-gl" className="img-right" style={{ cursor: 'pointer' }} alt = 'Одностворчатое окно'/>
                        </td>
                        <td className="td-right-2 text-center" style={bgcolor2}>
                            <img  src="/storage/img/winDvPov.png" id="img-dv" className="img-right" style={{ cursor: 'pointer' }} alt = 'Двустворчатое окно'/>
                        </td>
                        <td className="td-right-3 text-center" style={bgcolor3}>
                            <img src="/storage/img/winTrPov.png" id="img-tr" className="img-right" style={{ cursor: 'pointer' }} alt = 'Трехстворчатое окно'/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default IconWind;