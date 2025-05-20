import { useEffect, useRef } from "react";

export default function Datepicker({
  name,
  label,
}: {
  name: string;
  label: string;
}) {
  const mountedref = useRef(false);

  useEffect(() => {
    if (mountedref.current) return;

    $(function () {
      $(`#${name}`).datetimepicker({
        timepicker: false,
        format: "m/d/Y",
      });

      mountedref.current = true;
    });
  }, [name]);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} type="text" />
    </>
  );
}
