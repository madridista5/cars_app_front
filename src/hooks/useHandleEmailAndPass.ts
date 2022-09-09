import {useState} from "react";

interface HandleEmailAndPass {
    email: string;
    password: string;
    isEmailCorrect: boolean,
    isPasswordCorrect: boolean,
}

export const useHandleEmailAndPass = (initial: HandleEmailAndPass): [HandleEmailAndPass, (email?: string, password?: string, isEmailCorrect?: boolean, isPasswordCorrect?: boolean) => void] => {

    const [handleEmailAndPass, setHandleEmailAndPass] = useState<HandleEmailAndPass>(initial);

    const setState = (newEmail?: string, newPassword?: string, newIsEmailCorrect?: boolean, newIsPasswordCorrect?: boolean) => {
        setHandleEmailAndPass(prevState => {
            return {
                email: newEmail ? newEmail : prevState.email,
                password: newPassword ? newPassword : prevState.password,
                isEmailCorrect: typeof newIsEmailCorrect === 'boolean' ? newIsEmailCorrect : prevState.isEmailCorrect,
                isPasswordCorrect: typeof newIsPasswordCorrect === 'boolean' ? newIsPasswordCorrect : prevState.isPasswordCorrect,
            };
        });
    };

    return [handleEmailAndPass, setState];
}