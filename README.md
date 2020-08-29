# Educational-Store-API: A Description

Some communities are fortunate to have adequate resources in their public to educate their children, but that is not the case for many people. On average, teachers spend over $450 on classroom supplies to make up the difference and go the extra mile for their students. Our goal with Educational Store is to make it easier for the community to help schools in need. With Educational Store, customers can purchase school supplies and have it donated on their behalf to a school in need. Our hope is that we can help to alleviate some the issue of low school supplies for the students and teachers in need.

## Important Links

- [GitHub API Repo](https://github.com/sebastian-chang/block-share-api)
- [Deployed API]( https://shrouded-woodland-10861.herokuapp.com)
- [GitHub Repo](https://github.com/sebastian-chang/block-share)
- [Deployed Client](https://sebastian-chang.github.io/block-share)

## Planning Story

- Create the API models and routes.
- Test API connections.
- Build basic front end components.
- Test front end to back end connection.
- Integrate Stripe API to handle credit a
- Create styling for front end objects.
- Test, debug, troubleshoot and debug.
- [Gantt Chart](https://docs.google.com/spreadsheets/d/1z5f2GSEPifRBP3DsE0RQL32uXRSbROqJ7u_IqC4iMV8/edit#gid=1115838130)

## API End Points

| Verb   | URI Pattern            | Controller#Action           | Token Required  |
|--------|------------------------|-----------------------------|-----------------|
| POST   | `/sign-up`             | `users#signup`              | `false`         |
| POST   | `/sign-in`             | `users#signin`              | `false`         |
| DELETE | `/sign-out`            | `users#signout`             | `true`          |
| PATCH  | `/change-password`     | `users#changepw`            | `true`          |
| PATCH  | `/update-user`         | `users#updateuser`          | `true`          |
| GET    | `/items`               | `items#index`               | `true`          |
| GET    | `/items/:id`           | `items#show`                | `true`          |
| POST   | `/items`               | `items#create`              | `true`          |
| PATCH  | `/carts/:id`           | `carts#update`              | `true`          |
| DELETE | `/carts/:id`           | `carts#delete`              | `true`          |
| GET    | `/carts`               | `carts#index`               | `true`          |
| GET    | `/carts/:id`           | `carts#show`                | `true`          |
| POST   | `/carts`               | `carts#create`              | `true`          |
| PATCH  | `/carts/:id`           | `carts#update`              | `true`          |
| DELETE | `/carts/:id`           | `carts#delete`              | `true`          |

All data returned from API actions is formatted as JSON.

### Technologies Used

- React
- HTML
- CSS
- Bootstrap
- Javascript
- Express
- Stripe
- Mongoose
- MongoDB

### Unsolved Problems

- Still need to add addition error messages.  Add additional console platforms and better icons for each platform.
- Would like to eventually like to add a search bar feature, for any game title, platform or rating.
- Would like to have additional resources to share, such as books, movies, tools etc.
- Would like to add thank comments to each resource.
- Would like to actually send a request to the owner of the resource, so that a person can borrow said item.

## Images

#### ERD:

![wireframe](https://github.com/sebastian-chang/block-share/blob/master/public/images/Block-Share-ERD.jpg)

---
