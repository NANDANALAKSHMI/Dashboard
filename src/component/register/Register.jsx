import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from 'notistack';
import { AuthService } from "../login/AuthServices";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            setTimeout(() => {
                setErrors({});
            }, 1000);
            return;
        }

        try {
            const res = await AuthService.adminRegister({ email, password });

            if (res.status >= 200 && res.status < 300) {
                enqueueSnackbar("Registration successful!", {
                    variant: "success",
                    autoHideDuration: 2000,
                    anchorOrigin: { vertical: "top", horizontal: "right" },
                });
                console.log("Navigating to login");
                navigate("/login");
            }
        } catch (error) {
            console.error("Error:", error.response?.data);
            enqueueSnackbar(
                error.response?.data?.message || "An error occurred during registration.",
                {
                    variant: "error",
                    autoHideDuration: 3000,
                    anchorOrigin: { vertical: "top", horizontal: "right" },
                }
            );
        }

    };

    const validate = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = "Email is required";
        } else {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                newErrors.email = "Invalid email address";
            }
        }
        if (!password) newErrors.password = "Password is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen font-kanit">
            <div className="flex items-center justify-center mb-6">
                <h1 className="text-3xl font-bold tracking-widest text-[#0D47A1] uppercase">Dashboard</h1>
            </div>
            <div className="w-[400px]">
                <h1 className="py-4 text-3xl font-normal text-center">Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <TextField
                            label="Enter Email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            fullWidth
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </div>
                    <div className="mb-5">
                        <TextField
                            autoComplete="off"
                            label="Enter Password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                            fullWidth
                            error={!!errors.password}
                            helperText={errors.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div
                        className="mb-4 text-end text-[primary] underline cursor-pointer"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white rounded-md hover:opacity-90"
                        style={{ backgroundColor: "#0D47A1" }}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;