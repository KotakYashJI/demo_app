import { configureStore } from "@reduxjs/toolkit"
import contactslice from "./slices/contact.slice"

export const store = configureStore({
    reducer: {
        contact: contactslice
    }
})