import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <>
      <Image
        src={"/images/logo/logo-dark.png"}
        alt="logo"
        width={150}
        height={68}
        unoptimized={true}
        className="dark:hidden"
      />
      <Image
        src={"/images/logo/logo-light.png"}
        alt="logo"
        width={150}
        height={68}
        unoptimized={true}
        className="dark:block hidden"
      />
    </>
  );
};

export default Logo;
