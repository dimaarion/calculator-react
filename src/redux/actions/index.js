import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sandani.ru/api/getdb/'
    
})

export const array_obj = (arr) => {
    let new_arr = [];
    // eslint-disable-next-line
    for (const key in arr) {

        new_arr[key] = arr[key];


    }
    return new_arr;
}

export const grids = () => {
    return (dispatch) => {
        api.get('grid.php')
            .then((res) => dispatch({ type: 'GRID', payload: res }))
    }
}




export const tides = () => {
    return (dispatch) => {
        api.get('tide.php')
            .then((res) => dispatch({ type: 'TIDE', payload: res }))
    }
}

export const dopprice = () => {
    return (dispatch) => {
        api.get('dopprices.php')
            .then((res) => dispatch({ type: 'DOPPRICE', payload: res}))
            
    }
}

export const priceZnacenie = () => {
    return (dispatch) => {
        api.get('priceznacenie.php')
            .then((res) => dispatch({ type: 'PRICE', payload: res.data }))
            
    }
}
export const priceInZnacRez = (arr, profiles, okno, stvorka, width, height)=>{
    let rezd = 0;
    arr.map((x)=>
    (x.profiles === profiles && x.okno === okno && x.stvorka === stvorka && x.width === width && x.height === height)?
    rezd = x.znacenie
    :''
    )
     return {
         type:'PRICEREZULT',
         payload:rezd,
         
     }
}

export const priceRez = (profiles,okno,stvorka,width,height)=>{
    return (dispatch) => {
        api.get('pricerezult.php',{params:{
            profiles:profiles,
            okno:okno,
            stvorka:stvorka,
            width:width,
            height:height

        }})
            .then((res) => dispatch({ type: 'PRICEREZ', payload: res.data }))
            
    }
}