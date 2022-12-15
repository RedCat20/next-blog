import {Typography} from '@mui/material';
import {FC} from "react";
import Title from "../../components/Title/Title";
import {IUser} from "../../types/users";

interface Props {
    user: IUser;
}

const User:FC<Props> = ({user}) => {
    const {name, email, address} = user || {};
    const {street, suite, city, zipcode} = address || {};

    if (!user) {
        return <Title align={'center'} tag="h4">No user with this id</Title>
    }

    else {
        return (
            <>
                <Title align={'center'} tag="h4">User info</Title>
                <Typography sx={{mb: '15px', fontWeight: 'bold'}}>{name}</Typography>
                <div style={{marginBottom: '10px'}}>{email}</div>
                <div>{`${street}, ${suite}, ${city}, ${zipcode}`}</div>
            </>
        )
    }
}

export default User;