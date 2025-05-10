const MyButton = ({ title }: { title: string }) => {
  return (
    <button className="w-full bg-[#E63946] hover:bg-[#D62828] transition-all text-white px-4 py-3 rounded-md font-orbitron font-bold uppercase text-sm">
      {title}
    </button>
  );
};

export default MyButton;
