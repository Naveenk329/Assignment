import { createSlice } from '@reduxjs/toolkit'
export const allProductsSlice = createSlice({
    name: "AllProducts", 
    initialState:{
        Blog:[]
    },
    reducers: {
        moreInfo:(state,action)=>{
            state.Blog=action.payload

        }

    }
 

});
export const { moreInfo } = allProductsSlice.actions;

export default allProductsSlice.reducer;
