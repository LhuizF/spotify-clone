import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../service/axios';

export default function useApi(call, path, ...args) {
    const [data, setData] = useState({});
    const { access_token } = useSelector((state) => state.auth);
    const arg = args.toString().replace(',', '&');

    useEffect(() => {
        async function getData() {
            const response = await axios[call](path + '?' + arg, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            });

            setData(response.data);
        }

        getData();
    }, [access_token, arg, call, path]);

    return data;
}
