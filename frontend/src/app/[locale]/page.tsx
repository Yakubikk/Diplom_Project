import React from "react";
import {useTranslations} from "next-intl";
import ClassCard from "@components/classroom/card/ClassCard";

const Home: React.FC = () => {
  const t = useTranslations('HomePage');

  return (
    <div className='h-full w-full grid gap-2 p-4'>
      <ClassCard id='121212' title='sadadad' description='dfsadasdsa sad sad' teacherId='q3231233' createdAt={new Date()} />
      <ClassCard id='121212' title='sadadad' description='dfsadasdsa sad sad' teacherId='q3231233' createdAt={new Date()} />
    </div>
  );
}

export default Home;
