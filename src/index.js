import express from 'express';

const port = 3001;
const instance = express();

instance.get('/youHaveToConvinceOthersFirstly', (request, response) => response.send('It is not so easy as it looks.'));
instance.listen(port, () => console.log(`Application started on port: ${port}.`));
