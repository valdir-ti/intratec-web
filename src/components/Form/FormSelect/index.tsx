import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import * as S from './styles';
import { useEffect, useState } from 'react';

interface Props {
    label: string;
    data: any[];
    selected: string;
    onChange: (event: SelectChangeEvent) => void;
}

export default function FormSelect({ label, data, selected, onChange }: Props) {

    const [dataFiltered, setDataFiltered] = useState<any[]>([]);

    useEffect(() => {
        const res = data.filter(item => item.id !== selected);
        setDataFiltered(res);
    }, [data, selected]);

    console.log('selected', selected, data)

    return (
        <S.FormInputSelectContainer>
        <FormControl fullWidth>
            <InputLabel id="select-label">{label}</InputLabel>
            <Select
                labelId="select-label"
                id="select"
                value={selected}
                label={label}
                onChange={onChange}
            >
                {data.map((item: any) => (
                    <S.MenuItemStyled key={item.id} value={item.id}>
                        {item.title}
                    </S.MenuItemStyled>
                ))}
            </Select>
        </FormControl>
        </S.FormInputSelectContainer>
    );
}
