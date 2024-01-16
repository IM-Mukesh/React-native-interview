import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'entry',
  initialState: {
    name: '',
    login: false,
    wicketKeepers: [],
    batsmans: [],
    allRounders: [],
    bowlers: [],
    teams: [],
    players: [],
    combinationOf: [],
    currentData: {},
  },
  reducers: {
    TEAM: (entry, action) => {
      return {...entry, ...action.payload};
    },
  },
});

export const {TEAM} = slice.actions;

export default slice.reducer;
