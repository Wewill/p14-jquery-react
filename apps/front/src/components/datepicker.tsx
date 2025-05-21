import { useEffect, useRef } from "react";

// Extend JQuery interface to add datetimepicker property
declare global {
  interface JQuery {
    datetimepicker(options?: { timepicker?: boolean; format?: string }): JQuery;
  }
}

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
      ($(`#${name}`) as JQuery<HTMLElement>).datetimepicker({
        timepicker: false,
        format: "m/d/Y",
      });

      mountedref.current = true;
    });
    // Do not run this effect again
    mountedref.current = true;
  }, [name]);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type="text" />
    </>
  );
}
