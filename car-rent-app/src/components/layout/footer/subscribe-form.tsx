'use client';

import React, {useState} from "react";
import {Button, Checkbox, FormControl, FormControlLabel, Stack, TextField, styled} from "@mui/material";

const WhiteTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        color: 'white',
    },
    '& .MuiInputLabel-root': {
        color: 'white',
        '&.Mui-focused': {
            color: 'white',
        },
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
});

const SubscribeFormFooter: React.FC = () => {
    const [value, setValue] = useState('');
    const [checked, setChecked] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(value);
    };

    return (
        <form autoComplete='off' onSubmit={onSubmit}>
            <FormControl fullWidth>
                <Stack direction='column' width='100%' spacing={2}>
                    <WhiteTextField
                        required
                        fullWidth
                        type='email'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        variant='outlined'
                        label='Ваш email'
                    />
                    <Button
                        fullWidth
                        variant='contained'
                        color='primary'
                        type='submit'
                    >
                        Подписаться
                    </Button>
                </Stack>
                <FormControlLabel
                    required
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                            sx={{
                                color: 'white',
                                '&.Mui-checked': {
                                    color: '#1976d2',
                                },
                            }}
                        />
                    }
                    label="Я согласен с условиями"
                    className='w-fit'
                />
            </FormControl>
        </form>
    );
}

export {SubscribeFormFooter};
export default SubscribeFormFooter;
