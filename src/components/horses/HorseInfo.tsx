import { Horse } from "../../types/horse";

type HorseField = {
  label: string;
  value: string | number | null | undefined;
};
const HorseInfo = ({ horse }: { horse: Horse }) => {
  const horseInfoArray: HorseField[] = horse
    ? [
        { label: "Breed", value: horse.breed },
        { label: "Gender", value: horse.gender?.name_ar },
        { label: "Age", value: horse.date_of_birth },
        { label: "Father", value: horse.father_name },
        { label: "Mother", value: horse.mother_name },
        { label: "Horse No", value: horse.horse_number },
        { label: "Country Origin", value: horse.country_origin },
        { label: "Production Place", value: horse.production_place || "-" },
        { label: "Out Reason", value: horse.out_reason || "-" },
        { label: "Out Time", value: horse.out_time || "-" },
      ]
    : [];
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-200">
      {horseInfoArray.map(({ label, value }, i) => (
        <p key={i} className="text-lg">
          <span className="font-semibold">{label}:</span> {value || "-"}
        </p>
      ))}
    </div>
  );
};

export default HorseInfo;
