import { useClockingFindAllQuery } from 'api/clocking'
import 'styles/ClockingsTable.css';
import { IClocking } from 'types/clocking';
import { useMemo, useState, useEffect } from "react";

type SortDir = "ASC" | "DESC";

type SortField =
  | "id"
  | "seconds_duration"
  | "grade"
  | "removed"
  | "person_id"
  | "localization"
  | "start_date"
  | "finish_date"
  | "subject";

function ClockingsList() {
  const searchTerm = ''
  
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const [sortField, setSortField] = useState<SortField>("id");
  const [sortDir, setSortDir] = useState<SortDir>("ASC");

  const { data, isPending } = useClockingFindAllQuery(
    {
      page,
      searchTerm,
      size,
      sort: [sortField, sortDir]
    },
    {
      enabled: true,
      throwOnError: false
    }
  )

  const clockings = data?.content ?? [];

  const totalPages = data?.totalPages ?? 1;
  const currentPage = page;
  const isFirst = data?.first ?? currentPage === 0;
  const isLast = data?.last ?? currentPage >= totalPages - 1;

  const pageOptions = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i);
  }, [totalPages]);
  
  function toggleSort(field: SortField) {
    setPage(0);

    setSortField((prev) => {
      if (field === prev) {
        setSortDir((d) => (d === "ASC" ? "DESC" : "ASC"));
        return prev;
      }
      setSortDir("ASC");
      return field;
    });
  }

  function sortIndicator(field: SortField) {
    if (field !== sortField) return "";
    return sortDir === "ASC" ? " ↑" : " ↓";
  }

  if (isPending)
    return <div>Loading...</div>;
    
  return (
    <div>
      <h1>Clockings Table</h1>

      <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
        <div>
          <label htmlFor="pageSize" style={{ marginRight: 8 }}>
            Rows per page:
          </label>

          <select
            id="pageSize"
            value={size}
            onChange={(e) => {
              const newSize = Number(e.target.value);
              setSize(newSize);
              setPage(0); 
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div>
          <label htmlFor="pageSelect" style={{ marginRight: 8 }}>
            Page:
          </label>

          <select
            id="pageSelect"
            value={currentPage}
            onChange={(e) => setPage(Number(e.target.value))}
          >
            {pageOptions.map((p) => (
              <option key={p} value={p}>
                {p + 1}
              </option>
            ))}
          </select>

          <span style={{ marginLeft: 10 }}>
            of {totalPages}
          </span>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={isFirst}
          >
            Prev
          </button>

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={isLast}
          >
            Next
          </button>
        </div>
      </div>

      <table className="clocking-table">
        <thead>
          <tr>
            <th role="button" onClick={() => toggleSort("id")} style={{ cursor: "pointer" }}>
              ID{sortIndicator("id")}
            </th>

            <th role="button" onClick={() => toggleSort("seconds_duration")} style={{ cursor: "pointer" }}>
              Seconds duration{sortIndicator("seconds_duration")}
            </th>

            <th role="button" onClick={() => toggleSort("grade")} style={{ cursor: "pointer" }}>
              Grade{sortIndicator("grade")}
            </th>

            <th role="button" onClick={() => toggleSort("removed")} style={{ cursor: "pointer" }}>
              Removed{sortIndicator("removed")}
            </th>

            <th role="button" onClick={() => toggleSort("person_id")} style={{ cursor: "pointer" }}>
              PersonId{sortIndicator("person_id")}
            </th>

            <th role="button" onClick={() => toggleSort("localization")} style={{ cursor: "pointer" }}>
              Localization{sortIndicator("localization")}
            </th>

            <th role="button" onClick={() => toggleSort("start_date")} style={{ cursor: "pointer" }}>
              Start Date{sortIndicator("start_date")}
            </th>

            <th role="button" onClick={() => toggleSort("finish_date")} style={{ cursor: "pointer" }}>
              Finish Date{sortIndicator("finish_date")}
            </th>

            <th role="button" onClick={() => toggleSort("subject")} style={{ cursor: "pointer" }}>
              Subject{sortIndicator("subject")}
            </th>
          </tr>
        </thead>

        <tbody>
          {clockings.map((clocking: IClocking) => (
            <tr key={clocking.id}>
              <td>{clocking.id}</td>
              <td>{clocking.secondsDuration}</td>
              <td>{clocking.grade}</td>
              <td>{clocking.removed ? "Yes" : "No"}</td>
              <td>{clocking.personId}</td>
              <td>{clocking.localization}</td>
              <td>{clocking.startDate}</td>
              <td>{clocking.finishDate}</td>
              <td>{clocking.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClockingsList;