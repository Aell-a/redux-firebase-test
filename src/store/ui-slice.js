const { createSlice } = require("@reduxjs/toolkit");

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartVisibility: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartVisibility = !state.cartVisibility;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
