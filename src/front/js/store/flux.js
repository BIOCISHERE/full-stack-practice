import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      cart: {},
      message: null,
      token: null,
      user: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      fullResponse: [
        {
          id: 1,
          name: "T-shirt",
          cost: 10000,
          rating: 5,
          ratingVotes: 100,
          category: 1,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 2,
          name: "T-shirt",
          cost: 10000,
          rating: 4,
          ratingVotes: 80,
          category: 1,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 3,
          name: "T-shirt",
          cost: 10000,
          rating: 5,
          ratingVotes: 100,
          category: 1,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 4,
          name: "T-shirt",
          cost: 10000,
          rating: 3,
          ratingVotes: 55,
          category: 1,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 5,
          name: "Sweater",
          cost: 12000,
          rating: 5,
          ratingVotes: 150,
          category: 2,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 6,
          name: "Sweater",
          cost: 12000,
          rating: 3,
          ratingVotes: 99,
          category: 2,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 7,
          name: "Sweater",
          cost: 12000,
          rating: 5,
          ratingVotes: 270,
          category: 2,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 8,
          name: "Sweater",
          cost: 12000,
          rating: 4,
          ratingVotes: 230,
          category: 2,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 9,
          name: "Hoodie",
          cost: 13000,
          rating: 4,
          ratingVotes: 200,
          category: 3,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 10,
          name: "Hoodie",
          cost: 13000,
          rating: 3,
          ratingVotes: 220,
          category: 3,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 11,
          name: "Pants",
          cost: 14000,
          rating: 4,
          ratingVotes: 300,
          category: 4,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 12,
          name: "Pants",
          cost: 14000,
          rating: 2,
          ratingVotes: 20,
          category: 4,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 13,
          name: "Pants",
          cost: 14000,
          rating: 3,
          ratingVotes: 155,
          category: 4,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 14,
          name: "Pants",
          cost: 14000,
          rating: 5,
          ratingVotes: 351,
          category: 4,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 15,
          name: "Dress",
          cost: 13000,
          rating: 4,
          ratingVotes: 300,
          category: 5,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 16,
          name: "Dress",
          cost: 13000,
          rating: 5,
          ratingVotes: 330,
          category: 5,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 17,
          name: "Jeans",
          cost: 16000,
          rating: 5,
          ratingVotes: 401,
          category: 6,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 18,
          name: "Jeans",
          cost: 16000,
          rating: 1,
          ratingVotes: 101,
          category: 6,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 19,
          name: "Jeans",
          cost: 16000,
          rating: 1,
          ratingVotes: 301,
          category: 6,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 20,
          name: "Jeans",
          cost: 16000,
          rating: 4,
          ratingVotes: 200,
          category: 6,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 21,
          name: "Purse",
          cost: 20000,
          rating: 5,
          ratingVotes: 500,
          category: 7,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 22,
          name: "Purse",
          cost: 20000,
          rating: 4,
          ratingVotes: 300,
          category: 7,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 23,
          name: "Wallet",
          cost: 10000,
          rating: 5,
          ratingVotes: 176,
          category: 8,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 24,
          name: "Wallet",
          cost: 10000,
          rating: 3,
          ratingVotes: 99,
          category: 8,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 25,
          name: "Wallet",
          cost: 10000,
          rating: 4,
          ratingVotes: 55,
          category: 8,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 26,
          name: "Wallet",
          cost: 10000,
          rating: 3,
          ratingVotes: 24,
          category: 8,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 27,
          name: "Belt",
          cost: 6000,
          rating: 5,
          ratingVotes: 134,
          category: 9,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 28,
          name: "Belt",
          cost: 6000,
          rating: 4,
          ratingVotes: 114,
          category: 9,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 29,
          name: "Belt",
          cost: 6000,
          rating: 2,
          ratingVotes: 30,
          category: 9,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 30,
          name: "Belt",
          cost: 6000,
          rating: 4,
          ratingVotes: 200,
          category: 9,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 31,
          name: "Scarf",
          cost: 7000,
          rating: 5,
          ratingVotes: 161,
          category: 10,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 32,
          name: "Scarf",
          cost: 7000,
          rating: 3,
          ratingVotes: 92,
          category: 10,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 33,
          name: "Scarf",
          cost: 7000,
          rating: 5,
          ratingVotes: 157,
          category: 10,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 34,
          name: "Scarf",
          cost: 7000,
          rating: 1,
          ratingVotes: 10,
          category: 10,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 35,
          name: "Pantie",
          cost: 8000,
          rating: 5,
          ratingVotes: 200,
          category: 11,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 36,
          name: "Pantie",
          cost: 8000,
          rating: 4,
          ratingVotes: 100,
          category: 11,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 37,
          name: "Bra",
          cost: 8000,
          rating: 5,
          ratingVotes: 80,
          category: 12,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 38,
          name: "Bra",
          cost: 8000,
          rating: 4,
          ratingVotes: 100,
          category: 12,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 39,
          name: "Panty",
          cost: 9000,
          rating: 5,
          ratingVotes: 123,
          category: 13,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 40,
          name: "Panty",
          cost: 9000,
          rating: 4,
          ratingVotes: 153,
          category: 13,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 41,
          name: "Socks",
          cost: 3000,
          rating: 5,
          ratingVotes: 56,
          category: 14,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 42,
          name: "Socks",
          cost: 3000,
          rating: 4,
          ratingVotes: 70,
          category: 14,
          amount: 10,
          productFor: "Women",
        },
        {
          id: 43,
          name: "Socks",
          cost: 3000,
          rating: 5,
          ratingVotes: 80,
          category: 14,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 44,
          name: "Socks",
          cost: 3000,
          rating: 5,
          ratingVotes: 56,
          category: 14,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 45,
          name: "Underpants",
          cost: 5000,
          rating: 5,
          ratingVotes: 198,
          category: 15,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 46,
          name: "Underpants",
          cost: 5000,
          rating: 4,
          ratingVotes: 98,
          category: 15,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 47,
          name: "Boxers",
          cost: 6000,
          rating: 3,
          ratingVotes: 298,
          category: 16,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 48,
          name: "Boxers",
          cost: 6000,
          rating: 4,
          ratingVotes: 321,
          category: 16,
          amount: 10,
          productFor: "Men",
        },
        {
          id: 49,
          name: "Urban Sneakers",
          cost: 20000,
          rating: 5,
          ratingVotes: 400,
          category: 17,
          amount: 10,
          productFor: "Footwear",
        },
        {
          id: 50,
          name: "Urban Sneakers",
          cost: 20000,
          rating: 4,
          ratingVotes: 300,
          category: 17,
          amount: 10,
          productFor: "Footwear",
        },
        {
          id: 51,
          name: "Sport Sneakers",
          cost: 25000,
          rating: 5,
          ratingVotes: 480,
          category: 18,
          amount: 10,
          productFor: "Footwear",
        },
        {
          id: 52,
          name: "Sport Sneakers",
          cost: 25000,
          rating: 4,
          ratingVotes: 320,
          category: 18,
          amount: 10,
          productFor: "Footwear",
        },
        {
          id: 53,
          name: "Shoes",
          cost: 18000,
          rating: 5,
          ratingVotes: 200,
          category: 19,
          amount: 10,
          productFor: "Footwear",
        },
        {
          id: 54,
          name: "Shoes",
          cost: 18000,
          rating: 3,
          ratingVotes: 90,
          category: 19,
          amount: 10,
          productFor: "Footwear",
        },
        {
          id: 55,
          name: "Sandals",
          cost: 16000,
          rating: 4,
          ratingVotes: 70,
          category: 20,
          amount: 10,
          productFor: "Footwear",
        },
        {
          id: 56,
          name: "Sandals",
          cost: 16000,
          rating: 3,
          ratingVotes: 50,
          category: 20,
          amount: 10,
          productFor: "Footwear",
        },
      ],
      womenProducts: [],
      menProducts: [],
      footwearProducts: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      filterProducts: () => {
        const store = getStore();
        for (let i = 0; i < store.fullResponse.length; i++) {
          if (store.fullResponse[i].productFor == "Women") {
            let womenArray = store.womenProducts;
            let womenUpdate = womenArray.concat(store.fullResponse[i]);

            setStore({ womenProducts: womenUpdate });
          } else if (store.fullResponse[i].productFor == "Men") {
            let menArray = store.menProducts;
            let menUpdate = menArray.concat(store.fullResponse[i]);

            setStore({ menProducts: menUpdate });
          } else if (store.fullResponse[i].productFor == "Footwear") {
            let footwearArray = store.footwearProducts;
            let footwearUpdate = footwearArray.concat(store.fullResponse[i]);

            setStore({ footwearProducts: footwearUpdate });
          } else {
            console.log("filterProducts failed to set the store", i);
          }
        }
      },
      turnRating: (info) => {
        if (info == 0) {
          return (
            <>
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </>
          );
        } else if (info == 1) {
          return (
            <>
              <FaStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </>
          );
        } else if (info == 2) {
          return (
            <>
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </>
          );
        } else if (info == 3) {
          return (
            <>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </>
          );
        } else if (info == 4) {
          return (
            <>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </>
          );
        } else if (info == 5) {
          return (
            <>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </>
          );
        } else {
          return info;
        }
      },
      linkManager: (num) => {
        return `/products/${num}`;
      },
      logOut: () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
        setStore({ token: null });
        setStore({ user: null });
      },
      saveToken: () => {
        const token = sessionStorage.getItem("token");

        if (token && token != "" && token != undefined && token != null) {
          setStore({ token: token });
        }
      },
      getDefaultCart: () => {
        {
          /* This function must execute after the products fetch */
        }
        const store = getStore();

        let defaultCart = {};

        store.fullResponse.map((obj) => {
          defaultCart[obj.id] = 0;
        });

        setStore({ cart: defaultCart });
      },
      plus1ToCart: (itemId) => {
        const store = getStore();

        let updatedStore = store.cart;

        updatedStore[itemId] += 1;

        setStore({ cart: updatedStore });
      },
      plusCustomToCart: (itemId, num) => {
        const store = getStore();

        let updatedStore = store.cart;

        updatedStore[itemId] += Number(num);

        setStore({ cart: updatedStore });
      },
      minus1ToCart: (itemId) => {
        const store = getStore();

        let updatedStore = store.cart;

        updatedStore[itemId] -= 1;

        setStore({ cart: updatedStore });
      },
      resetIdOnCart: (itemId) => {
        const store = getStore();

        let updatedStore = store.cart;

        updatedStore[itemId] = 0;

        setStore({ cart: updatedStore });
      },
    },
  };
};

export default getState;
