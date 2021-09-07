# joyfully-cooked
Delicious foods with a sprinkle of joy

## Shoutouts
Delicious images brought to you by [Kenney](https://www.kenney.nl/)'s [Food Kit](https://www.kenney.nl/assets/food-kit)

## Usage
Want to use the website and see all of its features?
Learn more below.

### Disclaimer
"Joyfully Cooked" is a fake restaurant, with a mock website.

### Menu Page
The menu page is accessed via the /menu route, and can be accessed by anyone without signing in.
It is fully functional with a search bar to search for items, along with the ability to view and order items.

### Order Page
The order page is accessed via the /order route, and can be accessed by anyone without signing in.
It contains your order, payment details, and (if you are signed in) your favorite orders.
Your order is saved to localStorage and will persist across browser sessions.
Purchasing an order sends you to a thank you page, but does nothing else.

### Customer Account
In order to access favorite orders, you must "sign in" or "sign up" on the /signin or /signup routes.
Sending a password reset email will only trigger a success snackbar.
Data entered into the website is not stored.
Your fake authentication is revoked when reloading the page, but not when clicking on links in the website.
To remove your fake authentication, you have to "sign out".

### Account Page
The account page is meant for account related information, such as changing a password.
Sending a password reset email will only trigger a success snackbar.

### Employee Account
To access the list of customer orders, you must be signed in as an employee.
In the browser console, type the run the following commands:
```javascript
$nuxt.$store.commit('setUserId', '1');
$nuxt.$store.commit('setUserRole', 'employee');
```

### Orders
The orders page would show all of the customer's orders.
However, it just shows a default order to demonstrate the features and UI.
Each order can be viewed and completed, with the oldest order at the top for cook convenience.
Completing an order removes it and shows a snackbar.

## Thanks
Thank you for checking out my restaurant website idea!
