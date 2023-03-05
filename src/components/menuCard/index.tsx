import { RiArrowRightUpLine } from "react-icons/ri";
import Fade from "react-reveal/Fade";

type cardsProps = {
  title: string;
  description: string;
};

export default function MenuCard({ title, description }: cardsProps) {
  return (
    <>
      <div className="flex justify-center items-center">
        <Fade bottom delay={1000}>
          <div className=" m-4 w-96 bg-zinc-200 flex flex-col justify-evenly items-start rounded-lg cursor-pointer transition-colors hover:bg-zinc-300 max-[768px]:items-center ">
            <div className="w-[100%] flex items-start px-7 py-7">
              <h1 className="text-white text-2xl font-medium pr-4">{title}</h1>
              <RiArrowRightUpLine color="#fff" />
            </div>
            <div className="w-[100%] flex items-start px-7 pb-7">
              <p className="text-slate-100 font-medium text-lg pr-4">
                {description}
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
