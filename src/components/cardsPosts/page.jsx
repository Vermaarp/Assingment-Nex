import React, { useEffect, useState } from "react";
import { getUser, deleteUser } from "@/services/page";
import MyModal from "@/components/modal/page";
// icons
import { MdDeleteForever, MdOutlineModeEditOutline } from "react-icons/md";

function Page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUser();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const [isOpen, setIsOpen] = useState(false); // State for modal visibility
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-wrap justify-start">
        {users.map(({ id, userId, name, email, address }) => {
          return (
            <div className="h-50 w-1/3" key={id}>
              <div className="p-5 bg-black rounded-xl shadow text-white m-1 my-2 space-y-2 hover:shadow-md hover:shadow-red-200  hover:scale-[1] ease-in duration-300">
                <span className="flex gap-1 justify-between">
                  <div></div>
                  <span className="flex gap-2">
                    <button className="p-2 bg-blue-500 rounded-lg hover:shadow hover:shadow-[#fdfff9] hover:scale-100 ease-in duration-100">
                      <MdOutlineModeEditOutline onClick={() => openModal({ id, userId, name, email, address })} />
                    </button>
                    <button
                      className="p-2 bg-red-500 rounded-lg hover:shadow hover:shadow-[#fdfff9] hover:scale-105 ease-in duration-100"
                      onClick={() => handleDeleteUser(id)}
                    >
                      <MdDeleteForever />
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
      {/* modal  */}
      <MyModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

export default Page;
