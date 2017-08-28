import { values } from 'lodash';

export const selectAllHomes = state => {
  return values(state.homes);
};


export const selectAllTrips = ({trips_ui}) => {
  // debugger
  let pojo = {};
  //
  if (Array.isArray(trips_ui)){
    trips_ui.forEach(home => {
      pojo[home.id] = home
    });
  }
  return pojo;
};
