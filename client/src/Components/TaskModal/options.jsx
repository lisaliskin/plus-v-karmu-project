import React from 'react';

export default function Optionss({ el }) {
  // const { categories } = useSelector((state) => state);

  return (
    <option value={`${el.name}`}>
      {el.name}
    </option>
  );
}
