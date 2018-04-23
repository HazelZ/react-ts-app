/* 添加reducer */

import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_TNTHUSIASM } from '../constants/index';


export function enthusiasm(state: StoreState, action:EnthusiasmAction): StoreState{
  switch(action.type) {
    case INCREMENT_ENTHUSIASM:
        return {...state,enthusiasmLavel: state.enthusiasmLevel + 1};
    case DECREMENT_ENTHUSIASM:
        return {...state,enthusiasmLavel: Math.max(1, state.enthusiasmLevel - 1) }; 
  }
}