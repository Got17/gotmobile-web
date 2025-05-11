import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="bg-purple-600 h-screen w-64">
            <div className="p-5 text-white text-xl bg-purple-800">
                <h1>GotMobile Version 1.0</h1>
            </div>
            <div className="p-5 text-white text-xl flex flex-col gap-2">
                <div>
                    <Link href={"/backoffice/dashboard"}>
                        <i className="fa fa-tachometer-alt mr-2 w-[25px] text-center"></i>
                        Dashboard
                    </Link>
                </div>
                <div>
                    <Link href={"/backoffice/buy"}>
                        <i className="fa fa-shopping-cart mr-2 w-[25px] text-center"></i>
                        Buy
                    </Link>
                </div>
                <div>
                    <Link href={"/backoffice/sell"}>
                        <i className="fa fa-dollar-sign mr-2 w-[25px] text-center"></i>
                        Sell
                    </Link>
                </div>
                <div>
                    <Link href={"/backoffice/repair"}>
                        <i className="fa fa-wrench mr-2 w-[25px] text-center"></i>
                        Stock
                    </Link>
                </div>
                <div>
                    <Link href={"/backoffice/company"}>
                        <i className="fa fa-building mr-2 w-[25px] text-center"></i>
                        Company
                    </Link>
                </div>
                <div>
                    <Link href={"/backoffice/user"}>
                        <i className="fa fa-users mr-2 w-[25px] text-center"></i>
                        Users
                    </Link>
                </div>
            </div>
        </div>
    );
}