import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
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
      response: [
        {
          id: "1",
          name: "T-Shrit",
          cost: "10.000",
          rating: "3",
          ratingVotes: "100",
          category: "1",
          amount: "10",
        },
        {
          id: "2",
          name: "T-Shrit",
          cost: "10.000",
          rating: "4",
          ratingVotes: "155",
          category: "1",
          amount: "10",
        },
        {
          id: "3",
          name: "Sweater",
          cost: "15.000",
          rating: "4",
          ratingVotes: "321",
          category: "2",
          amount: "10",
        },
        {
          id: "4",
          name: "Sweater",
          cost: "15.000",
          rating: "4",
          ratingVotes: "123",
          category: "2",
          amount: "10",
        },
        {
          id: "5",
          name: "Pant",
          cost: "5.000",
          rating: "4",
          ratingVotes: "50",
          category: "3",
          amount: "10",
        },
        {
          id: "6",
          name: "Pant",
          cost: "5.000",
          rating: "4",
          ratingVotes: "40",
          category: "3",
          amount: "10",
        },
        {
          id: "7",
          name: "Jean",
          cost: "7.500",
          rating: "4",
          ratingVotes: "20",
          category: "4",
          amount: "10",
        },
        {
          id: "8",
          name: "Jean",
          cost: "7.500",
          rating: "3",
          ratingVotes: "10",
          category: "4",
          amount: "10",
        },
        {
          id: "9",
          name: "Dress",
          cost: "15.000",
          rating: "3",
          ratingVotes: "89",
          category: "5",
          amount: "10",
        },
        {
          id: "10",
          name: "Dress",
          cost: "15.000",
          rating: "3",
          ratingVotes: "15",
          category: "5",
          amount: "10",
        },
        {
          id: "11",
          name: "Purse",
          cost: "20.000",
          rating: "5",
          ratingVotes: "64",
          category: "6",
          amount: "10",
        },
        {
          id: "12",
          name: "Purse",
          cost: "20.000",
          rating: "5",
          ratingVotes: "46",
          category: "6",
          amount: "10",
        },
        {
          id: "13",
          name: "Wallet",
          cost: "5.000",
          rating: "4",
          ratingVotes: "98",
          category: "7",
          amount: "10",
        },
        {
          id: "14",
          name: "Wallet",
          cost: "5.000",
          rating: "4",
          ratingVotes: "89",
          category: "7",
          amount: "10",
        },
        {
          id: "15",
          name: "Belt",
          cost: "4.000",
          rating: "4",
          ratingVotes: "34",
          category: "8",
          amount: "10",
        },
        {
          id: "16",
          name: "Belt",
          cost: "4.000",
          rating: "4",
          ratingVotes: "22",
          category: "8",
          amount: "10",
        },
        {
          id: "17",
          name: "Scarf",
          cost: "3.000",
          rating: "5",
          ratingVotes: "164",
          category: "9",
          amount: "10",
        },
        {
          id: "18",
          name: "Scarf",
          cost: "3.000",
          rating: "4",
          ratingVotes: "56",
          category: "9",
          amount: "10",
        },
        {
          id: "19",
          name: "Panties",
          cost: "4.500",
          rating: "5",
          ratingVotes: "57",
          category: "10",
          amount: "10",
        },
        {
          id: "20",
          name: "Panties",
          cost: "4.500",
          rating: "3",
          ratingVotes: "46",
          category: "10",
          amount: "10",
        },
        {
          id: "21",
          name: "Bra",
          cost: "4.500",
          rating: "5",
          ratingVotes: "457",
          category: "11",
          amount: "10",
        },
        {
          id: "22",
          name: "Bra",
          cost: "4.500",
          rating: "4",
          ratingVotes: "455",
          category: "11",
          amount: "10",
        },
        {
          id: "23",
          name: "Sock",
          cost: "3.000",
          rating: "4",
          ratingVotes: "100",
          category: "12",
          amount: "10",
        },
        {
          id: "24",
          name: "Panty",
          cost: "3.000",
          rating: "4",
          ratingVotes: "34",
          category: "12",
          amount: "10",
        },
      ],
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
    },
  };
};

export default getState;
