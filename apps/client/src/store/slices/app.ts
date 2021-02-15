import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import axios from 'axios';

export enum Status {
  LOADING = 'loading',
  AUTHENTICATED = 'authenticated',
}

interface State {
  status: Status;
}

const initialState: State = {
  status: Status.LOADING,
};

export const Slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setStatus(state: State, action: PayloadAction<Status>) {
      console.log('set status');
      state.status = action.payload;
      console.log(state);
    },
    // loaded(state: State, action: PayloadAction<any>) {
    //   state.currentPage = '';
    //   state.status = 'loaded';
    // },
    // register(state: State, action: PayloadAction<any>) {
    //   state.currentPage = 'register';
    //   state.status = 'register';
    // },
    // intro(state: State, action: PayloadAction<any>) {
    //   state.currentPage = 'intro';
    //   state.status = 'intro';
    // },
    // test(state: State, action: PayloadAction<any>) {
    //   state.currentPage = 'test';
    //   state.status = 'test';
    // },
  },
});

export const appStart = (): AppThunk => async (dispatch) => {};
export const setStatus = (status: Status): AppThunk => async (dispatch) => {
  dispatch(Slice.actions.setStatus(status));
};

export const postRegisterData = (data: any): AppThunk => async (dispatch) => {
  try {
    // console.log('c')
    // let r = await axios({
    //   method: 'post',
    //   url: 'http://192.168.1.8:3333/users',
    //   data: data
    // });
    // let _data = await AsyncStorage.setItem('_covid_data', JSON.stringify(data));
    dispatch(appStart());
  } catch (e) {
    console.log(e.response.status);
  }
  //     catch (e) {
  //         console.log(e.response.status);
  //     }
  //
  //     const data = await AsyncStorage.getItem('_covid_data');
  //     if (data !== null) {
  //         console.log(value);
  //     }
  //     else {
  //         dispatch(intro(null))
  //     }
  // } catch (error) {
  //     // Error retrieving data
  // }
};

// export const firstStart = (): AppThunk => async (dispatch) => {
//   dispatch(loading(null));
// };

export const getStatus = (state: RootState) => {
  return state.app.status;
};
