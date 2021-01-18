const model = require('../Models/checkoutModel');

const checkout = async (products, deliveryAddress, deliveryNumber, id) => {
  // const id = await userId.getById(email);
  // const { id } = loginController.token.findUser;
  // console.log('FindUser =>', loginController.token.findUser);
  // console.log('service', products, deliveryAddress, deliveryNumber, id);
  if (!products || !deliveryAddress || !deliveryNumber) {
    return {
      error: true,
      code: 'field_not_filled',
      message: 'Verifique se todos os campos foram preenchidos.',
      statusCode: 401,
    };
  }

  /* if (typeof quantity !== 'number') {
    return {
      error: true,
      code: 'Invalid_value',
      message: 'Informe um número para quantidade.',
      statusCode: 401,
    };
  } */

  if (typeof deliveryNumber !== 'number') {
    return {
      error: true,
      code: 'Invalid_value',
      message: 'Informe um número para o número do endereço.',
      statusCode: 401,
    };
  }
  const total = products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  // console.log(id);
  const sales = await model.createSale(id, total, deliveryAddress, deliveryNumber);
  // productLista--> precisa do id da venda
  const productList = products.map(
    (product) => model.createProductSale(sales.insertId, product.id, product.quantity),
  );
  // console.log(sales.insertId);
  const respostaLista = await Promise.all(productList);
  return {
    Produtos_adicionados: respostaLista.filter((e) => e.affectedRows).length,
    Total_Produtos: respostaLista.length,
  };
  // 'Total_Produtos':respostaLista.length-->
  // --> total de produtos enviados para serem acrescentados no banco
  // 'Produtos_adicionados':respostaLista.filter((e) => e.affectedRows).length -->
  // --> produtos que realmente foram acrescentados
};

module.exports = {
  checkout,
};
