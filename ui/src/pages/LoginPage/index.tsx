// import { useState, SyntheticEvent } from 'react';
// import { Login, QrCode } from '@mui/icons-material';
// import { Box, Button, Container, Paper, Tab, Tabs, TextField } from '@mui/material';
// import { useForm, Controller } from 'react-hook-form';
// import { ILoginFormInputs, LoginTypeLabel, LoginTypeTab, loginFormDefaultValues } from './misc';

// const LoginQR = () => {
//     return <Box>In-development...</Box>;
// };

// const LoginForm = () => {
//     const {
//         handleSubmit,
//         control,
//         formState: { errors },
//     } = useForm<ILoginFormInputs>({
//         defaultValues: loginFormDefaultValues,
//     });

//     const handleOnSubmit = () => {
//         alert('Submitted..');
//     };

//     return (
//         <Box
//             component='form'
//             sx={{ display: 'flex', flexDirection: 'column', rowGap: 1 }}
//             onSubmit={handleSubmit(handleOnSubmit)}
//         >
//             <Controller
//                 name='email'
//                 control={control}
//                 rules={{ required: 'This field is required' }}
//                 render={({ field }) => (
//                     <TextField
//                         {...field}
//                         label={`Email ${
//                             errors.email?.message ? ' - ' + errors.email?.message : ''
//                         }`}
//                         id='email'
//                         size='small'
//                         fullWidth
//                         type='email'
//                         error={!!errors.email?.message}
//                     />
//                 )}
//             />
//             <Controller
//                 name='password'
//                 control={control}
//                 rules={{ required: 'This field is required' }}
//                 render={({ field }) => (
//                     <TextField
//                         {...field}
//                         label={`Password ${
//                             errors.password?.message ? ' - ' + errors.password?.message : ''
//                         }`}
//                         id='password'
//                         size='small'
//                         fullWidth
//                         type='password'
//                         error={!!errors.password?.message}
//                     />
//                 )}
//             />
//             <Button variant='contained' type='submit'>
//                 Access
//             </Button>
//         </Box>
//     );
// };

// const LoginPage = () => {
//     const [tab, setTab] = useState<LoginTypeTab>(LoginTypeTab.Form);

//     const handleSetTab = (_: SyntheticEvent, newValue: number) => setTab(newValue);

//     return (
//         <Container maxWidth='sm' sx={{ mt: 12 }}>
//             <Paper elevation={6} sx={{ p: 1 }}>
//                 <Tabs centered value={tab} onChange={handleSetTab}>
//                     <Tab icon={<Login />} label={LoginTypeLabel[LoginTypeTab.Form]} />
//                     <Tab icon={<QrCode />} label={LoginTypeLabel[LoginTypeTab.QR]} />
//                 </Tabs>
//                 <Box mt={1}>{tab === LoginTypeTab.Form ? <LoginForm /> : <LoginQR />}</Box>
//             </Paper>
//         </Container>
//     );
// };

// export { LoginPage };
