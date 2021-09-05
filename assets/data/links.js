export default [
  {
    icon: 'utensils',
    text: 'Menu',
    to: '/menu',
  },
  {
    icon: 'shopping-bag',
    text: 'Order',
    to: '/order',
    isOrder: true,
  },
  {
    icon: 'user',
    text: 'Account',
    to: '/account',
    requiresAuthentication: true,
  },
  {
    icon: 'sign-out-alt',
    text: 'Sign Out',
    to: '/signout',
    requiresAuthentication: true,
  },
  {
    icon: 'sign-in-alt',
    text: 'Sign In',
    to: '/signin',
    requiresNoAuthentication: true,
  },
  {
    icon: 'user-plus',
    text: 'Sign Up',
    to: '/signup',
    requiresNoAuthentication: true,
  },
]
