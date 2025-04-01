import React from "react";
import {ClassCard} from "@/components";

const CardsBlock: React.FC = () => {
    return (
        <div className='h-fit w-full grid desktopLarge:grid-cols-5 desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 gap-2'>
            <ClassCard
                id={"12345"}
                title={"Course 1"}
                description={"Hello world"}
                creator={''}
                teacherIds={['']}
                createdAt={new Date()}
            />
            <ClassCard
                id={"1"}
                title={"Course 2"}
                creator={''}
                teacherIds={['']}
                createdAt={new Date()}
            />
            <ClassCard
                id={"2"}
                title={"Course 3"}
                creator={''}
                teacherIds={['']}
                createdAt={new Date()}
            />
            <ClassCard
                id={"3"}
                title={"Course 4"}
                creator={''}
                teacherIds={['']}
                createdAt={new Date()}
            />
            <ClassCard
                id={"4"}
                title={"Course 5"}
                creator={''}
                teacherIds={['']}
                createdAt={new Date()}
            />
        </div>
    );
}

export {CardsBlock};
export default CardsBlock;
