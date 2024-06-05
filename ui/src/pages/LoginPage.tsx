import { useState } from 'react';
import { Login, QrCode } from '@mui/icons-material';
import { Box, Button, Container, Paper, Tab, Tabs, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

enum LoginTypeTab {
    Form = 0,
    QR = 1,
}

interface ILoginFormInputs {
    email: string;
    password: string;
}

const loginFormDefaultValues: ILoginFormInputs = {
    email: '',
    password: '',
};

const LoginQR = () => {
    return <Box>In-development...</Box>;
};

const LoginForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ILoginFormInputs>({
        defaultValues: loginFormDefaultValues,
    });

    const handleOnSubmit = () => {};

    return (
        <Box
            component='form'
            sx={{ display: 'flex', flexDirection: 'column', rowGap: 1 }}
            onSubmit={handleSubmit(handleOnSubmit)}
        >
            <Controller
                name='email'
                control={control}
                rules={{ required: 'This field is required' }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label='Email'
                        id='email'
                        size='small'
                        fullWidth
                        type='email'
                    />
                )}
            />

            <TextField label='Password' id='password' size='small' fullWidth type='password' />
            <Button variant='contained' type='submit'>
                Access
            </Button>
        </Box>
    );
};

const LoginPage = () => {
    const [selectedTab, setSelectedTab] = useState<LoginTypeTab>(LoginTypeTab.Form);

    const handleSetSelectedTab = (_: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <Container maxWidth='sm' sx={{ mt: 12 }}>
            <Paper elevation={6} sx={{ p: 1 }}>
                {/* Tab switch */}
                <Tabs centered value={selectedTab} onChange={handleSetSelectedTab}>
                    <Tab icon={<Login />} label='Form' />
                    <Tab icon={<QrCode />} label='QR' />
                </Tabs>

                {/* Login type tabs */}
                <Box mt={1}>{selectedTab === LoginTypeTab.Form ? <LoginForm /> : <LoginQR />}</Box>
            </Paper>
        </Container>
    );
};

export { LoginPage };
