enum LoginTypeTab {
    Form = 0,
    QR = 1,
}

const LoginTypeLabel = {
    [LoginTypeTab.Form]: 'Form',
    [LoginTypeTab.QR]: 'QR',
};

interface ILoginFormInputs {
    email: string;
    password: string;
}

const loginFormDefaultValues: ILoginFormInputs = {
    email: '',
    password: '',
};

export { LoginTypeLabel, LoginTypeTab, type ILoginFormInputs, loginFormDefaultValues };
