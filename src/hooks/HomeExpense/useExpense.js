import { useEffect } from "react";
import { useState } from "react";
import AuthUser from "../AuthUser/AuthUser";

const useExpense = () => {
    const { token } = AuthUser()
    const [expense, setExpense] = useState([]);

    useEffect(() => {
        fetch(`http://crossfitassemble.xyz/api/expense`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
            .then(data => setExpense(data.data))
    }, [token]);

    return { expense }
};

export default useExpense;