import React from "react";
import { CardOne, CardThree, CardTwo } from "../asset/icons/services";

export default function Services() {
  return (
    <div className="bg-footer p-10">
      <h2 className="text-center pt-10 font-semibold text-white text-3xl sm:text-5xl mb-4">
        Our Comprehensive Services
      </h2>
      <div className="flex items-center justify-center sm:justify-around mt-20 flex-wrap">
        <ServiceCard
          title="Guident Teachers"
          body="Teachers, we hear you! Drowning in paperwork, chasing grades, and struggling to connect with every student - the daily grind can leave you feeling overwhelmed. But what if there was a tool that could streamline your workflow, empower your teaching, and strengthen relationships with both students and parents?"
          style="bg-[#FF6833]"
          icon={<CardOne />}
        />
        <ServiceCard
          title="Guident School"
          body="Guident isn't just for parents and families – it's a powerful tool for schools too! Our comprehensive School Management App streamlines workflows, boosts staff efficiency, and fosters deeper connections with parents, creating a thriving learning environment for everyone."
          style="bg-[#FAFAFA]"
          icon={<CardTwo />}
        />
        <ServiceCard
          title="Guident Parent"
          body="Rediscover the joy of watching your child learn and grow. Guident is your all-in-one tool that empowers parents to become better in parenting."
          style="bg-[#32BBFF]"
          icon={<CardThree />}
        />
      </div>
    </div>
  );
}

export const ServiceCard = ({ style, icon, title, body }: any) => (
  <div
    className={`${style} m-3 rounded w-[350px] 2xl:w-[400px] flex p-7 flex-col space-y-3 h-[550px]`}
  >
    <h2 className="font-semibold text-xl">{title}</h2>
    <p className="text-sm text-justify">{body}</p>
    <p className="underline capitalize">learn more</p>
    <span>{icon}</span>
  </div>
);
