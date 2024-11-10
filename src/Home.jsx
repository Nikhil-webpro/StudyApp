import React, { useContext } from 'react';
import StudyDesk from './context';
import { IoMdClose, IoMdMenu, IoMdSend } from 'react-icons/io';

const Home = () => {
    const { header, setHeader, ChatBot, setChat ,Sidebar,setSidebar,Cal,setCal} = useContext(StudyDesk);
    return (
        <div className='h-auto  '>
            <nav className='w-full h-[10vh] bg-white flex  items-center justify-between'>
                <div className="text-2xl font-medium cursor-pointer px-6">
                    Study Desk
                </div>
                <div className="flex items-center justify-center md:block ">
                    <div className="md:hidden flex">
                        <button onClick={() => { setHeader(prev => !prev), console.log(header) }} className='w-10 h-10 text-2xl mr-3 flex items-center rounded-full justify-center hover:bg-slate-400/20'>

                            {header ? <IoMdClose /> : <IoMdMenu />}
                        </button>
                    </div>
                    <header className={` md:ml-0   md:flex flex-col absolute md:relative top-16 right-0 left-0 md:top-0 w-[100%]  md:w-auto py-1 md:py-0 bg-white md:flex-row md:gap-6 md:mr-4 ${header ? " flex " : " hidden "}`}>
                        <section className={`flex flex-col md:flex-row md:gap-3  gap-1 items-center ${header ? " " : "Header_button"}`}>
                            <button className='w-full  md:w-auto md:px-6 py-4 md:py-2 rounded md:bg-blue-400/10 flex items-center justify-center 
                                    md:hover:bg-blue-400/20 text-blue-600   hover:bg-slate-500/10 '>Notes</button>
                            <button className='w-full  md:w-auto md:px-6 py-4 md:py-2 rounded md:bg-blue-400/10 flex items-center justify-center 
                                    md:hover:bg-blue-400/20 text-blue-600   hover:bg-slate-500/10 '>TextBooks</button>
                            <button className='w-full  md:w-auto md:px-6 py-4 md:py-2 rounded md:bg-blue-400/10 flex items-center justify-center 
                                    md:hover:bg-blue-400/20 text-blue-600   hover:bg-slate-500/10 '>Coding</button>
                            <button onClick={()=>{setCal(prev=>!prev)}} className='w-full  md:w-auto md:px-6 py-4 md:py-2 rounded md:bg-blue-400/10 flex items-center justify-center 
                                    md:hover:bg-blue-400/20 text-blue-600   hover:bg-slate-500/10 '>Calculator</button>
                        </section>
                        <section className=' hidden md:flex flex-col md:flex-row mt-4 md:mt-0 items-center gap-3'>
                            <button onClick={() => { setChat(prev => !prev)}} className='flex items-center justify-center w-36 h-10 bg-yellow-400/60 gpt rounded relative'>
                                <span className=""></span>
                                <p className='h-full w-full relative text-center flex items-center justify-center bg-transparent text-yellow-700'>Try ChatBot</p>
                            </button>
                            <button className='w-10 h-10 rounded-full bg-blue-500/20'>
                                S
                            </button>
                        </section>
                    </header>

                </div>
            </nav>
            <div className="w-full h-[90vh] flex ">
                <div className={`h-[100%] min-w-72 md:w-[20vw] w-screen gap-2 bg-white border-t-2 border-t-slate-600 hidden md:flex flex-col items-center `}>          
                </div>
                <div className={`h-full w-screen   ${ChatBot ? " md:w-[57vw]":" md:w-[80vw]"}`}></div>
                <div className={`h-[100%] min-w-96 md:w-[20vw] w-screen gap-2 bg-white border-t-2 border-t-slate-600 ${Cal ? "flex flex-col items-center " : "hidden"}`}>
                   
                </div>
                <div className={`h-[100%] min-w-96 md:w-[20vw] w-screen gap-2 bg-white border-t-2 border-t-slate-600 ${ChatBot ? "flex flex-col items-center " : "hidden"}`}>
                    <div className="h-[85%] w-[89%] bg-slate-600/10 mt-1"></div>
                    <div className="h-[10%] w-[89%] bg-slate-700/10 rounded-md flex items-center justify-center gap-4">
                        <input type="text" className='h-10 w-[80%] outline-none bg-transparent' placeholder='Enter Your Doubt' />
                        <button className='px-2 py-2 rounded-full bg-black text-xl text-white  '>
                            <IoMdSend />
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
);
}

export default Home;
