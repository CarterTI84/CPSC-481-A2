import { Favorite } from '@mui/icons-material'
import { IconButton } from '@mui/material'

type Props = {
    checked: boolean,
    onClick: () => void
}
export default function Heart({ checked, onClick }: Props) {

    return (
        <IconButton onClick={onClick}>
            <Favorite htmlColor={checked ? 'pink' : 'grey'} />
        </IconButton>
    )
}