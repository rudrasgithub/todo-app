import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar(){
    const {isAuthenticated,isLoading,user,login,register,logout}=useKindeAuth(); 

    return (
        <section className="col-[2/3] row-[2/3] flex flex-col justify-between bg-[#fffcf9] border-l border-black/[0.08] pt-[18px] px-[25px] pb-[28px]">
            <AddTodoForm/>
            <div className="space-y-2">
                {isLoading?null:isAuthenticated?(
                    <>
                        <p className="text-sm">Logged in as {user?.email}</p>
                        <Button buttonType="secondary" onClick={logout}>
                            Log Out
                        </Button>
                    </>
                ):(
                    <>
                        <Button buttonType="secondary" onClick={login}>
                            Log In
                        </Button>
                        <Button buttonType="secondary" onClick={register}>
                            Register
                        </Button>
                    </>
                )}
            </div>
        </section>
    )
}