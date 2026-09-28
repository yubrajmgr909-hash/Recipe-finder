function Footer() {
  return (
    <footer className="border-t border-[#ddd4c4] bg-[#e9e1d3] px-[7%] py-10">

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

        {/* LEFT */}

        <div>
          <h3 className="font-serif text-2xl text-[#293b30]">
            Supper Notes
          </h3>

          <p className="mt-2 text-sm text-[#6f796d]">
            Recipes for real evenings.
          </p>
        </div>

        {/* CENTER COPYRIGHT */}

        <div className="text-center text-sm font-medium text-[#687468]">
          © 2026 Copyright
        </div>

        {/* RIGHT */}

        <div className="text-sm text-[#687468] md:text-right">

          <p className="mt-3">
            Powered by Techspire College
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;