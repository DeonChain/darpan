import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

export const testSlice = createSlice({
  name: "test",
  initialState: {
    display:true,
    title: "",
    datetime: "",
    section: 1,
    duration: "",
    sections: [
      {
        question_count: "",
        marks: "",
        negative: "",
        questions: [],
      },
      {
        question_count: "",
        marks: "",
        negative: "",
        questions: [],
      },
      {
        question_count: "",
        marks: "",
        negative: "",
        questions: [],
      },
    ],
  },
  reducers: {
    updatetest: (state, action) => {
      return produce(state, (draftState) => {
        // Merge the payload into the draft state
        Object.assign(draftState, action.payload);
      });
    },
  },
});

export const { updatetest } = testSlice.actions;

export default testSlice.reducer;
