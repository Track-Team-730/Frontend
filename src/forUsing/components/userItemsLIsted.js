import React from 'react';
import axiosWithAuth from '../../state/utils/axiosWithAuth';

const UserItemsListed = () => {
  const editItem = () => {};

  const saveEdited = () => {};

  const deleteItem = () => {
    axiosWithAuth()
      .delete('')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return (
    <>
      <h1>User Items here!</h1>
      <button>Edit Item</button>
      <button>Delete Item</button>
      <button>Cancel</button>
    </>
  );
};

export default UserItemsListed;
