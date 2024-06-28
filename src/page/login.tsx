import { useForm } from "react-hook-form";
import { IUser } from "../interfaces/IUser";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<IUser>();
      const navigate=useNavigate()
      const onSubmit=async (dataForm:IUser)=>{
        try {
            const res=await fetch('http://localhost:3000/login',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(dataForm)
            })
            const data=await res.json()
            if (data.accessToken) {
                alert('Đăng nhập thành công !')
                localStorage.setItem('token',JSON.stringify(data))
                navigate('/')
            }else{
                alert(data)
            }
        } catch (error) {
            console.log(error);
        }
      }
  return (
    <form
      className="max-w-md mx-auto my-20 shadow-box p-5 rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="my-5">
        <img
          src="../../src/assets/images/logo-website-exfood.svg"
          className="w-[50%]"
          alt=""
        />
      </div>
      <h2 className="font-[600] text-2xl mb-5 text-primary">ĐĂNG NHẬP</h2>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
          {...register("email", {
            required: "Email không được để trống !",
            pattern: {
              value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              message: "Email không đúng định dạng !",
            },
          })}
        />
        <span className="text-red-500 text-xs my-2 block">
          {errors.email?.message}
        </span>
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          id="floating_password"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
          {...register("password", {
            required: "Mật khẩu không được để trống !",
            minLength: {
              value: 8,
              message: "Mật khẩu tối thiểu 8 kí tự trở lên !",
            },
            maxLength: {
              value: 30,
              message: "Mật khẩu tối đa 30 kí tự !",
            },
          })}
        />
        <span className="text-red-500 text-xs my-2 block">
          {errors.password?.message}
        </span>
        <label
          htmlFor="floating_password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-primary hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Đăng nhập
      </button>
    </form>
  )
}

export default Login