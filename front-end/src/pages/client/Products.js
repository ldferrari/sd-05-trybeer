import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import ClientMenu from '../../components/client/ClientMenu';
import { getProducts } from '../../services/fetch';
// import TrybeerContext from '../../context/TrybeerContext';
import '../../css/client/products.css';

function Products() {
  const [dataProducts, setDataProducts] = useState([]);
  // const [totalPrice, setTotalPrice] = useState();
  // pbma: o count atualiza para todinhos
  const [isLogged, setIsLogged] = useState(true);
  // const { goCart, setGoCart } = useContext(TrybeerContext);
  // "Caso a pessoa atualize o browser, o carrinho deve ser mantido;"
  // vai ou no context ou em props pra Checkout usado como componente filho

  useEffect(() => {
    getProducts().then((result) => setDataProducts(result));
    if (localStorage.getItem('user') === null) setIsLogged(false);
  }, []);

  // useEffect(() => {
  // }, [count])

  // let num = 0;
  // pbma: quando tem 3 num produto, o proximo começa a 4.

  // const oneMore = (i) => {
  //   // setTotalPrice(totalPrice+1*price)
  //   num += 1;
  //   // console.log(num);
  //   const countP = document.getElementById(`${i}-price`);
  //   countP.innerHTML=num;

  // };

  // const oneLess = (i) => {
  //   // setTotalPrice(totalPrice+1*price)
  //   num -= 1;
  //   // console.log(num);
  //   const countP = document.getElementById(`${i}-price`);
  //   if (num>=0) return countP.innerHTML=num;
  // };

  const createCart = () => {
    // setGoGart
  };

  const totalPrice = 3;
  // forçando, achar como calcular
  
  return (
    <section>
      <div className="productCards">
      <ClientMenu title="TryBeer" />
      {/* {fetching && <p>Loading...</p>} */}
      {/* BACK - como ver que o fetch acabou? */}
      {dataProducts.map((product, index) => {
        let num = 0;
        // tentei com forEach para colocar count e nem com return retornou renderizaçao
        return (
        <div className="eachCard">
            <p data-testid={`${index}-product-price`}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</p>
            <img
              data-testid={`${index}-product-img`}
              src={`http://localhost:3001/images/${product.name}.jpg`}
              alt=""
              width="100"
              height="60"
              />
            {/* FALTA: conectar a imagem com o images.tar.gz */}
            <p key={product.id} data-testid={`${index}-product-name`}>{product.name}</p>
            <div className="controlQty">
            <button key={product.id} data-testid={`${index}-product-minus`}
            // onClick={() => oneLess(index)}
            onClick={() => num-=1}
            >
              -
            </button>
            <p data-testid={`${index}-product-qtd`} id={`${index}-price`}>{num}</p>
            <button key={product.id} data-testid={`${index}-product-plus`}
            // onClick={() => oneMore(index)}
            onClick={() => console.log(num+=1)}
            >
              +
            </button>
            </div>
          </div>
        )
        })
      }
      </div>
      <Link to="/checkout">
        <button data-testid="checkout-bottom-btn" onClick={ () => createCart() }>
          Ver Carrinho
          <p data-testid="checkout-bottom-btn-value">{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}</p>
        </button>
      </Link>
      {!isLogged && <Redirect to="/login" />}
    </section>
  );
}

export default Products;

// {!isFetching && <section className="list-orders">
//         {ordersAdmin && ordersAdmin.map((result, index) => <CardOrdersAdmin orders={result} index={index} key={index} />)}
//       </section>}

//  fonte sobre currency https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat

// backlog 08.01 noite
// - achar logica para contagens individuais
// - a partir desta logica, conseguir o totalPrice
// - imagens do .gz
// - sincronizar com card da tela Checkout (carrinho)
