import { notification } from 'antd';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const openNotificationWithIcon = (props) => {
    notification[props.type]({
        message: props.title,
        description: props.description,
        placement:'bottomLeft',
    });
};
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Snackbars(props) {
    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            {/* <Button variant="outlined" onClick={handleClick}>
                Open success snackbar
            </Button> */}
            {props.children}
            <Snackbar open={props.open} autoHideDuration={8000} onClose={props.onClose}>
                <Alert onClose={props.onClose} severity={props.type} sx={{ width: '100%' }}>
                    {props.msg}
                </Alert>
            </Snackbar>
        </Stack>
    );
}

export  {openNotificationWithIcon,Snackbars};