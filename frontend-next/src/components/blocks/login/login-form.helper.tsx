'use server';

import {ApiService} from '@/services/api';
import {type LoginPayload, type LoginPhonePayload} from '@/types';

export const onSubmitForm = async (
    values: LoginPayload
) => {
    return await ApiService.postLogin({
        email: values.email,
        password: values.password,
    });
};

export const onSubmitPhoneForm = async (
    values: LoginPhonePayload
) => {
    return await ApiService.postPhoneLogin({
        phone: values.phone
    });
};
