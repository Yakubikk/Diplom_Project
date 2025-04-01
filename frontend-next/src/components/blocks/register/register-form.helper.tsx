'use server';

import {ApiService} from '@/services/api';
import {type RegisterPayload} from '@/types';

export const onSubmitForm = async (
    values: RegisterPayload & { terms: boolean }
) => {
    if (!values.terms) {
        return null;
    }
    return await ApiService.postRegister({
        firstname: values.firstname,
        lastname: values.lastname,
        patronymic: values.patronymic,
        email: values.email,
        password: values.password,
        tel: values.tel,
        terms: values.terms,
        isProfessor: values.isProfessor,
    });
};

export const getUserOnSubmit = async (
    id: string
) => {
    return ApiService.getUserDataById({
        id: id
    });
};
