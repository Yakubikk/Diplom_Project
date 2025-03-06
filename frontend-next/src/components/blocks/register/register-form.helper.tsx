'use server';

import {ApiService} from '@/services/api';
import {type RegisterPayload} from '@/types';

export const onSubmitForm = async (
    values: RegisterPayload & { agree: boolean }
) => {
    return await ApiService.postRegister({
        fullname: values.fullname,
        email: values.email,
        password: values.password,
        isProfessor: values.isProfessor,
    });
};
