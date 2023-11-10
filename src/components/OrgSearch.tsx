"use client";
import React, { useEffect, useState } from "react";

type Props = {
  text: string;
};

export default function OrgSearch({ text }: Props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const getData = async () => {
        try {
          const res = await fetch(`/api/addDetails?text=${text}`);
          const result = await res.json();
          // console.log(result);
          setData(result.data);
        } catch (e) {
          console.log(e);
        }
      };
      getData();
    }, 250);
  }, [text]);
  return (
    <>
      {data &&
        data.map((org: { org: string }) => {
          // console.log(org.org);
          return <option>{org.org}</option>;
        })}
    </>
  );
}
