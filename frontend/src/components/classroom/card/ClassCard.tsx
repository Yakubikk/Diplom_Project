import { Classroom } from "@/models/classroom/classroom";
import { IconClipboard, IconDotsVertical, IconFolder } from "@tabler/icons-react";
import { Avatar } from "@/components";
import {Link} from "@/i18n/routing";

const ClassCard = (classroom: Classroom) => {
    return (
        <Link
            className='flex flex-col w-full h-fit rounded-lg hover:cursor-pointer hover:shadow-md'
            href={`/class/${classroom.id}`}
        >
            <div className="w-full h-24 bg-[url('https://cdn.pixabay.com/photo/2024/02/04/17/10/leaves-8552657_960_720.jpg')]
            bg-cover bg-center rounded-t-lg flex flex-col text-white">
                <div className="w-full h-full custom-gradient-reverse py-3 px-4 rounded-t-lg">
                    <div className="flex gap-2 w-full justify-between">
                        <div className="flex flex-col w-5/6">
                            <span className='text-2xl truncate'>{classroom.title}</span>
                            <span className='text-sm truncate'>{classroom.description}</span>
                        </div>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                            }}
                            className="button min-w-10 h-10 p-2 rounded-full"
                        >
                            <IconDotsVertical/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='relative w-full h-32 border-x border-gray-300'>
                <div className='absolute right-4 -top-10'>
                    <Avatar src='https://i.gifer.com/PzNI.gif' size='huge' username='Egor'/>
                </div>
            </div>
            <div className='flex w-full gap-1 justify-end p-2 border border-gray-300 rounded-b-lg'>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                    }}
                    className="button min-w-10 h-10 p-2 rounded-full"
                >
                <IconClipboard />
                </button>
                <button
                    onClick={(e) => {e.preventDefault()}}
                    className="button min-w-10 h-10 p-2 rounded-full"
                >
                    <IconFolder />
                </button>
            </div>
        </Link>
    );
};

export default ClassCard;