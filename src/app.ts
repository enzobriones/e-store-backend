import 'dotenv/config';

import server from './presentation/server';

const port = process.env.PORT ?? 4000;

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
