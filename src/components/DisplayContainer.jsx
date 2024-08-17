const DisplayContainer = ({ values }) => {
  return (
    <>
      <section className="mb-4 text-end fs-2 fw-semibold text-muted border rounded px-3 bg-light py-1">
        <span>{values == "" ? "0" : values}</span>
      </section>
    </>
  );
};
export default DisplayContainer;