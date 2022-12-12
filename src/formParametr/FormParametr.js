import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { priceRez, grids, tides, dopprice } from '../redux/actions';

function FormParametr(props) {
    const [profile, setProfile] = useState("Россия, Турция");
    const [okno, setOkno] = useState("Одностворчатое окно");
    const [stvorka, setStvorka] = useState("глухое");

    let prD = useDispatch();
    let oknoD = useDispatch();
    let stvorkaD = useDispatch();
    let gridD = useDispatch();
    let gridRez = useDispatch();
    let tideD = useDispatch();
    let tideRez = useDispatch();
    let doppriceD = useDispatch();
    let setka = useDispatch();
    let dismanting = useDispatch();
    let profiles = useDispatch();

    let widthS = useSelector((state) => state.windowWidth);
    let heightS = useSelector((state) => state.windowHeight);
    let grid = useSelector((state) => state.grid);
    let tide = useSelector((state) => state.tide);
    let dopp = useSelector((state) => state.dopp);

    useEffect(() => {
        prD(priceRez(profile, okno, stvorka, widthS.rez, heightS.rez));
    }, [prD, profile, okno, stvorka, widthS.rez, heightS.rez]);

    useEffect(() => {
        gridD(grids({ type: "GRID" }));
    }, [gridD]);

    useEffect(() => {
        tideD(tides({ type: "TIDE" }));
    }, [tideD])

    useEffect(() => {
        doppriceD(dopprice({ type: "DOPPRICE" }));
    }, [doppriceD])

    return (
        <div>
            <h5>{okno}</h5>
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor="types">Тип окна</label>
                    <select id="types" onChange={(e) => { setOkno(e.target.value); oknoD({ type: "OKNO", payload: e.target.value }) }} className="select-right-prof form-control custom-select">
                        <option  value="Одностворчатое окно" className="optionProfA">Одностворчатое окно</option>
                        <option  value="Двустворчатое окно" className="optionProfB">Двустворчатое окно</option>
                        <option  value="Трехстворчатое окно" className="optionProfC">Трехстворчатое окно</option>
                    </select>
                </div>
                <div className='col-sm'>
                    <label htmlFor="prof">Профиль</label>
                    <select id="prof" onChange={(e) => { setProfile(e.target.value); profiles({ type: "PROFILE", payload: e.target.value }) }} className="select-right-prof form-control custom-select">
                        <option value="Россия, Турция" className="optionProfA">Россия, Турция</option>
                        <option value="3-камерный" className="optionProfB">3-камерный</option>
                        <option value="5-камерный" className="optionProfC">5-камерный</option>
                    </select>
                </div>
                <div className='col-sm'>
                    <label htmlFor="stv">Окно</label>
                    <select id="stv" onChange={(e) => { setStvorka(e.target.value); stvorkaD({ type: "STVORKA", payload: e.target.value }) }} className="select-right form-control custom-select">
                        {okno === "Одностворчатое окно" ? <option key='114' value="глухое" className="optionA">Глухое</option> : ""}
                        <option  value="Поворотное" className="optionB">Поворотное</option>
                        <option  value="Поворотно-откидное" className="optionC">Поворотно-откидное</option>
                    </select>
                </div>
            </div>
            <label className="" htmlFor="podok">Подоконник</label>
            <select onChange={(e) => gridRez({ type: "GRIDREZ", payload: e.target.value })} className="select-right-podok form-control custom-select" id="podok">
                <option value={0} className="option-podok-white-no">Нет</option>
                {
                    grid.map((x) =>
                        <option key={x.grid_id + "grid-white"} value={x.white} className={"option-podok-white-" + x.grid_id}> Белый {x.size} мм.</option>

                    )
                }
                {
                    grid.map((p) =>
                        <option key={p.grid_id + "grid-color"} value={p.color} className={"option-podok-color-" + p.grid_id + 2}> Цветной {p.size} мм.</option>

                    )
                }

            </select><label className="" htmlFor="otliv">Отлив</label>
            <select onChange={(e) => tideRez({ type: "TIDEREZ", payload: e.target.value })} className="select-right-otliv form-control custom-select" id="otliv">
                <option value={0} className="option-otliv-white-no">Нет</option>
                {
                    tide.map((white) =>
                        <option key={white.tide_id + "tide-white"} value={white.white} className={"option-podok-color-" + white.tide_id + 4}> Белый {white.size} мм.</option>
                    )
                }
                {
                    tide.map((color) =>
                        <option key={color.tide_id + "tide-color"} value={color.color} className={"option-podok-color-" + color.tide_id + 6}> Цветной {color.size} мм.</option>
                    )
                }
            </select>
            <label htmlFor="setka">Сетка</label>
            {dopp.map((x) => <div key={x.id + "dopp"}>

                <select onChange={(e) => setka({ type: "SETKA", payload: e.target.value })} id="setka" className="select-right-setka form-control custom-select">
                    <option value={0} className="option-setka-no">Нет</option>
                    <option value={x.grid} className="option-setka-yes">Да</option>
                </select><label htmlFor="dimontaj">Демонтаж-монтаж</label>
                <select onChange={(e) => dismanting({ type: "DISMANTING", payload: e.target.value })} id="dimontaj" className="select-right-dimontaj form-control custom-select">
                    <option value={0} className="option-dimontaj-no">Нет</option>
                    <option value={x.dismanting} className="option-dimontaj-yes">Да</option>
                </select>
            </div>)

            }

        </div>
    );
}

export default FormParametr;