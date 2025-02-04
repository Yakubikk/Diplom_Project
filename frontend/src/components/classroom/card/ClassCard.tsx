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
            <div className="w-full h-24 bg-[url('https://gstatic.com/classroom/themes/img_learnlanguage.jpg')] bg-cover bg-center rounded-t-lg flex flex-col text-white py-3 px-4">
                <div className="flex gap-2 w-full justify-between">
                    <div className="flex flex-col w-full">
                        <span className='text-2xl'>{classroom.title}</span>
                        <span className='text-sm'>{classroom.description}</span>
                    </div>
                    <IconDotsVertical className="min-w-10 h-10 p-2 rounded-full hover:bg-gray-600 hover:bg-opacity-20" />
                </div>
            </div>
            <div className='relative w-full h-32 border-x border-gray-300'>
                <div className='absolute right-4 -top-10'>
                    <Avatar src='https://i.gifer.com/PzNI.gif' size='huge' username='Egor'/>
                </div>
            </div>
            <div className='flex w-full gap-1 justify-end p-2 border border-gray-300 rounded-b-lg'>
                <IconClipboard className="w-10 h-10 p-2 rounded-full hover:bg-gray-300 hover:bg-opacity-20" />
                <IconFolder className="w-10 h-10 p-2 rounded-full hover:bg-gray-300 hover:bg-opacity-20" />
            </div>
        </Link>
    );
};

export default ClassCard;