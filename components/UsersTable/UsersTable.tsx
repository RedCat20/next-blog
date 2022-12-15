import styles from './UsersTable.module.scss';
import {FC} from "react";
import Link from "next/link";
import {IUser} from "../../types/users";

interface Props {
    users: IUser[];
}

const UsersTable:FC<Props> = ({users}) => {
    return (
        <>

            <div className={styles.header}>
                <div>Name</div>
                <div>Email</div>
            </div>

            {Array.isArray(users) && users.map((user: IUser) => (
                <Link key={user.id} href={`/users/${user.id}`}>
                    <div className={styles.row} >
                        <div>{user.name}</div>
                        <div style={{  }}>{user.email}</div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default UsersTable;