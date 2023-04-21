import { createAsyncThunk } from "@reduxjs/toolkit";
import { GREETINGS_RETRIEVED } from "./greeting";

const getGreetings = createAsyncThunk(GREETINGS_RETRIEVED, async () => {
    const res = await fetch("/greetongs/random", {}).then((response) => response.json());
    console.log(res.message)
    return res.message;
})

export default getGreetings;