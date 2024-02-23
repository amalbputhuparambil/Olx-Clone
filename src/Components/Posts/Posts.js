import React, { useContext, useEffect, useState } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext, PostContext } from '../../store/FirebaseContext';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const { firebase } = useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const {setPostDetails}=useContext(PostContext)
  const navigate = useNavigate()

  useEffect(() => {
    alert('you need to Login for view the post')
    firebase.firestore().collection('products').get().then((result) => {
      const allpost = result.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setProducts(allpost)
      console.log(products);
    })
  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
            {products.map((product,index)=>{
              return(
            <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
              <div key={index}
              onClick={()=>{
                setPostDetails(product)
                navigate("/view")}
              }>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
            </div>
          </div>
            )
          })}
          </div>
      </div>
      
    </div>
  );
}

export default Posts;
