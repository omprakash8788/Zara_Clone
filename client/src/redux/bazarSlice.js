import {createSlice} from '@reduxjs/toolkit'

// initial state
const initialState = {
    productData:[],
    userInfo:null,

  };
  export const bazarSlice = createSlice({
    name:"bazar",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item= state.productData.find((item)=>item._id===action.payload._id);

            if(item){
                item.quantity+=action.payload.quantity;
            }
            else{
                state.productData.push(action.payload);

            }

        },
        // delete from cart
        deleteItem: (state, action) => {
            state.productData = state.productData.filter(
              (item) => item._id !== action.payload
            );
          },
        resetCart:(state)=>{
            state.productData=[];
        },
        incrementQuantity: (state, action) => {
            const item = state.productData.find(
              (item) => item._id === action.payload._id
            );
            if (item) {
              item.quantity++;
            }
          },

          decrementQuantity:(state, action)=>{
            const item = state.productData.find(
                (item)=>item._id===action.payload._id
            );
            if(item.quantity===1){
                item.quantity=1
            }
            else{
                item.quantity--;
            }
        },
           // ========== user Start here ========== //
    addUser:(state, action)=>{
      state.userInfo = action.payload;
    },
    removeUser:(state)=>{
      state.userInfo = null;
    },

    // ========== user End here ============ //

    },

  })

  export const {addToCart, deleteItem,addUser,removeUser, resetCart, incrementQuantity,decrementQuantity}=bazarSlice.actions;

  export default bazarSlice.reducer