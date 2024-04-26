import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const allPost = createAsyncThunk(
    'appPostSlice/fetchAllPost',
    async () => {
        try {
            const response = await fetch('http://localhost/neighboor_hood_service_hub/models/all_post.php');
            if (!response.ok) {
                throw new Error('Failed to fetch the data')
            }
            return await response.json();
        } catch (error) {
            throw new Error
        }

    }
);

const allPostSlice = createSlice({
    name: "allPostSlice",
    initialState: {
        data: [],
        error: '',
        status: 'idle',
    },
    reducers: {
        allPosts: (state, action) => {
            state.data = state.data.filter((post) => post.user_id !== action.payload)
        },

        myPosts: (state, action) => {
            state.data = state.data.filter((post) => post.user_id === action.payload)
        },

        filterCategory:(state, action)=>{
            state.data = state.data.filter((post)=>post.category === action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(allPost.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'fulfilled';

            })
            .addCase(allPost.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message || 'An error occurred.';
            });
    }
});

export const { myPosts,allPosts,filterCategory } = allPostSlice.actions;

export default allPostSlice.reducer;
