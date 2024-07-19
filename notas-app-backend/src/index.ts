import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import noteRoutes from './routes/noteRoute';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', noteRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
