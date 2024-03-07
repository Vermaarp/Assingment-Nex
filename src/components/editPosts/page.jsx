import React, { useEffect, useState } from 'react';
import { getUser, deleteUser } from '@/services/page';
import MyModal from '@/components/modal/page';
import { MdOutlineModeEditOutline
} from "react-icons/md";

function Page() {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUser();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchData();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        Open dialog
      </button>

      <MyModal isOpen={isOpen} closeModal={closeModal} />

      <div className="flex flex-wrap justify-start">
        {users.map(({ id, userId, name, email, address }) => {
          return (
            <div className="h-50 w-1/3" key={id}>
              <div className="p-5 bg-black rounded-xl shadow text-white m-1 my-2 space-y-3 hover:shadow-md hover:shadow-red-200 cursor-pointer hover:scale-[0.99] ease-in duration-300">
              <span className="flex justify-between">
                  <div></div>
                  <span>
                    <button
                      className="p-2 bg-blue-500 rounded-lg hover:shadow hover:shadow-[#fdfff9] hover:scale-105 ease-in duration-300"
                      
                    >
                     <MdOutlineModeEditOutline />

                    </button>
                  </span>
                </span>
                <p>Id: {id}</p>
                <p>User Id: {userId}</p>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Address: {address.street}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Page;
