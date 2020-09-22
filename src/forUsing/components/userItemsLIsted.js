import React, { useState } from 'react';
import axiosWithAuth from '../../state/utils/axiosWithAuth';

const initialEditItem = {
  name: '',
  description: '',
  price: '',
  market: '',
  product: '',
};

const UserItemsListed = () => {
  const [editing, setEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(initialEditItem);

  const editItem = () => {
    setEditing(true);
    setItemToEdit();
  };

  const saveEdited = e => {
    e.preventDefault();
    axiosWithAuth()
      .put('/item/itemId', itemToEdit)
      .then(res => {})
      .catch(err => console.log(err));
  };

  const deleteItem = () => {
    axiosWithAuth()
      .delete('/item/itemId')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return (
    <>
      <h1>User Items here!</h1>

      <form onSubmit={saveEdited}>
        <label>
          Name:&nbsp;
          <input
            onChange={{}}
            value={e => setItemToEdit({ ...itemToEdit, name: e.target.value })}
          />
        </label>
        <label>
          Description:&nbsp;
          <input
            onChange={{}}
            value={e =>
              setItemToEdit({ ...itemToEdit, description: e.target.value })
            }
          />
        </label>
        <label>
          Price:&nbsp;
          <input
            onChange={{}}
            value={e => setItemToEdit({ ...itemToEdit, price: e.target.value })}
          />
        </label>
        <label>
          Market:&nbsp;
          <select
            onChange={{}}
            value={e =>
              setItemToEdit({ ...itemToEdit, market: e.target.value })
            }
          >
            <option value="">- select an option -</option>
          </select>
        </label>
        <label>
          Product:&nbsp;
          <select
            onChange={{}}
            value={e =>
              setItemToEdit({ ...itemToEdit, product: e.target.value })
            }
          >
            <option value="">- select an option -</option>
          </select>
        </label>
      </form>

      <button>Edit Item</button>
      <button>Save Item</button>
      <button>Delete Item</button>
      <button>Cancel</button>
    </>
  );
};

export default UserItemsListed;
