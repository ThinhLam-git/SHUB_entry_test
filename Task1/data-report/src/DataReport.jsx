import React, { useState } from "react";
import * as XLSX from "xlsx";

const DataReport = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    const data = [];
    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: "binary" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      const validData = sheetData.slice(8).map((row) => ({
        time: row[2],
        amout: row[8],
      }));
      setData(validData);
    };

    reader.readAsBinaryString(file);
  };

  const Calculate = () => {
    if (!startTime || !endTime) {
      alert("Vui lòng chọn thời gian bắt đầu và kết thúc");
      return;
    }

    const start = startTime + ":00";
    const end = endTime + ":00";

    const filteredData = data.filter(
      (item) => item.time >= start && item.time <= end
    );
    const sum = filteredData.reduce((acc, item) => acc + (item.amout || 0), 0);
    setTotal(sum);
  };

  return (
    <div className="border p-1 rounded p-6 space-y-4">
      <h1 className="text-2xl">Data Report</h1>
      <input
        type="file"
        accept=".xlsx, .xls"
        className="mb-4 border p-2 rounded w-100 "
        onChange={handleFile}
      />
      <div className="flex items-center space-x-4">
        <label htmlFor="">Bắt đầu: </label>
        <input
          className="border p-1 rounded"
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <label htmlFor="">Kết thúc: </label>
        <input
          className="border p-1 rounded"
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
        <button
          onClick={Calculate}
        >
          Tính tổng
        </button>
      <h2 className="font-semibold text-lg">Tổng: {total.toLocaleString()} VNĐ</h2>
    </div>
  );
};

export default DataReport;
