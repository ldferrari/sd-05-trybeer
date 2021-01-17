const magicNumber = -1;
export default (pathname) => ({
  '/profile': 'Meu perfil',
  '/products': 'TryBeer',
  '/checkout': 'Finalizar Pedido',
  '/orders': 'Meus Pedidos',
  [`/orders/${pathname.split('/').slice(magicNumber)}`]: 'Detalhes de pedido',
}[pathname]);
