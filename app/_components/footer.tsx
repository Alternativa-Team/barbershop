const Footer = () => {
    const currentYear = new Date().getFullYear(); // Declare the currentYear variable

    return ( 
        <div className="w-full bg-invisible py-6 px-5">
            <p className="text-gray-400 text-xs opacity-75">
                © {currentYear} Copyright 
                <a href="#" className="font-bold"> AlternativaAgency</a>
            </p>
        </div>
     );
}
 
export default Footer ;