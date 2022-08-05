import { Response } from 'miragejs';
import { formatDate , requiresAuth } from '../utils/authUtils';
import { v4 as uuid } from 'uuid';


export const getAddressHandler = function ( schema ,request ){
    const userId = requiresAuth.call(this,request);
    if(!userId){
        new Response( 404,{},{ error:['The User is Not Registered.'], } );
    }
    const userAddress = schema.users.findBy({
        _id:userId,
    }).address;
    return new Response(200,{},{ address: userAddress, });
};


export const addAddressHandler = function ( schema ,request ){
    const userId = requiresAuth.call(this,request)
    try {
        if(!userId){
            new Response( 404,{},{ error:['The User is Not Registered.'], } );
        }        
        const userAddress = schema.users.findBy({
            _id:userId,
        }).address;
        const { address } =JSON.parse(request.requestBody);
        userAddress.push({
            ...address,
            _id: uuid(),
            createdAt:formatDate(),
            updateAt:formatDate(),
        });
        this.db.users.update({ _id:userId, },{ address: userAddress, });
        return new Response( 201 ,{},{ address: userAddress, });
    } catch (error) {
        return new Response( 500,{},{ error, } );
    }
};


export const removeAddressHandler = function ( schema , request){
    const userId = requiresAuth.call(this,request);
    try {
        if(!userId){
            new Response( 404,{},{ error:['The User is Not Registered.'] } )
        }
        let userAddress = schema.users.findBy({
            _id: userId,
        }).address;
        const addressId = request.param.addressId;
        userAddress = userAddress.filter((item) => item._id !== addressId );
        this.db.users.update({ _id: userId, },{ address: userAddress, });
        return new Response( 200,{},{ address: userAddress, } );
    } catch (error) {
        return new Response( 500,{},{ error, } );
    }
};


export const updateAddressHandler = function ( schema, request ){
    const addressId = request.param.addressId;
    const userId = requiresAuth.call(this,request);
    try {
        if(!userId){
            new Response( 404,{},{ error:['The User is Not Registered.'], } );
        }
        const userAddress = schema.users.findBy({
            _id: userId,
        }).address;
        const { address:{ name,street,city,state,pincode,mobile },  } = JSON.parse(request.requestBody);
        userAddress.forEach((address) => {
            if(address._id === addressId){
                address.name = name ;
                address.street = street;
                address.city = city;
                address.state = state;
                address.pincode = pincode;
                address.mobile = mobile;
                address.updatedAt = formatDate();
            }
        });
        this.db.users.update({ _id:userId, },{ address: userAddress, });
        return new Response( 200,{},{ address: userAddress, } );
    } catch (error) {
        return new Response( 500,{},{ error, } )
    }
};