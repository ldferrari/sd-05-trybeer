export default (pathname) => ({
  '/profile': 'Meu perfil',
  '/products': 'TryBeer',
  '/checkout': 'Finalizar Pedido',
  '/orders': 'Meus Pedidos',
}[pathname]);
