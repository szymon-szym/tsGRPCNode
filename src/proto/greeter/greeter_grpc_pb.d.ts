// package: greeter
// file: greeter.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as greeter_pb from "./greeter_pb";

interface IGreeterServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterServiceService_ISayHello;
}

interface IGreeterServiceService_ISayHello extends grpc.MethodDefinition<greeter_pb.HelloRequest, greeter_pb.HelloResponse> {
    path: string; // "/greeter.GreeterService/SayHello"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<greeter_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<greeter_pb.HelloRequest>;
    responseSerialize: grpc.serialize<greeter_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<greeter_pb.HelloResponse>;
}

export const GreeterServiceService: IGreeterServiceService;

export interface IGreeterServiceServer {
    sayHello: grpc.handleUnaryCall<greeter_pb.HelloRequest, greeter_pb.HelloResponse>;
}

export interface IGreeterServiceClient {
    sayHello(request: greeter_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}

export class GreeterServiceClient extends grpc.Client implements IGreeterServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: greeter_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}
