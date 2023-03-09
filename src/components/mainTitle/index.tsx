import Fade from "react-reveal/Fade";

type titleProps = {
  title: string;
  titleResponsive?: string;
  subtitle: string;
};

export default function MenuCard({
  title,
  subtitle,
  titleResponsive,
}: titleProps) {
  return (
    <>
      <div className="max-[768px]:mt-6 ">
        <Fade bottom>
          <h1 className=" hidden max-[500px]:block font-medium text-4xl text-blue-600 max-[768px]:text-center">
            {titleResponsive}
          </h1>
          <h1 className=" max-[500px]:hidden font-medium text-4xl text-blue-600 max-[768px]:text-center">
            {title}
          </h1>
          <p className="font-medium text-2xl text-white py-3 max-[768px]:text-center">
            {subtitle}
          </p>
        </Fade>
      </div>
    </>
  );
}
