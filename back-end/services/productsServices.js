const model = require('../models/productsModel.js');

const getAllProducts = async () => {
	const allProducts = await model.getAllProducts();

	if (!allProducts) throw { err: { code: 404, message: 'Not found' } };

	console.log(allProducts);
	return allProducts;
};

module.exports = {
	getAllProducts,
};
