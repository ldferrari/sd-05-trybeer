import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ClientContext from '../../context/client/ClientContext';

const Products = () => {
  const { products, isLoading } = useContext(ClientContext);

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div>
      <div>
        {products.map((product, index) => (
          <div key={ product.id }>
            <img 
              data-testid={ `${index}-product-img` }
              src={ product.urlImage }
              alt="foto_produto" 
            />
            {/* <img 
              data-testid="0-product-img"
              alt="imagem_produto"
            /> */}
            <div data-testid={ `${index}-product-name` }>
            {/* <div data-testid="0-product-name"> */}
             { product.name }
            </div>
            <div data-testid={ `${index}-product-price` }>
              R$ { product.price }               
            </div>
            <div>
              <button 
                type="button"
                data-testid={ `${index}-product-minus` }
                // onClick={ () => diminuir unidade e remover do carrinho }
              >
                -
              </button>
              <div data-testid={ `${index}-product-qtd` }>
                Quantidade
              </div>
              <button 
                data-testid={ `${index}-product-plus` }
                type="button"
                // onClick={ () => aumentar unidade e adicionar ao carrinho }
              >
                +
              </button>
            </div>
            <button
              type="button"
              data-testid="checkout-bottom-btn">
              <Link to="/checkout">
                Ver carrinho // valor data-testid="checkout-bottom-btn-value"
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
