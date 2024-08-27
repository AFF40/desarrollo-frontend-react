import { SET_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
        password: '',
    },
    passValid: null,
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA : {
            const {password} = action.payload;
            if (password === "mod7ReactUSIP") {
                return {
                    ...state,
                    formData: {
                        ...state.formData,
                        ...action.payload,
                    },
                    passValid: true,
                };
            } else {
                return {
                    ...state,
                    passValid: false,
                };
            }
        }
        case 'CLEAR_FORM_DATA': {
            return {
                ...state,
                formData: {
                    username: '',
                    email: '',
                    password: '',
                },
                passValid: null,
            };
        }
        default:
            return state;
    }
};


export default formReducer;