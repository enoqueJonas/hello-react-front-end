import { createAsyncThunk } from "@reduxjs/toolkit";
import { GREETINGS_RETRIEVED } from "./greeting";
import axios from "axios";

const getGreetings = createAsyncThunk(GREETINGS_RETRIEVED, async () => {
    const res = await axios.get("http://localhost:3000/greetings/random")
        .catch(err => console.error(err));
    return res.data.message;
});


export default getGreetings;