import React, {useState} from "react";
import {Button, Checkbox, FormControl, FormControlLabel, Stack, TextField} from "@mui/material";

const SubscribeForm: React.FC = () => {
    const [value, setValue] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(value);
    };

    return (
        <form autoComplete='off' onSubmit={onSubmit}>
            <FormControl fullWidth>
                <Stack direction='row' width='100%' spacing={2} justifyContent='space-between'>
                    <TextField
                        required
                        className='w-2/3'
                        type='email'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        variant='outlined'
                        label='Ваш email'
                    />
                    <Button
                        className='w-1/3'
                        variant='contained'
                        color='primary'
                        type='submit'
                    >
                        Подписаться
                    </Button>
                </Stack>
                <FormControlLabel
                    required
                    control={<Checkbox />}
                    label="Я согласен с условиями"
                    className='w-fit'
                />
            </FormControl>
        </form>
    );
}

export {SubscribeForm};
export default SubscribeForm;
