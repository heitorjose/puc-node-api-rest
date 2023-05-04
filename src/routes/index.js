const ProdutoRoute = require('./produto-route');
module.exports = (app) => {
   (async () => {
      const database = require('../../db');
         try {
          const resultado = await database.sync();
          console.log(resultado);
      } catch (error) {
          console.log(error);
      }
   })();
   ProdutoRoute(app)
}