const express = require("express");
const Mailchimp = require("mailchimp-api-v3");

const { port, mcApiKey } = require("./config");

const app = express();
const mailchimp = new Mailchimp(mcApiKey);

app.use(express.urlencoded({ extended: true }));

// Static Files
app.use(express.static("public"));

app.post("/subscribe", (req, res) => {
  const { fullname, email } = req.body;

  mailchimp
    .request({
      method: 'post',
      path: '/lists/{list_id}/members',
      path_params: {
        list_id: '497d3fcd89'
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

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
