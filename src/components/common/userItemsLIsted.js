import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../state/utils/axiosWithAuth';
import ItemCard from './ItemCard';

const initialEditItem = {
  name: '',
  description: '',
  price: '',
  market: '',
  product: '',
};

const UserItemsListed = ({ updateItems, userItemsList }) => {
  const [editing, setEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(initialEditItem);

  const editItem = item => {
    setEditing(true);
    setItemToEdit(item);
  };

  const saveEdited = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/item/${itemToEdit.id}`, itemToEdit)
      .then(res => {
        updateItems([
          ...userItemsList.map(item => {
            if (item.id === itemToEdit.id) {
              return itemToEdit;
            } else {
              return item;
            }
          }),
        ]);
        setEditing(false);
      })
      .catch(err => {
        console.error('Error in Edit');
      });
  };

  const deleteItem = item => {
    axiosWithAuth()
      .delete(`/item/${item.id}`)
      .then(res => {
        updateItems(userItemsList.filter(item => item.id !== res.data));
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>User Items here!</h1>

      {userItemsList.map(item => {
        return (
          <>
            <ItemCard
              key={item.id}
              item={item}
              onClick={() => editItem(item)}
            />
            <span>
              <span
                onclick={e => {
                  e.stopPropagation();
                  deleteItem(item);
                }}
              >
                X
              </span>
            </span>
          </>
        );
      })}

      <form onSubmit={saveEdited}>
        <label>
          Name:&nbsp;
          <input
            name="name"
            placeholder="REQUIRED"
            onChange={e =>
              setItemToEdit({ ...itemToEdit, name: e.target.value })
            }
            value={itemToEdit.name}
          />
        </label>
        <label>
          Description:&nbsp;
          <input
            onChange={e =>
              setItemToEdit({ ...itemToEdit, description: e.target.value })
            }
            value={itemToEdit.description}
          />
        </label>
        <label>
          Price:&nbsp;
          <input
            name="price"
            placeholder="REQUIRED"
            onChange={e =>
              setItemToEdit({ ...itemToEdit, price: e.target.value })
            }
            value={itemToEdit.price}
          />
        </label>
        <label>
          Market:&nbsp;
          <select
            name="market"
            onChange={e =>
              setItemToEdit({ ...itemToEdit, market: e.target.value })
            }
            value={itemToEdit.market}
          >
            <option value="">- REQUIRED -</option>
          </select>
        </label>
        <label>
          Product:&nbsp;
          <select
            name="product"
            onChange={e =>
              setItemToEdit({ ...itemToEdit, product: e.target.value })
            }
            value={itemToEdit.product}
          >
            <option value="">- REQUIRED -</option>
          </select>
        </label>
      </form>

      <button type="submit">Save Item</button>

      <button onClick={() => setEditing(false)}>Cancel</button>
    </>
  );
};

export default UserItemsListed;
