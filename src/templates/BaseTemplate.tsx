import Navbar from '@/components/ui/Navbar';

const BaseTemplate = (props: {
  // leftNav: React.ReactNode;
  // rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div id="page">
      <Navbar />
      <div className="m-0 size-full p-0 text-gray-700 antialiased">
        {props.children}
      </div>
    </div>
  );
};

export { BaseTemplate };
