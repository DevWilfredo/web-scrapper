const HeaderComponent = ({ title, subtitle }) => {
  return (
    <div className="px-4 py-4 border-b border-gray-700 bg-gray-900">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
  );
};

export default HeaderComponent;
