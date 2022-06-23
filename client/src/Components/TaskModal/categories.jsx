import React from 'react';

export default function Categories({ el }) {
  // const { categories } = useSelector((state) => state);

  return (
    <option id={el.id} value={`${el.name}`}>
      {el.name}
    </option>
  );
}
