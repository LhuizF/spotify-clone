import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { AiOutlinePoweroff } from 'react-icons/ai';

import UserTopMusic from '../../components/UserTopMusic';
import { NewUser } from '../../store/User/actions';
import { ResetToken } from '../../store/Auth/actions';
import axios from '../../service/axios';
import { HeaderContainer } from './styled';

export default function Home() {
    const history = useHistory();
    const dispatch = useDispatch();

    const { access_token } = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    if (!access_token) {
        history.push('/');
    }

    useEffect(() => {
        async function getData() {
            const { data } = await axios.get('/me', {
                headers: { Authorization: `Bearer ${access_token}` }
            });

            dispatch(NewUser(data));
        }

        getData();
    }, [access_token, dispatch]);

    return (
        <HeaderContainer>
            <button
                type="button"
                onClick={() => {
                    dispatch(ResetToken());
                }}
            >
                logout
                <AiOutlinePoweroff size={22} color="#d03434" />
            </button>
            <div className="profile-container">
                <img src={user.profilePicture} alt="" />
                <h3>{user.login}</h3>
            </div>

            <main>
                <UserTopMusic />
            </main>
        </HeaderContainer>
    );
}
