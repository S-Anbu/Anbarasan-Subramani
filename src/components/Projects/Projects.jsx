import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import datas from './datas';
const Projects = () => {
    const project = [{}]
    return (
        <div>
            <div className='text-center py-10'>
            <h1 className="relative text-4xl font-bold inline-block ">
                PROJECTS
                <span
                    className="absolute left-0 -bottom-1 w-full h-1 bg-[#8e0af3]"
                ></span>
            </h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-5 mx-auto px-10 md:px-20 lg:px-20 md:gap-x-5 lg:gap-x-3 xl:px-40'>
                {datas.map((data, index) => (
                    <Card key={index}
                        shadow={false}
                        data-aos="zoom-in-up" data-aos-duration="2000"
                        className="relative grid h-[20rem] w-full max-w-[20rem] items-end justify-center overflow-hidden text-center hover:scale-105 duration-700 ease-in-out transition-transform"
                    >
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
                        >
                            <img src={data.image} alt="" />
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                        </CardHeader>
                        <CardBody className="relative py-14 px-6 md:px-12">
                            <Typography
                                variant="h6"
                                color="white"
                                className="mb-6 font-medium leading-[1.5]"
                            >
                                {data.description}
                            </Typography>

                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Projects