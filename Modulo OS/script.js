const os = require ("os")

console.log("Sistema Operacional:" , os.platform())
console.log("Arquitetura:" , os.arch())
console.log("Memoria Livre:" , os.freemem(),"bytes")
console.log("Memoria Livre:" , os.totalmem(),"bytes")