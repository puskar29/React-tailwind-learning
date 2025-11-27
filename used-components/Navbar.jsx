function Header(){
    return(
        <>
        <nav className="bg-gray-800 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-3xl font-bold">
                    <a href="#">Kanung</a>
                </div>

                <div className="space-x-10">
                    <a href="" className="text-white hover:text-gray-400">Home</a>
                    <a href="" className="text-white hover:text-gray-400">About</a>
                    <a href="" className="text-white hover:text-gray-400">Service</a>
                    <a href="" className="text-white hover:text-gray-400">Contact</a>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header