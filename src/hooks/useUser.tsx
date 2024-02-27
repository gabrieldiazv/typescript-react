import { useState, useRef, useEffect } from "react";
import { ReqResUserListResponse, User } from "../interfaces";
import axios from "axios";

export const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  const loadUsers = async (page: number = 1): Promise<User[]> => {
    try {
      const { data } = await axios.get<ReqResUserListResponse>(
        "https://reqres.in/api/users",
        {
          params: {
            page: page,
          },
        }
      );
      console.log(data);
      return data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    loadUsers(currentPageRef.current).then((data) => {
      console.log(data);
      setUsers(data);
    });
    //   fetch('https://reqres.in/api/users?page=2').then((response) => {
    //     response.json().then((body) => {
    //       console.log(body);
    //     });
    //   });
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadUsers(currentPageRef.current);
    console.log(currentPageRef.current);
    console.log(users);
    if (users.length > 0) {
      setUsers(users);
      return;
    } else {
      currentPageRef.current--;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current <= 1) return;

    currentPageRef.current--;
    const users = await loadUsers(currentPageRef.current);
    setUsers(users);
  };
  return { users, nextPage, prevPage };
};
