import { useEffect, useRef } from "react";

export default function Select({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options?: { name: string; abbreviation: string }[];
}) {
  const mountedref = useRef(false);

  useEffect(() => {
    if (mountedref.current) return;

    $(function () {
      const select = document.getElementById(name);

      if (options && options?.length > 0) {
        options.forEach(function (o) {
          console.log(o);
          const option = document.createElement("option");
          option.value = o.abbreviation;
          option.text = o.name;
          select?.appendChild(option);
        });
      }

      $(`#${name}`).selectmenu();
    });

    // Do not run this effect again
    mountedref.current = true;
  }, [name]);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name}></select>
    </>
  );
}
