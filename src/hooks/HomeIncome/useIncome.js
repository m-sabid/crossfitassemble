import { useEffect, useState } from "react";
import AuthUser from "../AuthUser/AuthUser";

const useIncome = () => {
    const { token } = AuthUser()
    const [income, setIncome] = useState([]);

    useEffect(() => {
        fetch(`http://crossfitassemble.xyz/api/income`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
            .then(data => setIncome(data.data))
    }, [token]);

    return { income }
};

export default useIncome;