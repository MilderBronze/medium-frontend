import { Outlet } from 'react-router-dom'
import { Appbar } from '../components/Appbar'

export function Layout() {
    return (
        <>
            <Appbar />
            <Outlet />
        </>
    )
}