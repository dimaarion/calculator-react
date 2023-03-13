import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function WindCenter() {
    let widthD = useDispatch();
    let heightD = useDispatch();



    let oknoD = useSelector((state) => state.okno);
    let stvorkaD = useSelector((state) => state.stvorka);
    let widthS = useSelector((state) => state.windowWidth);
    let heightS = useSelector((state) => state.windowHeight);

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
        img = "/storage/img/winTrPov.png";
        w = 300
        wmin = '1600';
        wmax = '2300';
        hmin = '1000';
        hmax = '1700';
    }

    if (oknoD.rez === 'Одностворчатое окно' && stvorkaD.rez === 'глухое') {
        img = "/storage/img/winOdGl.png";
    } else if (oknoD.rez === 'Одностворчатое окно' && stvorkaD.rez === 'Поворотное') {
        img = "/storage/img/winOdPov.png";
    } else if (oknoD.rez === 'Одностворчатое окно' && stvorkaD.rez === 'Поворотно-откидное') {
        img = "/storage/img/winOdPovOt.png";
    }
    if (oknoD.rez === 'Двустворчатое окно' && stvorkaD.rez === 'Поворотное') {
        img = "/storage/img/winDvPov.png";
    } else if (oknoD.rez === 'Двустворчатое окно' && stvorkaD.rez === 'глухое') {
        img = "/storage/img/winDvPov.png";
    }
    else if (oknoD.rez === 'Двустворчатое окно' && stvorkaD.rez === 'Поворотно-откидное') {
        img = "/storage/img/winDvPovOt.png";
    }
    if (oknoD.rez === 'Трехстворчатое окно' && stvorkaD.rez === 'Поворотное') {
        img = "/storage/img/winTrPov.png";
    } else if (oknoD.rez === 'Трехстворчатое окно' && stvorkaD.rez === 'Поворотно-откидное') {
        img = "/storage/img/winTrPovOt.png";
    }


    return (
        <div className='col-sm'>

            <div className='position-relative box-left'>
                
                <div className='position-absolute top-0 start-50 translate-middle'>
                    <div className=" text-center form-control num-top">{widthS.rez}</div>
                </div>
                <div className='position-absolute top-50 start-50 translate-middle'>
                    <img className="img-left" src={img} style={{ cursor: 'none', width: '200px',marginTop:"-20px"}} alt="" />
                </div>
                <div className='position-absolute top-50 start-0 translate-middle'>
                    <input onChange={(e) => heightD({ type: "HEIGHT", payload: e.target.value })} type="range" min={hmin} max={hmax}
                        className="form-range num-right-input" />
                </div>
                <div className='position-absolute top-100 start-50 translate-middle range-field'>
                    <input onChange={(e) => widthD({ type: "WIDTH", payload: e.target.value })} type="range" min={wmin} max={wmax} 
                    className="form-range num-bottom-input" />
                </div>
                <div className='position-absolute top-50 start-100 translate-middle'>
                    <div className='form-control text-center num-right'>{heightS.rez}</div>
                </div>
            </div>
            <div className='row justify-content-center mt-5 '>
                <div className='col-sm-6 '>

                </div>
            </div>

            {/*  <div className="table-left-top-call">
                <div>
                    <div className="tr-top-colsp">
                        <div className="td-top-0"></div>
                        <div className="td-top-1">
                            <div className="num-top text-center">{widthS.rez}</div>
                        </div>
                    </div>
                    <div className="td-top row">

                        <div className="td-top-5 col-sm">
                            <input onChange={(e) => heightD({ type: "HEIGHT", payload: e.target.value })} type="range" min={hmin} max={hmax} className="num-right" />
                        </div>
                        <div className="td-top-2 text-center col-sm">
                            <img className="img-left" src={img} style={{ cursor: 'none', width: w + 'px', height: 250 + 'px' }} alt="" />
                        </div>
                        <div className="td-left-0 col-sm">
                            <div className="num-left text-center">{heightS.rez}</div>
                        </div>
                    </div>
                    <div className="tr-bottom">
                        <div className="td-bottom-0 bt">
                        </div>
                        <div className="td-bottom-1 bt">
                            <input onChange={(e) => widthD({ type: "WIDTH", payload: e.target.value })} type="range" min={wmin} max={wmax} className="num-bottom-1 in" />
                        </div>
                    </div>
                </div>
    </div>*/}
        </div>
    );
}



export default WindCenter;