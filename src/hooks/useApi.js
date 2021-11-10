import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../service/axios';
import { useHistory } from 'react-router';

export default function useApi(call, path, ...args) {
    const [response, setResponse] = useState(false); // resposta a ser retornada
    const { access_token } = useSelector((state) => state.auth); // token de acesso gerado no authorization
    const arg = args.toString().replace(',', '&'); // parametros da url
    const history = useHistory();

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios[call](path + '?' + arg, {
                    headers: {
                        Authorization: `Bearer ${access_token}`
                    }
                });

                setResponse(response.data);
            } catch (e) {
                console.log(e);
                history.push('/');
            }
        }

        getData();
    }, [access_token, arg, call, path, history]);

    return response;
}
