import React, {ChangeEvent, FC, useState} from 'react';
import {TextField} from "@mui/material";

interface Props {
    searchStr?: string;
    onChangeSearchStr: (newValue: string) => void;
    searchLabel?: string;
    marginBottom?: number;
}

const Search:FC<Props> = ({ searchStr= '',
                            onChangeSearchStr,
                            searchLabel = '',
                            marginBottom}) => {

    const [value, setValue] = useState<string>('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value)
    }

    return (
        <TextField color="success" type="search" value={value} onChange={onChange} label={searchLabel} variant="standard" fullWidth sx={{mb: `${marginBottom ?? 0}px`}}/>
    );
};

export default Search;