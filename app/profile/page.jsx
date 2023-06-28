"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();

  const arr = [1, 2, 3, 4, 5, 6, 8];
  const lenArr = arr.length;

  function findMedian(arr) {
    // Write your code here
    const sortedArr = arr.sort((a, b) => a - b);

    const arrLength = sortedArr.length;

    if (arrLength % 2 === 0) {
      return (sortedArr[arrLength / 2] + sortedArr[arrLength / 2 - 1]) / 2;
    } else {
      return sortedArr[arrLength / 2 - 0.5];
    }
  }

  console.log(findMedian(arr))
  return <div>Profile Page</div>;
};

export default Profile;
