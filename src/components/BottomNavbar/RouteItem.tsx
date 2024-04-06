'use client'

import styles from './index.module.css';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, SearchOutlined, ShoppingCart, ShoppingCartOutlined, CalendarMonth, CalendarMonthOutlined } from '@mui/icons-material';

type RouteType = 'browse' | 'schedule' | 'saved'

type RouteIconProps = {
    route: RouteType,
    isActive: boolean,
    size: number
}
const RouteIcon = ({ route, isActive, size }: RouteIconProps) => {
    if(route === 'browse')
        return (
            <>
                {isActive ? 
                    <Search htmlColor='#c9a461' sx={{ fontSize: `${size}px` }} />
                    :<SearchOutlined htmlColor='white' sx={{ fontSize: `${size}px` }} />
                }
            </>
        )
    if(route === 'schedule')
        return (
            <>
                {isActive ? 
                    <CalendarMonth htmlColor='#c9a461' sx={{ fontSize: `${size}px` }} />
                    :<CalendarMonthOutlined htmlColor='white' sx={{ fontSize: `${size}px` }} />
                }
            </>
        )
    return (
        <>
            {isActive ? 
                <ShoppingCart htmlColor='#c9a461' sx={{ fontSize: `${size}px` }} />
                :<ShoppingCartOutlined htmlColor='white' sx={{ fontSize: `${size}px` }} />
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
                <RouteIcon isActive={isActive} route={route} size={22} />
                <span style={{ color: `${isActive ? '#c9a461' : 'white'}` }}>{route}</span>
            </div>
        </Link>
    )
}