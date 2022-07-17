import React, { createContext, useState,useContext } from "react";


interface ProductInterface {
    cart: Array<object>;
    manegeCart: ((val: any) => void) | null;
    HaveInArray: Function;
    
}

export const ProductContext = createContext<ProductInterface>({ cart: [], manegeCart: null, HaveInArray: () => null });

export const ProductProvider = (props: any) => {
    const [cart, setCart] = useState<Array<object>>([]);
    const HaveInArray = (val:any) => {
        let index = cart.indexOf(val)
        return (index > -1)
    }
    const manegeCart = (val: any) =>{
        let arr = [...cart];
        let index = arr.indexOf(val);
        if(index == -1){
            arr.push(val)
        }else{
            arr.splice(index,1)
        }
        setCart([...arr]);
    }
    return (
        <ProductContext.Provider value= {{ cart, manegeCart, HaveInArray }}>
           { props.children }
        </ProductContext.Provider>
    );

}

export const useProduct = () => useContext(ProductContext)