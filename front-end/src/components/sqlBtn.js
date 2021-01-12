import React from 'react';
import { createUser, createNewSale } from '../services/fetch';

const gerarDados = () => {
  const admin = {
    name: 'Tryber Admin', email: 'tryber@trybe.com.br', password: '123456', role: 'administrator',
  };
  const testuser = {
    name: 'testuser', email: 'user@test.com', password: 'test123', role: 'client',
  };
  const user1 = {
    name: 'virginia menezes duca', email: 'user1@gmail.com', password: '123456', role: 'client',
  };
  const user2 = {
    name: 'Userdois userdois userdois', email: 'user2@gmail.com', password: '123456', role: 'client',
  };

  createUser(
    admin.name,
    admin.email,
    admin.password,
    admin.role,
  ).then((response) => console.log(response));
  createUser(
    testuser.name,
    testuser.email,
    testuser.password,
    testuser.role,
  ).then((response) => console.log(response));
  createUser(
    user1.name,
    user1.email,
    user1.password,
    user1.role,
  ).then((response) => console.log(response));
  createUser(
    user2.name,
    user2.email,
    user2.password,
    user2.role,
  ).then((response) => console.log(response));

  const vendas = [
    {
      email: user1.email,
      totalPrice: 29.1,
      address: 'Rua User1',
      addressNumber: 1,
      saleDate: '10/01/2020',
      products: [
        { product_id: 1, quantity: 3 },
        { product_id: 2, quantity: 3 },
      ],
    },
    {
      email: user1.email,
      totalPrice: 33.5,
      address: 'Rua User1',
      addressNumber: 1,
      saleDate: '10/01/2020',
      products: [
        { product_id: 1, quantity: 5 },
        { product_id: 2, quantity: 3 },
      ],
    },
    {
      email: user2.email,
      totalPrice: 12.19,
      address: 'Rua User2',
      addressNumber: 2,
      saleDate: '09/01/2020',
      products: [
        { product_id: 1, quantity: 1 },
        { product_id: 2, quantity: 1 },
        { product_id: 3, quantity: 1 },
      ],
    },
  ];

  vendas.forEach((venda) => {
    createNewSale(
      venda.email,
      venda.totalPrice,
      venda.address,
      venda.addressNumber,
      venda.saleDate,
      venda.products,
    ).then((response) => console.log(response));
  });
};

export default function SqlBtn() {
  return (
    <div>
      <button type="button" onClick={ () => gerarDados() }> Gerar dados</button>
    </div>
  );
}
