import { createSlice } from "@reduxjs/toolkit";



const initialState = [
    { id: 1, name: "Pramod", email: "pramod@text.com" },
    { id: 2, name: "Vicky", email: "Rohan@text.com" },
    { id: 3, name: "Sohan", email: "Sohan@text.com" }
]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers : {
        addUser : (state ,action ) => {
            console.log("action",action)
            state.push(action.payload)
        },
        editUser : (state ,action ) => {
            const {id , name , email} = action.payload;
            const existingUsers = state.find(user => user.id == id)
            if(existingUsers){
                existingUsers.name = name;
                existingUsers.email = email;
            }
     
        }
    }
})

export const {addUser,editUser} = userSlice.actions
export default userSlice.reducer