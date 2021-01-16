export default (pathname) => ({
  '/profile': 'Meu perfil',
  '/products': 'TryBeer',
  '/checkout': 'Finalizar Pedido',
  '/orders': 'Meus Pedidos',
  [`/orders/${pathname.split('/').slice(-1)}`]: 'Detalhes de pedido',
}[pathname]);
