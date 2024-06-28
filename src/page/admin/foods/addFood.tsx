import { useContext, useEffect, useState } from "react";
import { ICategory } from "../../../interfaces/ICategory";
import { useForm } from "react-hook-form";
import { IFood } from "../../../interfaces/IFood";
import { FoodContext } from "../../../context/FoodProvider";

const AddFood = () => {
  const [categorys, setCategorys] = useState<ICategory[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/categorys");
        const data = await res.json();
        setCategorys(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFood>();

  const [imageFood, setFood] = useState<string>("");
  const [linkImgbb, setLinkImgbb] = useState<string>("");
  const handleChangeImageFood = (event: any) => {
    setFood(event.target.files[0]);
  };
  const hanldeUploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", imageFood);
      const res = await fetch(
        "https://api.imgbb.com/1/upload?key=855f5412c64c4e4e9d8d41bc891577a3",
        {
          method: "POST",
          body: formData,
        }
      );
      const { data } = await res.json();
      setFood(data?.url);
      setLinkImgbb(data?.url);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      hanldeUploadImage();
    }, 1000);
  }, [imageFood]);

  const { dispath } = useContext(FoodContext);
  const onSubmit = async (dataForm: IFood) => {
    try {
      const { name, price, quality, category, description } = dataForm;
      const res = await fetch("http://localhost:3000/foods", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
          quality,
          category,
          description,
          image: linkImgbb,
        }),
      });

      const data = await res.json();

      dispath({
        type: "ADD",
        payload: data,
      });

      alert("Thêm món ăn thành công !");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="max-w-[75%] mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-[600] text-2xl my-5 before">THÊM MÓN ĂN</h2>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tên món ăn
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 focus:outline-primary text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="Cơm..."
                {...register("name", {
                  required: "Tên món ăn không được để trống !",
                })}
              />
              <div className="text-red-500 text-sm my-1.5">
                {errors.name?.message}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mb-5">
              {" "}
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Giá
                </label>
                <input
                  type="number"
                  id="price"
                  placeholder="1**"
                  className="shadow-sm bg-gray-50 border border-gray-300 focus:outline-primary text-gray-900 text-sm rounded-lg w-full p-2.5"
                  {...register("price", {
                    required: "Giá không được để trống !",
                    min: {
                      value: 1,
                      message: "Giá phải là số dương !",
                    },
                  })}
                />
                <div className="text-red-500 text-sm my-1.5">
                  {errors.price?.message}
                </div>
              </div>
              <div>
                <label
                  htmlFor="quality"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Số lượng
                </label>
                <input
                  type="number"
                  id="quality"
                  defaultValue={1}
                  className="shadow-sm bg-gray-50 border border-gray-300 focus:outline-primary text-gray-900 text-sm rounded-lg w-full p-2.5"
                  {...register("quality", {
                    required: "SL không được để trống !",
                    min: {
                      value: 1,
                      message: "SL phải là số dương !",
                    },
                  })}
                />
                <div className="text-red-500 text-sm my-1.5">
                  {errors.quality?.message}
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Danh mục
              </label>
              <select
                id="category"
                className="border w-full p-2.5 outline-none rounded-lg bg-gray-50 focus:outline-primary"
                {...register("category", {
                  required: "Danh mục phải được chọn !",
                })}
              >
                <option value="">-- Vui lòng chọn danh mục --</option>
                {categorys.map((category) => {
                  return <option value={category.name}>{category.name}</option>;
                })}
              </select>
              <div className="text-red-500 text-sm my-1.5">
                {errors.category?.message}
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mô tả
              </label>
              <textarea
                id="description"
                placeholder="Mô tả"
                cols={53}
                className="border bg-gray-50 border-gray-300 shadow-sm rounded-lg text-sm outline-none p-2.5"
                rows={5}
              ></textarea>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ảnh
            </label>
            <div className="border overflow-hidden max-w-[75%] rounded-lg bg-gray-50 relative h-[92%] *:hover:cursor-pointer">
              <input
                type="file"
                id="image-uload"
                {...register("image", {
                  required: "Ảnh không được để trống !",
                })}
                onChange={handleChangeImageFood}
                className="opacity-0 flex absolute  w-full h-full hover:cursor-pointer z-50"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#F58220"
                className="size-6 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-40"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
              {imageFood && (
                <img src={imageFood} className="absolute w-full h-full" />
              )}
            </div>
            <div className="text-red-500 text-sm my-1.5">
              {errors.image?.message}
            </div>
          </div>
        </div>
        {linkImgbb ? (
          <button
            type="submit"
            className="text-white bg-primary  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Thêm món ăn
          </button>
        ) : (
          <button
            type="submit"
            disabled
            className="text-white bg-util hover:cursor-wait  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Thêm món ăn
          </button>
        )}
      </form>
    </div>
  );
};

export default AddFood;
