'use client';

import { useForm } from "react-hook-form";
import {authApi} from "@/services/api";
import {Button, TextField} from "@mui/material";

type FormData = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            const response = await authApi.post('http://localhost:5174/login', data);
            document.cookie = `accessToken=${response.data.accessToken}; path=/; max-age=${response.data.expiresIn}; Secure; SameSite=Strict`;
            document.cookie = `refreshToken=${response.data.refreshToken}; path=/; max-age=604800; Secure; SameSite=Strict`;

            window.location.href = '/';
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-4'
            >
                <TextField
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    })}
                    type="email"
                    placeholder="Email"
                />
                {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}

                <TextField
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        }
                    })}
                    type="password"
                    placeholder="Password"
                />
                {errors.password && (
                    <span className="text-red-500 text-sm">{errors.password.message}</span>
                )}

                <Button
                    type='submit'
                    variant="outlined"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Logging in..." : "Login"}
                </Button>
            </form>
        </div>
    );
};

export { LoginForm };
export default LoginForm;
