import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import ClientMenu from '../../components/client/ClientMenu';
import { getProducts } from '../../services/fetch';
// import TrybeerContext from '../../context/TrybeerContext';
import '../../css/client/products.css';

function Products() {
  const [countProduct, setCountProduct] = useState(0);
  const [dataProducts, setDataProducts] = useState([]);
  // pbma: o count atualiza para todinhos
  const [isLogged, setIsLogged] = useState(true);
  // const { goCart, setGoCart } = useContext(TrybeerContext);
  // "Caso a pessoa atualize o browser, o carrinho deve ser mantido;"
  // vai ou no context ou em props pra Checkout usado como componente filho

  useEffect(() => {
    // getProducts().then((result) => console.log(result));
    getProducts().then((result) => setDataProducts(result));
    if (localStorage.getItem('user') === null) setIsLogged(false);
  }, []);

  // mock substituido por verdadeiro DB de produtos do back
  // const dbProducts = [
  //   {
  //     id: 1,
  //     name: 'Skol Lata 250ml',
  //     price: '2.20',
  //     url_image: 'http://localhost:3001/images/Skol Lata 350ml.jpg',
  //   },
  //   {
  //     id: 2,
  //     name: 'Heineken 600ml',
  //     price: '7.50',
  //     url_image: 'http://localhost:3001/images/Heineken 600ml.jpg',
  //   },
  // ];

  const oneMore = () => {
    setCountProduct(countProduct + 1);
    // const num = 0;
    // const countP = document.getElementById('price');
    // const countText = document.createTextNode(num + 1); // retorna 1111
    // countP.appendChild(countText);
  };
  const oneLess = (i) => {
    if (countProduct >0) setCountProduct(countProduct - 1)
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
      <ClientMenu title="TryBeer" />
      {/* {fetching && <p>Loading...</p>} */}
      {/* BACK - como ver que o fetch acabou? */}
      {dataProducts.map((product, index) => (
        <div className="eachCard">
          <p data-testid={`${index}-product-price`}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</p>
          {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat */}
          {/* <p data-testid={`${index}-product-price`}>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p> */}
          <img
            data-testid={`${index}-product-img`}
            src={`http://localhost:3001/images/${product.name}.jpg`}
            alt=""
            />
          {/* FALTA: conectar a imagem com o images.tar.gz */}
          <p key={product.id} data-testid={`${index}-product-name`}>{product.name}</p>
          <div className="controlQty">
          <button key={product.id} data-testid={`${index}-product-minus`} onClick={() => oneLess()}>
            -
          </button>
          <p data-testid={`${index}-product-qtd`} id="price"></p>
          <button key={product.id} data-testid={`${index}-product-plus`} onClick={() => oneMore()}>
            +
          </button>
          </div>
        </div>
      ))}
      </div>
      <Link to="/checkout">
        <button data-testid="checkout-bottom-btn" onClick={() => createCart()}>
          Ver Carrinho
          <p data-testid="checkout-bottom-btn-value">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}</p>
        </button>
      </Link>
      {!isLogged && <Redirect to="/login" />}
    </section>
  );
}

export default Products;
