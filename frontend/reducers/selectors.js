import { values } from 'lodash';

export const selectAllHomes = state => {
  return values(state.homes);
};
