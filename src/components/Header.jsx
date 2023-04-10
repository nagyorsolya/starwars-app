function Header({ header }) {
  return (
    <div className="lg:w-full w-screen px-2 text-2xl lg:text-4xl text-center rounded py-2 border-b-2 border-black">
      {header}
    </div>
  );
}

export default Header;
