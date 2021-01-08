import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
// import ClientMenu from '../../components/client/ClientMenu';
import TrybeerContext from '../../context/TrybeerContext';
import '../../css/client/products.css';

function Products() {
  const [countProduct, setCountProduct] = useState(0);
  // pbma: o count atualiza para todinhos
  const [isLogged, setIsLogged] = useState(true);
  const { goCart, setGoCart } = useContext(TrybeerContext);
  // Tem que ser no context: "Caso a pessoa atualize o browser,
  // o carrinho deve ser mantido;"

  useEffect(() => {
    if (localStorage.getItem('user') === null) setIsLogged(false);
  }, []);

  // BACK - substituir esse mock por verdadeiro DB de produtos
  const dbProducts = [
    {
      id: 1,
      name: 'Skol Lata 250ml',
      price: '2.20',
      url_image: 'http://localhost:3001/images/Skol Lata 350ml.jpg',
    },
    {
      id: 2,
      name: 'Heineken 600ml',
      price: '7.50',
      url_image: 'http://localhost:3001/images/Heineken 600ml.jpg',
    },
  ];

  const oneMore = () => {
    setCountProduct(countProduct + 1);
  };
  const oneLess = () => {
    if (countProduct > 0) setCountProduct(countProduct - 1);
  };
  // FALTA - isso modifica todos ao mesmo tempo

  const createCart = () => {
    // setGoGart
  };

  const totalPrice = 3;
  // achar como calcular
  
  return (
    <section>
      <div className="productCards">
      {/* <ClientMenu title="TryBeer" /> */}
      {/* {fetching && <p>Loading...</p>} */}
      {/* BACK - como ver que o fetch acabou? */}
      {dbProducts.map((product, index) => (
        <div className="eachCard">
          <p data-testid={`${index}-product-price`}>R$ {product.price}</p>
          {/* FALTA: O preço unitário deve seguir o padrão R$ 00,00; */}
          <img
            data-testid={`${index}-product-img`}
            src={`http://localhost:3001/images/${product.name}.jpg`}
            alt=""
            />
          {/* FALTA: conectar a imagem com o images.tar.gz */}
          <p data-testid={`${index}-product-name`}>{product.name}</p>
          <div className="controlQty">
          <button key="" data-testid={`${index}-product-plus`} onClick={() => oneMore()}>
            +
          </button>
          <p data-testid="0-product-qtd">{countProduct}</p>
          <button key="" data-testid={`${index}-product-minus`} onClick={() => oneLess()}>
            -
          </button>
          </div>
        </div>
      ))}
      </div>
      <Link to="/checkout">
        <button data-testid="checkout-bottom-btn" onClick={() => createCart()}>
          Ver Carrinho
          <p data-testid="checkout-bottom-btn-value">R$ {totalPrice}</p>
        </button>
      </Link>
      {!isLogged && <Redirect to="/login" />}
      {/* Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela Login. */}
    </section>
  );
}

export default Products;
