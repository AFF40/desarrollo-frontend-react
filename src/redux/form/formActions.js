import { SET_FORM_DATA } from './formTypes';

export const saveFormData = (formData) => {
    console.log("datos del login",formData);
    return {
        type: SET_FORM_DATA,
        payload: formData,
    }
}
