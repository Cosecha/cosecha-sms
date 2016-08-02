import * as types from './types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function onMessageChange(message) {
  console.log('running onMessageChange...');
}
