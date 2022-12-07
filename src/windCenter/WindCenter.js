import React from 'react';
import { useDispatch , useSelector} from 'react-redux';


function WindCenter() {
    let widthD = useDispatch(); 
    let heightD = useDispatch(); 
    
 

    let oknoD = useSelector((state)=>state.okno);
    let stvorkaD = useSelector((state)=>state.stvorka);
    let widthS = useSelector((state)=>state.windowWidth);
    let heightS = useSelector((state)=>state.windowHeight);

    let img, w, wmin, wmax, hmin, hmax;

    if (oknoD.rez === 'Одностворчатое окно') {
        w = 200;
        wmin = '500';
        wmax = '1200';
        hmin = '1000';
        hmax = '1700';
    } else if (oknoD.rez === 'Двустворчатое окно') {
       
        w = 250;
        wmin = '1000';
        wmax = '1700';
        hmin = '1000';
        hmax = '1700';

    } else if (oknoD.rez === 'Трехстворчатое окно') {
        img = "/img/winTrPov.png";
        w = 300
        wmin = '1600';
        wmax = '2300';
        hmin = '1000';
        hmax = '1700';
    }

    if(oknoD.rez === 'Одностворчатое окно' && stvorkaD.rez === 'глухое'){
        img = "/img/winOdGl.png";
    }else if(oknoD.rez === 'Одностворчатое окно' && stvorkaD.rez === 'Поворотное'){
        img = "/img/winOdPov.png";
    }else if(oknoD.rez === 'Одностворчатое окно' && stvorkaD.rez === 'Поворотно-откидное'){
        img = "/img/winOdPovOt.png";
    }
    if(oknoD.rez === 'Двустворчатое окно' && stvorkaD.rez === 'Поворотное'){
        img = "/img/winDvPov.png";
    }else if(oknoD.rez === 'Двустворчатое окно' && stvorkaD.rez === 'глухое'){
        img = "/img/winDvPov.png";
    }
    else if(oknoD.rez === 'Двустворчатое окно' && stvorkaD.rez === 'Поворотно-откидное'){
        img = "/img/winDvPovOt.png";
    }
    if(oknoD.rez === 'Трехстворчатое окно' && stvorkaD.rez === 'Поворотное'){
        img = "/img/winTrPov.png";
    }else if(oknoD.rez === 'Трехстворчатое окно' && stvorkaD.rez === 'Поворотно-откидное'){
        img = "/img/winTrPovOt.png";
    }

   
    return (
        <div >
            
            <table className="table-left-top-call">
                <tbody>
                    <tr className="tr-top-colsp">
                        <td className="td-top-0"></td>
                        <td className="td-top-1">
                            <div className="num-top text-center">{widthS.rez}</div>
                        </td>
                    </tr>
                    <tr className="tr-top">
                        <td className="td-left-0">
                            <div className="num-left text-center">{heightS.rez}</div>
                        </td>
                        <td className="td-top-2 text-center">
                            <img className="img-left" src={img} style={{ cursor: 'none', width: w + 'px', height: 250 + 'px' }} alt =""/>
                        </td>
                        <td className="td-top-5">
                            <input onChange={(e) => heightD({type:"HEIGHT",payload:e.target.value})} type="range" min={hmin} max={hmax} className="num-right" />
                        </td>
                    </tr>
                    <tr className="tr-bottom">
                        <td className="td-bottom-0 bt">
                        </td>
                        <td className="td-bottom-1 bt">
                            <input onChange={(e) => widthD({type:"WIDTH", payload:e.target.value})} type="range" min={wmin} max={wmax} className="num-bottom-1 in" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}



export default WindCenter;