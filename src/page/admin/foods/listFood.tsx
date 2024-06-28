import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FoodContext } from "../../../context/FoodProvider";
const ListFood = () => {
  const { foods, dispath } = useContext(FoodContext);
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/foods");
      const data = await res.json();
      dispath({
        type: "LIST",
        payload: data,
      });
    })();
  }, []);

  const hanlderDeleteFood = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/foods/${id}`, {
        method: "DELETE",
      });
      dispath({
        type: "REMOVE",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2 className="font-[600] text-2xl mt-5 list-category">
        DANH SÁCH MÓN ĂN
      </h2>
      <Link
        to={"/admin/foods/add"}
        className="py-2 px-4 rounded-lg bg-primary text-white my-5 inline-block hover:bg-primary/80"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#fff"
          className="size-5 inline-block mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Thêm món ăn
      </Link>
      <table className="w-full *:border">
        <thead className="bg-primary">
          <tr className="*:border h-12 *:text-white">
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quality</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {foods?.map((item) => {
            return (
              <tr key={item.id} className="*:border h-12">
                <td>{item.id}</td>
                <td className="font-[550] text-primary text-lg">{item.name}</td>
                <td className="font-[550] text-primary text-lg">{item.category}</td>
                <td>
                  <img
                    src={item.image}
                    alt=""
                    className=" object-cover w-fit mx-auto py-2 max-w-[65px] max-h-[65px] min-h-[65px] overflow-hidden rounded-full"
                  />
                </td>
                <td className="font-[550] text-primary text-lg">{item.price}$</td>
                <td className="font-[550] text-primary text-lg">{item.quality}</td>
                <td>
                  <div className="flex justify-center gap-x-3 ">
                    <button
                      className="bg-white py-2 px-4 rounded-md shadow-md border border-base/50 inline-block"
                        onClick={() => {
                          if (confirm("Bạn có muốn xóa món ăn này không ?")) {
                            hanlderDeleteFood(item.id!);
                          }
                        }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="red"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                    <Link
                      to={`/admin/foods/${item.id}/edit`}
                      className="bg-primary py-2 px-4 rounded-md shadow-md border border-base/50 inline-block"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#fff"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListFood;
