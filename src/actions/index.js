export const incNummer=(num) => {
    return {
        type: 'INCREASE_NUMBER',
        payload: num
    }
}


export const decNummer=() => {
    return {
        type: 'DECREASE_NUMBER'
    }
}