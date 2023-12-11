import BaseLayout from "layout/Base";
import { teamItems } from "../../data/teamItems";

const index = () => {
  return (
    <BaseLayout>
      <section>
        <div className=" flex text-xl mb-8 font-bold mt-10 items-center justify-center">
          Meet the Team
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 max-md:flex-col gap-y-[49px]">
          {teamItems.map((item, index) => (
            <div className="space-y-6 w-full sm:w-[48%] lg:w-[31%]" key={index}>
              <img src={item.img} alt={item.title} className="h-auto w-auto" />
              <div className="space-y-[6px]">
                <p className="text-black text-sm sm:text-lg font-normal font-fira">
                  {item.title}
                </p>
                <p className="text-black text-sm sm:text-lg font-normal font-fira">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </BaseLayout>
  );
};

export default index;
