"use client";

import { failure, loading, success } from "@/store/logic";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  // this hook is used for dispatching actions and trigger their respective reducer function
  const dispatch = useDispatch();
  // this hook is used  for retrieve data from redux state
  const products = useSelector((state) => state.products);

  // log the states
  console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      // for dispatching action to update the state
      dispatch(loading());

      try {
        // Callinf fakestore api
        const { data } = await axios.get("https://fakestoreapi.com/products");

        dispatch(success(data));
      } catch (error) {
        dispatch(failure(error.message));
      }
    };
    fetchProducts();
  }, []); // call only when commponent mounts first time

  if(products.loading) return <p>Loading...</p>
  if(products.error) return <p>Error fetching Data, {products.error}</p>


  return (
    <div className="m-5">
      {
       products.data && products.data.map((item, index) => (
          <p>{index + 1} - {item.title}</p>
        ))
      }
    </div>
  );
}