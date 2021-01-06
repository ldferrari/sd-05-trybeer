const connection = require('./connection.model');

const getProducts = () => connection()
  .then((db) => db.getTable('products')
    .select('id', 'name', 'price', 'url_image')
    .execute())
  .then((response) => response.fetchAll())
  .then((result) => result.map(([id, name, price, urlImage]) => ({
    id,
    name,
    price,
    urlImage,
  })))
  .catch((err) => err);

const getProductById = (id) => connection()
  .then((db) => db.getTable('products')
    .select('id', 'name', 'price', 'url_image')
    .where('id = :id')
    .bind('id', id)
    .execute())
  .then((response) => response.fetchOne())
  .then((result) => result)
  .catch((err) => err);

const addProduct = ({ id, name, price, url_image }) => connection().then((db) => db.getTable('products')
  .insert('id', 'name', 'price', 'url_image')
  .values(id, name, price, url_image)
  .execute());

const deleteRecipe = (id) => connection().then((db) => db.getTable('products')
  .delete()
  .where('id = :id')
  .bind('id', id)
  .execute());

module.exports = { getProducts, getProductById, addProduct, deleteRecipe };
