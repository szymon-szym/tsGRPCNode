import { sayHello } from './handler/greeter'
const services = require ('./proto/greeter/greeter_grpc_pb')

import grpc from 'grpc'

function main() {
    const server = new grpc.Server()
    server.addService(services.GreeterServiceService, {sayHello: sayHello})
    server.bind(`0.0.0.0:50051`, grpc.ServerCredentials.createInsecure())
    server.start()
}

main()