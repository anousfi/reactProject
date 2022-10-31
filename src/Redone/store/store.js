import { configureStore } from "@reduxjs/toolkit";
import myKit from '../Myreducers/reducers';
const myStore=configureStore({
    reducer:{
      MyKit:  myKit
    }
})
export default myStore;