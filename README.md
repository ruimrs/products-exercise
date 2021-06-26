# Products exercise
Small CRUD project for products.

## Products List

Created the component products-list that lists all the active products, and have the action "Add new product" and the action "Delete".

## Create Product

This component is the form with the fields 'name' and 'price', you can only create if you fill all the fields since they have a Validator.required.
Once you create the product a confirmation message appears in the screen.

## Delete Product

This component is only a static information text for the user. If you choose to delete de product a confirmation message appears.

Both Create and Delete Product components are used in a modal pop up. They are called depending on the action selected by the user.

## Assets

Added the 'plus' icon and the 'delete' icon to the assets of the project. Changed the color of the 'delete' icon to warning red.

## Fonts

Added 'Roboto-Regular' and 'Roboto-Bold' to the fonts, and declared them as variables in _variables.scss_ so we can use them whenever we want, only need to import this file in the component scss.


## Important Notes

Create and Delete components are called as a content to the modal that I created in Products List component.

## ENDPOINT CALLS

The endpoint calls must be done in the _products-service.service.ts_ file.
