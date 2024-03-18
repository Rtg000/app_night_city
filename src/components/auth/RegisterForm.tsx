'use client'
import { ILogin } from "@/interfaces/ILogin"
import apiAuth from "@/model/auth/apiAuth"
import Cookies from "js-cookie"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"


const RegisterForm = () => {

    const router = useRouter()
    const { register, handleSubmit } = useForm<ILogin>()

    const onLoginUser = async ({email, password}: ILogin) => {
        console.log("login");
        console.log(email, password);

        try{
            const login = { email, password}
            const data = await apiAuth.login(login)
            console.log(data)
            const { token, user } = data;
            console.log(user)
            Cookies.set('token',token)
            Cookies.set('email',user.email)
            console.log('------>',Cookies.get('email'))
            router.replace('/admin')
        }catch(error){
            console.log(error)
        }
    }

    return(
        // <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> 
        <section className="p-20 w-screen h-full">
        <div className="h-full">
            {/* <!-- Left column container with background--> */}
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 flex justify-center">
                    {/* <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="w-full"
                    alt="Sample image" /> */}
                    {
                        <Image alt="Fondo login" src={"/v.png"} width={500} height={500}/>
                    }
                </div>

                {/* <!-- Right column container --> */}
                <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 flex justify-center">
                    <form className="space-y-3 w-full" onSubmit={handleSubmit(onLoginUser)} noValidate>

                    {/* <!-- Email input --> */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput2"
                        placeholder="Email address" 
                        { ...register('email',{
                            required: 'email es obligatorio'
                        })}
                        />
                        <label
                        htmlFor="exampleFormControlInput2"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Email address
                        </label>
                    </div>

                    {/* <!-- Username input --> */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput2"
                        placeholder="Email address" 
                        { ...register('email',{
                            required: 'email es obligatorio'
                        })}
                        />
                        <label
                        htmlFor="exampleFormControlInput2"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Username
                        </label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                        type="password"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput22"
                        placeholder="Password" 
                        { ...register('password',{
                            required: 'password es obligatorio',
                            // minLength: {value: 6, message: 'Minimo 6 caracteres'}
                        })}
                        />
                        <label
                        htmlFor="exampleFormControlInput22"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Password
                        </label>
                    </div>
                    {/* <!-- Login button --> */}
                    <div className="text-center lg:text-left">
                            <button
                            type="submit"
                            className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Register
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}

export default RegisterForm