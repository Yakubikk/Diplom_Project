import React from "react";
import {ClassCard} from "@/components";

const CardsBlock: React.FC = () => {
    return (
        <div className='h-fit w-full grid desktopLarge:grid-cols-5 desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 gap-2'>
            <ClassCard
                id={"12345"}
                title={""}
                teacherId={""}
                createdAt={new Date()}
            />
            <ClassCard
                id={""}
                title={""}
                teacherId={""}
                createdAt={new Date()}
            />
            <ClassCard
                id={""}
                title={""}
                teacherId={""}
                createdAt={new Date()}
            />
            <ClassCard
                id={""}
                title={""}
                teacherId={""}
                createdAt={new Date()}
            />
            <ClassCard
                id={""}
                title={""}
                teacherId={""}
                createdAt={new Date()}
            />
        </div>
    );
}

export {CardsBlock};
export default CardsBlock;
