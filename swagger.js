const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/rest_usuario.js']

swaggerAutogen(outputFile, endpointsFiles)