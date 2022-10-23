import { useQuery } from 'react-query';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import Loading from '../../../hooks/Loading/Loading';

export default function Package() {

    const { token } = AuthUser()

    const { data: packages, isLoading, refetch } = useQuery('users', () =>
        fetch(`http://crossfitassemble.xyz/api/package_order`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())

    )
    if (isLoading) {
        return <Loading />
    }
    return{
        packages
    }
}