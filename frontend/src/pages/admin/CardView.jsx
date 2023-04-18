import React, { useEffect, useState } from 'react'
import instance from "../../components/instance";
import axios from 'axios';



export default function CardView() {
    const [services, setServices] = useState();
    const getServices = async () => {
        try {
            const { data } = await axios.get(`${instance}service/get-services`);
            if (data?.success) {
                setServices(data.services);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
		getServices();
	}, []);
    return (
        <>
            <div className="grid-3 mt-6">
                {services?.map((val, index) => {
                    return (
                        <div className="card border border-[#7e1c8c] rounded-md p-4 hover:shadow-lg transition-all" key={index}>
                            <div className="flex items-center gap-4 mb-4">
                                {/* <img src={pic1} alt={val.name} className="w-[50px] h-[50px] rounded-full" /> */}
                                <h3>{val.name}</h3>
                            </div>
                            <div className="card-body">
                                <p>{val.bannerDes}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}
