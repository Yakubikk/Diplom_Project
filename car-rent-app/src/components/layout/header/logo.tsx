import {Stack, Typography} from "@mui/material";
import {Icon24Hours} from "@tabler/icons-react";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href='/' className='group w-fit'>
            <Stack direction='row' spacing={2} alignItems='center'>
                <Icon24Hours width={48} height={48} className='group-hover:animate-spin' />
                <Typography variant='h4'>
                    Логотип
                </Typography>
            </Stack>
        </Link>
    );
}

export { Logo };
export default Logo;
