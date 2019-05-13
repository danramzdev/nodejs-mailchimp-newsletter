# Working with Mailchimp API version 3

Build a newsletter subscrition using mailchimp.

In this project we use [express](https://expressjs.com/) and [mailchimp-api-v3](https://www.npmjs.com/package/mailchimp-api-v3)

## Usage

To install packages:

`npm install`

Create a `.env` as `.example.env` and put your api key on:

`MAILCHIMP_API_KEY=YOUR_API_KEY`

To add a member on your list put your list id inside `path_params`

```
  mailchimp
    .request({
      method: 'post',
      path: '/lists/{list_id}/members',
      path_params: {
        list_id: 'YOUR_LIST_ID'
      },
      body: {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FULLNAME: fullname
        }
      }
    }).then(results => {
      console.log(results)
      res.send('Thanks for subscribed')
    }).catch(err => {
      console.error(err);
      res.send(`Error: ${err.detail}`)
    })
});
```

To see your lists ids use a get request to `/lists`

```
mailchimp.get({
  path : '/lists'
})
.then(function (result) {
  console.log(result)
  ...
})
.catch(function (err) {
  ...
})
```

To see more information about [Mailchimp API Reference](https://developer.mailchimp.com/documentation/mailchimp/reference/overview/).

Official Mailchimp documentation [here](https://developer.mailchimp.com/documentation/mailchimp/)