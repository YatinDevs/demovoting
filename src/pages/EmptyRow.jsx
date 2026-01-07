import React from "react";

const EmptyRow = ({ srNo, t }) => {
  const isNotaRow = srNo === 16;

  return (
    <tr className="border-t" style={{ backgroundColor: "#ffffff" }}>
      <td className="px-1 py-4 md:px-2 md:py-2 text-center font-semibold">
        {srNo}
      </td>
      <td className="px-1 py-4 md:px-2 md:py-2 font-semibold">
        {isNotaRow ? <span className="text-center">{t.nota}</span> : ""}
      </td>
      <td className="px-1 py-4 md:px-2 md:py-2 text-center">
        <span className="text-neutral-300">&nbsp;</span>
      </td>
      <td className="px-1 py-4 md:px-2 md:py-2 border-r border-l">
        <span className="text-neutral-300">&nbsp;</span>
      </td>
      <td className="px-1 py-4 md:px-2 md:py-2">
        <button
          disabled
          className="text-xs md:text-sm tracking-tight rounded-full px-2 py-1 md:py-2 bg-[#003399] cursor-not-allowed text-transparent"
        >
          {t.pressButton}
        </button>
      </td>
    </tr>
  );
};

export default EmptyRow;
