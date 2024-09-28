import React from 'react';

const CodeSnippet = () => {
    return (
        <>
        <div className="bg-[#1D1E22] p-6 rounded-lg max-w-sm  md:max-w-lg mx-auto  ">
            <div className="flex">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 mr-2"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-sm text-[#ABB2BF] mt-4">
                <code>
                    <span className="text-pink-500">const</span> coder = {'{'} {'\n'}
                    &nbsp;&nbsp;<span className="text-purple-400">name</span>:{' '}
                    <span className="text-yellow-400">'Anbarasan'</span>,{'\n'}
                    &nbsp;&nbsp;<span className="text-purple-400">skills</span>:[
                    <span className="text-yellow-400">'React'</span>,{' '}
                    <span className="text-yellow-400">'NextJS'</span>,{' '}
                    <span className="text-yellow-400">'Redux'</span>,{' '}{'\n'}
                    <span className="text-yellow-400 ml-20" >'Javascript'</span>,{' '}
                    <span className="text-yellow-400">'Tailwind CSS'</span>,{' '}{'\n'}
                    <span className="text-yellow-400 ml-20">'Bootstrap'</span>,{' '}
                    <span className="text-yellow-400 ">'CSS'</span>,{' '}
                    <span className="text-yellow-400">'HTML'</span>],{'\n'}
                    &nbsp;&nbsp;<span className="text-purple-400">hardWorker</span>:{' '}
                    <span className="text-blue-400">true</span>,{'\n'}
                    &nbsp;&nbsp;<span className="text-purple-400">quickLearner</span>:{' '}
                    <span className="text-blue-400">true</span>,{'\n'}
                    &nbsp;&nbsp;<span className="text-purple-400">problemSolver</span>:{' '}
                    <span className="text-blue-400">true</span>,{'\n'}
                    &nbsp;&nbsp;<span className="text-purple-400">hireable</span>:{' '}
                    <span className="text-pink-500">function</span>() {'{'} {'\n'}
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-500">return</span> (
                    {'\n'}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.
                    <span className="text-purple-400">hardWorker</span> && {'\n'}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.
                    <span className="text-purple-400">problemSolver</span> && {'\n'}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.
                    <span className="text-purple-400">skills.length</span> &gt;= 5 {'\n'}
                    &nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                    &nbsp;&nbsp;{'}'},{'\n'}
                    {'};'}
                </code>
            </pre>


        </div>
            <div className='max-w-sm mt-4 text-center'>
                <span className='text-4xl  font-semibold '>Hi, I'm <span className='text-[#0d6efd] '>Anbarasan</span> </span><br />
                <span className='text-4xl font-semibold'>Web Designer &</span> <br />
                <span className='text-4xl font-semibold'> Developer</span>
            </div>
            </>
    );
};

export default CodeSnippet;
