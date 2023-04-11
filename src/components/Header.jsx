function Header({ header }) {
  return (
    <div className="lg:w-full px-2 text-2xl lg:text-4xl text-center py-2 border-l-2 border-b-2 border-b-black border-l-black">
      {header}
    </div>
  );
}

export default Header;
