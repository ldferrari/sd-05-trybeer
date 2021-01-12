export default (pathname) => ({
  '/profile': 'Meu perfil',
  '/products': 'Trybeer',
  '/checkout': 'Finalizar Pedido',
  '/orders': 'Meus Pedidos',
}[pathname]);
