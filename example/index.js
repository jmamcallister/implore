const implore = require('..');

implore()
  .get('my-url')
  .send()
  .then((value) => {
    console.log(`resolved ${value} from request`);
  });

implore()
  .send()
  .then((value) => {
    console.log(`resolved ${value} from other request`);
  });
