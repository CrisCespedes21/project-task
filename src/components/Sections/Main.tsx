import { Header } from "./Main_Comp/Header"
import { PageRoutes } from "../Routes/Route"

export function Main() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="p-3">
                <PageRoutes /> 
            </div>
        </>
    )

}