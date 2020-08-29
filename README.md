# Educational-Store-API: A Description

Some communities are fortunate to have adequate resources in their public schools, but that is not the case for many people, especially now. On average, teachers spend over $450 on classroom supplies to make up the difference and go the extra mile for their students. Our team's goal with the Educational Store app is to make it easier for community members to help schools in need. With Educational Store, customers can purchase school supplies that are donated on their behalf to a school in need. Our hope is that we can help to alleviate some the issue of low school supplies for the students, teachers, and schools in need.

## Important Links

- [GitHub API Repo](https://github.com/worldwide-coders/educational-store-api)
- [Deployed API](https://thawing-basin-32932.herokuapp.com)
- [GitHub Repo](https://github.com/worldwide-coders/educational-store)
- [Deployed Client](https://sebastian-chang.github.io/block-share)

## Planning Story

- Create the API models and routes.
- Test API connections.
- Build basic front end components.
- Test front end to back end connection.
- Integrate Stripe API to handle credit a
- Create styling for front end objects.
- Test, debug, troubleshoot and debug.
- Reach for stretch goals
- [Gantt Chart](https://docs.google.com/spreadsheets/d/1xvZ6CXHSKE_Q4nan2bH51XatrNw7pyXpcjKPrnNClT8/edit?usp=sharing)

## API End Points

| Verb   | URI Pattern            | Controller#Action           | Token Required  |
|--------|------------------------|-----------------------------|-----------------|
| POST   | `/sign-up`              | `users#signup`             | `false`         |
| POST   | `/sign-in`              | `users#signin`             | `false`         |
| DELETE | `/sign-out`             | `users#signout`            | `true`          |
| PATCH  | `/change-password`      | `users#changepw`           | `true`          |
| PATCH  | `/update-user`          | `users#updateuser`         | `true`          |
| GET    | `/items`                | `items#index`              | `true`          |
| GET    | `/items/:id`            | `items#show`               | `true`          |
| POST   | `/items`                | `items#create`             | `true`          |
| PATCH  | `/carts/:id`            | `carts#update`             | `true`          |
| DELETE | `/carts/:id`            | `carts#delete`             | `true`          |
| GET    | `/carts`                | `carts#index`              | `true`          |
| GET    | `/carts/:id`            | `carts#show`               | `true`          |
| POST   | `/carts`                | `carts#create`             | `true`          |
| PATCH  | `/carts/:id`            | `carts#update`             | `true`          |
| DELETE | `/carts/:id`            | `carts#delete`             | `true`          |
| POST   | `/create-payment-intent`| `payment-intent#create`    | `true`          |
| GET    | `/secret`               | `secret#show`              | `true`          |
| POST   | `/pay`                  | `pay#create`               | `true`          |

All data returned from API actions is formatted as JSON.

### Technologies Used

- React
- Javascript
- HTML
- CSS
- Bootstrap
- Express
- Stripe
- Mongoose
- MongoDB

### Unsolved Problems

- Ability to search for an item by name
- Better styling for multiple media queries
- Would like to have additional resources to share, such as books, movies, tools etc.
- Would like to add thank comments to each resource.
- Would like to actually send a request to the owner of the resource, so that a person can borrow said item.

## Images

#### ERD:

![wireframe](https://github.com/sebastian-chang/block-share/blob/master/public/images/Block-Share-ERD.jpg)

---
