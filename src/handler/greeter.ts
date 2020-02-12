import grpc from 'grpc'
import { HelloResponse, HelloRequest } from '../proto/greeter/greeter_pb'


export const  sayHello = (call: grpc.ServerUnaryCall<HelloRequest>, callback: grpc.sendUnaryData<HelloResponse>) => {
    const reply = new HelloResponse()
    reply.setMessage(`Hello ${call.request.getName()}`)
    callback(null, reply)

}