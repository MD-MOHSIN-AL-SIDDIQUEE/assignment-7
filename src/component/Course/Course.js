import React from 'react';
import { useState } from 'react';
import'./Course.css';


const Course = () => {
const courseName = [{name:"django",price:20},{name:"Exel",price:30},{name:"facebook add",price:40},     {name:"gre verbal",price:50},{name:"IELTS",price:60},{name:"Javascript",price:70},{name:"Marcos",price:70},{name:"python",price:80},{name:"React Cover",price:90},{name:"SQL",price:100}];


const [Price , setPrice] = useState([]);
const [Cart,setCart] = useState([]);
const handleAddProduct = (data) => {
  const newCart = [...Cart, data];
  setCart(newCart);
}

    return (
        <div className="container course-section">

            <div className="course-header">
                <h1 >Online Course</h1>
            </div>
            
          <div className="cart-part row " >
            <div className="  course-container col-md-8 row " >
                  {courseName.map(CourseName => <CourseProduct name={CourseName.name}handleAddProduct={handleAddProduct} price={CourseName.price}></CourseProduct>)};                      
           </div>
           <div classname="  col-md-4 ">
                 <CartTotal Cart = {Cart} ></CartTotal>
          </div>
            </div>
  
        </div>
    );
};

function CourseProduct(props){ 
return (
        <div className="col-md-4 course-product ">
           <h1 >{props.name}</h1>
            <p>${props.price}</p>
            <button class=" button btn btn-primary"onClick={() => props.handleAddProduct(props)}>add to cart</button>   

        </div>
)
}

function CartTotal(props){
    const cart = props.Cart;
    const totalProduct = cart.reduce((total,product )=> total+product.price,0);
    const vat = totalProduct/10;
    const finalTotal = totalProduct + vat;
    return(
        <div class="cart-container">
            <h1>Order Summary</h1>
             <p>Items Ordered:{cart.length}</p>
            <p>tax & vat (10%) :${vat}</p>
            <p>TotalPrice:${finalTotal}</p>

        </div>
    )
}

export default Course;