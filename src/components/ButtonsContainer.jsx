const ButtonsContainer = ({ buttonClick }) => {
  let buttons = [
    "8",
    "9",
    "C",
    "6",
    "7",
    "/",
    "4",
    "5",
    "*",
    "2",
    "3",
    "+",
    "0",
    "1",
    "-",
    "00",
    ".",
    "=",
  ];
  return (
    <>
      <section className="">
        <div className="row g-2">
          {buttons.map((button) => (
            <div className="col-4" key={button}>
              <button
                className="btn btn-lg w-100 btn-light fw-semibold"
                onClick={() => buttonClick(button.toString())}
              >
                {button}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default ButtonsContainer;
