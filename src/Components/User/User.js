import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Feed from '../Feed/Feed';
import NotFound from '../NotFound';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader></UserHeader>
      <Routes>
        <Route path="/" element={<Feed user={data.id}></Feed>}></Route>
        <Route path="postar" element={<UserPhotoPost></UserPhotoPost>}></Route>
        <Route path="estatisticas" element={<UserStats></UserStats>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </section>
  );
};

export default User;
