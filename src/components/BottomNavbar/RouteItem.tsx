'use client'

import styles from './index.module.css';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, SearchOutlined, ShoppingCart, ShoppingCartOutlined, CalendarMonth, CalendarMonthOutlined } from '@mui/icons-material';

type RouteType = 'browse' | 'schedule' | 'saved'

type RouteIconProps = {
    route: RouteType,
    isActive: boolean
}
const RouteIcon = ({ route, isActive }: RouteIconProps) => {
    if(route === 'browse')
        return (
            <>
                {isActive ? 
                    <Search htmlColor='#c9a461' />
                    :<SearchOutlined htmlColor='white' />
                }
            </>
        )
    if(route === 'schedule')
        return (
            <>
                {isActive ? 
                    <CalendarMonth htmlColor='#c9a461' />
                    :<CalendarMonthOutlined htmlColor='white' />
                }
            </>
        )
    return (
        <>
            {isActive ? 
                <ShoppingCart htmlColor='#c9a461' />
                :<ShoppingCartOutlined htmlColor='white' />
            }
        </>
    )
}

export default function RouteItem({ route }: { route: RouteType }) {
    const pathname = usePathname().toLowerCase().replaceAll(/[^a-z]+/g, "")
    const isActive = pathname === route;

    return (
        <Link href={`/${route}`}>
            <div className={styles.routeContainer}>
                <RouteIcon isActive={isActive} route={route} />
                <span style={{ color: `${isActive ? '#c9a461' : 'white'}` }}>{route}</span>
            </div>
        </Link>
    )
}