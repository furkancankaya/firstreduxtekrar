import * as actionTypes from "./actionTypes";

export const increaseCounter = () => ({
    type: actionTypes.INCREASE_COUNTER,
    payload: 1,
})

export const increaseCounterWithTwo = () => ({
    type: actionTypes.INCREASE_BY_TWO_COUNTER,
    payload: 2,
})

export const decreaseCounter = () => ({
    type: actionTypes.DECREASE_COUNTER,
    payload: 1,
})

export const multiplyCounter = (number) => ({
    type: actionTypes.MULTIPLY_BY_INPUT,
    payload: number,
})
