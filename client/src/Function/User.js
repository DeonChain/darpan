import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        name: "",
        phone: "",
        registrationDate: "",
        verification: {
            email: ""
        },
    },
    reducers: {
        update: (state, action) => {
            state.email = action.payload.email
            state.name = action.payload.name
            state.phone = action.payload.phone
            state.registrationDate = action.payload.registrationDate
            state.verification = action.payload.verification
        }
    },
});
export const { update } = userSlice.actions;

export default userSlice.reducer;
