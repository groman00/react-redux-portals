export const addItem = timestamp => ({
  type: 'ADD_ITEM',
  timestamp,
});

export const removeItem = index => ({
  type: 'REMOVE_ITEM',
  index,
});

