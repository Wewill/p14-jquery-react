import { defaultData } from "../defaultData";

function CreateDefaultData({
  onClick,
}: {
  onClick: (data: typeof defaultData) => void;
}) {
  return (
    <button type="button" onClick={() => onClick(defaultData)}>
      Fake Employees
    </button>
  );
}

export default CreateDefaultData;
