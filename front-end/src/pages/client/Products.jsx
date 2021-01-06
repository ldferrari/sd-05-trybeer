import React, { useContext } from 'react';
import ClientContext from '../../context/client/ClientContext';

const Products = () => {
  const { products, isLoading } = useContext(ClientContext);

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div>
      {/* <div>
        {products.map((product, index) => (
          <div key={ product.id }>
            <img data-testid={ `${index}-product-img` } >
              Foto
            </img>
          </div>
        ))}
      </div> */}
      
      {/* <div data-testid={ `${index}-product-name` }>
        Nome Produto
      </div> */}
      <div data-testid="0-product-price">
        Preço
      </div>
      <div>
        Quantidade
      </div>
      <div>
        <button data-testid="0-product-plus">
          +
        </button>
        <div data-testid="0-product-qtd">
          Quantidade
        </div>
        <button data-testid="0-product-minus">
          -
        </button>
      </div>
      <button data-testid="checkout-bottom-btn">
        Ver carrinho
      </button>
    </div>
  );
};

export default Products;
