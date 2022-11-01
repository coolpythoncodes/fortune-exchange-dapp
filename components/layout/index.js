import { useStoreContext } from "context/StoreContext";
import { useRouter } from "next/router";
import { useEffect } from "react";


const Layout = ({ children }) => {
    const { account, role } = useStoreContext()
    const router = useRouter()

    useEffect(() => {
        if (!account) router.push('/')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [account]);

    return (
        <div className='bg-[#202845] grid place-items-center w-screen h-screen'>
            <div className="text-white text-center w-4/5 max-w-xl">
                <h1 className="text-4xl">Fortune Exchange</h1>
                <h2 className="text-2xl mt-5">{`${role === 'deployer' ? 'Deployer(Alice)' : role === 'attacher' ? 'Attacher(Bob)' : ''}`}</h2>
                <main className='mt-10'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout