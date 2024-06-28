import { useEffect, useState } from "react";
import { ICategory } from "../../../interfaces/ICategory";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddCategorys = () => {
  const [imageCategory, setCategory] = useState<string>("");
  const [linkImgbb, setLinkImgbb] = useState<string>("");
  const handleChangeImageCategory = (event: any) => {
    setCategory(event.target.files[0]);
  };
  const hanldeUploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", imageCategory);
      const res = await fetch(
        "https://api.imgbb.com/1/upload?key=855f5412c64c4e4e9d8d41bc891577a3",
        {
          method: "POST",
          body: formData,
        }
      );
      const { data } = await res.json();
      setCategory(data?.url);
      setLinkImgbb(data?.url);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      hanldeUploadImage();
    }, 1000);
  }, [imageCategory]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICategory>();
  const navigate = useNavigate();
  const onSubmit = async (dataForm: ICategory) => {
    try {
      const { name } = dataForm;
      await fetch("http://localhost:3000/categorys", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, image: linkImgbb }),
      });
      alert("Thêm thành công !");
      navigate("/admin/categorys");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-evenly flex-col md:flex-row">
      <form
        className="max-w-[100%] md:max-w-[60%] order-2 md:order-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="font-[600] text-2xl my-5 before">THÊM DANH MỤC MENU</h2>
        <div className="mb-5">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tên danh mục
          </label>
          <input
            type="category"
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-primary/70  block w-full p-2.5"
            placeholder="Tên danh mục"
            {...register("name", {
              required: "Tên danh mục không được để trống !",
              minLength: {
                value: 3,
                message: "Tên danh tối thiểu 3 kí tự trở lên !",
              },
              maxLength: {
                value: 20,
                message: "Tên danh tối đa 20 kí tự !",
              },
            })}
          />
          <span className="text-sm text-red-500">{errors.name?.message}</span>
        </div>
        <div className="mb-5">
          <label
            htmlFor="image-upload"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Hình ảnh
          </label>
          <div className="max-w-[150px] h-[100px] bg-util/50 backdrop-blur rounded-lg relative overflow-hidden">
            <input
              type="file"
              id="image-upload"
              className=" text-gray-900 w-full flex text-sm focus:outline-primary/70 h-full opacity-0 visible p-2.5 z-50 rounded-lg cursor-pointer absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]"
              onChange={handleChangeImageCategory}
            />
            <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] hover:cursor-pointer h-full w-full flex justify-center items-center rounded-lg z-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#F58220"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
              {imageCategory && (
                <img src={imageCategory} className="absolute" />
              )}
            </div>
          </div>
        </div>
        {linkImgbb ? (
          <button
            type="submit"
            className="text-white mt-2 bg-primary/100 hover:bg-primary/80 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:outline-primary/70"
          >
            Thêm danh mục
          </button>
        ) : (
          <button
            type="submit"
            disabled
            className="text-white mt-2 hover:cursor-wait bg-util font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Thêm danh mục
          </button>
        )}
      </form>
      <div className="w-full md:w-[40%] order-1 md:order-2">
        <img src="../../../src/assets/images/before.svg" alt="" />
      </div>
    </div>
  );
};

export default AddCategorys;
