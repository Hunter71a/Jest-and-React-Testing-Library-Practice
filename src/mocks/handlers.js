import { rest } from 'msw';

rest.get('http://localhost:3030/scoops', (req, res, ctx) => {});
